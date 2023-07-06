import React, { useContext, useEffect, useReducer } from 'react';
import Chart from 'react-google-charts';
import axios from 'axios';
import { Store } from '../components/Store';
import { getError } from '../utils';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import '../css/DashboardScreen.css'
import { Bar } from '@nivo/bar';
import Footer from '../components/Footer';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        summary: action.payload,
        loading: false,
      };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default function DashboardScreen() {
  const [{ loading, summary, error }, dispatch] = useReducer(reducer, {
    loading: true,
    error: '',
  });
  const { state } = useContext(Store);
  const { userInfo } = state;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('/api/orders/summary', {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        });
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (err) {
        dispatch({
          type: 'FETCH_FAIL',
          payload: getError(err),
        });
      }
    };
    fetchData();
  }, [userInfo]);

  return (
    <div>
      <h1 className='title-dashboard'>Dashboard</h1>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          <Row className='card-row'>
            <Col md={3}>
              <Card className='total-user'>
                <Card.Body>
                  <Card.Title>
                    <h4>
                      {summary.users && summary.users[0]
                        ? summary.users[0].numUsers
                        : 0}
                    </h4>
                  </Card.Title>
                  <Card.Text><h5>Users</h5></Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className='total-order'>
                <Card.Body>
                  <Card.Title>

                    <h4>
                      {summary.orders && summary.users[0]
                        ? summary.orders[0].numOrders
                        : 0}
                    </h4>
                  </Card.Title>
                  <Card.Text> <h5>Orders</h5></Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className='total-revenue'>
                <Card.Body>
                  <Card.Title>
                    <h4>
                      Rp
                      {summary.orders && summary.users[0]
                        ? summary.orders[0].totalSales.toFixed(2)
                        : 0}
                    </h4>
                  </Card.Title>
                  <Card.Text><h5>Total Revenue</h5></Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <div className="my-5 text-center sales-grafik">
            <h2>Sales</h2>
            {summary.dailyOrders.length === 0 ? (
              <MessageBox>No Sale</MessageBox>
            ) : (
              <Chart
                width="98%"
                height="400px"
                chartType="AreaChart"
                loader={<div>Loading Chart...</div>}
                data={[
                  ['Date', 'Sales'],
                  ...summary.dailyOrders.map((x) => [x._id, x.sales]),
                ]}
              ></Chart>
            )}
          </div>

          <div className='flex-2-chart'>
            <div className="my-3 border-chart-pie">
              <h2>Categories</h2>
              {summary.productCategories.length === 0 ? (
                <MessageBox>No Category</MessageBox>
              ) : (
                <Chart
                  width="600px"
                  height="400px"
                  chartType="PieChart"
                  loader={<div>Loading Chart...</div>}
                  data={[
                    ['Category', 'Products'],
                    ...summary.productCategories.map((x) => [x._id, x.count]),
                  ]}
                ></Chart>
              )}
            </div>

            <div className='border-chart-bar'>
              <h2>Top 5 Sales by Categories</h2>
              {summary.productCategories.length === 0 ? (
                <MessageBox>No Category</MessageBox>
              ) : (
                <Chart
                  width="600px"
                  height="400px"
                  chartType="Bar"
                  loader={<div>Loading Chart...</div>}
                  data={[
                    ['Category', 'Products'],
                    ...summary.categorySales.map((x) => [x.category, x.sales]),
                  ]}
                ></Chart>
              )}

            </div>
          </div>
          <br/><br/>
          <Footer />
        </>
      )}
    </div>
  );
}

