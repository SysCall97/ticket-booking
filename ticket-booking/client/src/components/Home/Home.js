import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import { initializeSigninFramework, signOut } from '../Login/loginManager';
import Movies from '../Movies/Movies';

const Home = () => {
    const [loggedinUser, setLoggedinUser] = useContext(userContext);

    const handleLogOut = () => {
        initializeSigninFramework();
        setLoggedinUser({isLoggedIn: false});
        signOut();
    }

    return (
        <div className="d-flex flex-column">
            <h1>Welcome to booking</h1>
            {
                !loggedinUser.isLoggedIn? 
                <div>
                    <Link to='/login'>
                        <button type="button" class="btn btn-primary">Log in</button>
                    </Link>
                    
                </div>:
                <div>
                    <h2>{loggedinUser.displayName}</h2>
                    <button className="btn btn-danger" onClick={handleLogOut}>Log Out</button>
                    
                </div>
            }
            <Movies />
        </div>
    );
};

export default Home;