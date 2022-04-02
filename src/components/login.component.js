import React, { Component } from "react";

const Login = (props) => {
    const h = props.handleLogin;
    return (
        <div className="outer">
            <div className="inner">
                <form onSubmit={() => h}>
                    <h3>Log in</h3>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="Enter email" />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" />
                    </div>

                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
                </form>
            </div>
        </div>
    );
}

export default Login
// export default class Login extends Component {
//     render() {
//         return (
//             <div className="outer">
//                 <div className="inner">
//                     <form onSubmit={handleSubmit}>
//                         <h3>Log in</h3>
//                         <div className="form-group">
//                             <label>Email</label>
//                             <input type="email" className="form-control" placeholder="Enter email" />
//                         </div>

//                         <div className="form-group">
//                             <label>Password</label>
//                             <input type="password" className="form-control" placeholder="Enter password" />
//                         </div>

//                         <div className="form-group">
//                             <div className="custom-control custom-checkbox">
//                                 <input type="checkbox" className="custom-control-input" id="customCheck1" />
//                                 <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
//                             </div>
//                         </div>

//                         <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
//                     </form>
//                 </div>
//             </div>
//         );
//     }
// }
