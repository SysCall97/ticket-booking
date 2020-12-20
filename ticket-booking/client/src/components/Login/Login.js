import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { userContext } from '../../App';
// import logo from '../../images/logos/logo.png';
import { googleSignIn, initializeSigninFramework } from './loginManager';

const Login = () => {
    document.title = 'Log in';
    initializeSigninFramework();
    const { user } = useContext(userContext);
    const [loggedinUser, setLoggedinUser] = useContext(userContext);

    const history = useHistory();
    const location = useLocation();

    const { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(user => {
                setLoggedinUser(user);
                history.push(from);
            });
    }
    return (
        <div className="formContainer">
            <div className="form">
                <div className="formContent">
                    <h3>Login With</h3>

                    <div className="fireAuth">
                        <div className="mr-auto authLogo">
                            <img
                                src="https://raw.githubusercontent.com/kaziMashry/travel-guru-simple/master/src/images/Icon/google.png"
                                alt=""
                                width="40"
                                className="img-fluid"
                            />
                        </div>
                        <div className="authTitle" onClick={handleGoogleSignIn}><h5>Continue with Google</h5></div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;