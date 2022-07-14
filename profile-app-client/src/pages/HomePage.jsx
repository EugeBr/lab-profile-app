import React from "react"

const HomePage = () => {
	return <div>
        <h1>IronProfile</h1>
        <p>Today we will create an app with authoritation, adding some cool styles!</p>
        <Link to= "/signup"><button>Signup</button></Link>
        <Link to= "/login"><button>Login</button></Link>
    </div>
}

export default HomePage