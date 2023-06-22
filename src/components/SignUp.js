import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onChangeUsername = (e) => {
        const value = e.target.value;
        setUsername(value);
    }
    const onChangeEmail = (e) => {
        const value = e.target.value;
        setEmail(value);
    }
    const onChangePassword = (e) => {
        const value = e.target.value;
        setPassword(value);
    }

    return (
        <div style={{ marginTop: "100px" }}>
            <div className="container">
                <h1>Sign Up to Skinlyst</h1>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <div className="card-body">
                            <div className="form-group">
                                <label>Username</label>
                                <input type="text" placeholder="username" className="form-control" value={username} onChange={onChangeUsername} />
                            </div>
                            <br />
                            <div className="form-group">
                                <label>Email</label>
                                <input type="text" placeholder="Email" className="form-control" value={email} onChange={onChangeEmail} />
                            </div>
                            <br />
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" placeholder="password" className="form-control" value={password} onChange={onChangePassword} />
                            </div>
                            <br />
                            <div>
                                <button className="btn btn-primary">
                                <Link to='/Login'></Link>
                                SignUp</button>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SignUp;
