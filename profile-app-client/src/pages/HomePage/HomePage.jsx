import React from "react"
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
	return <div className="home-page">
        <div className="div-left">
        <h1>IronProfile</h1>
        <p className="text">Today we will create an app<br></br> with authoritation, adding<br></br> some cool styles!</p>
        <div className="buttons">
        <Link to= "/api/auth/signup"><button>Sign up</button></Link>
        <Link to= "/api/auth/login"><button>Log in</button></Link>   
        </div>
        </div>
        <div className="div-right">

        </div>
    </div>
}

export default HomePage