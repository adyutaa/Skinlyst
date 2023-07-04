import  "../../index.css";
import { useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";



export default function SignInScreen() {
    const { search } = useLocation();
    const redirectInUrl = new URLSearchParams(search).get('redirect');
    const redirect = redirectInUrl ? redirectInUrl : '/';
    return (
        <Container className="small-container">
            <Helmet>
                <title>Sign In</title>
            </Helmet>
            <h1 className="my-3">
                Sign In
            </h1>
            <Form>
                <Form.Group className="mb-3" controlId="Email">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="Password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Password" required />
                </Form.Group>
                <div className="mb-3">
                    <Button type='submit'>Sign In</Button>
                </div>
                <div className="mb-3">
                    New Customer?{' '}
                    <Link to={`/signup?redirect=${redirect}`}>Create Your Account</Link>
                </div>
            </Form>
            </Container>
    )
}