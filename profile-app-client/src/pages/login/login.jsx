import React, { useState } from "react"
import axios from "axios"
import { API_URL } from "../../constants"
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const handleUsername = (e) => setUsername(e.target.value)
	const handlePassword = (e) => setPassword(e.target.value)
	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			const { data } = await axios.post(`${API_URL}/auth/signin`, {
				username,
				password,
			})
			localStorage.setItem("authToken", data)
		} catch (error) { }
	}
	return (
		<div className="login">
			<div className="left">
				<h1>Log in</h1>
				<form onSubmit={handleSubmit}>
					<div className="input">
						<label htmlFor="username">Username</label>
						<input
							type="text"
							name="username"
							id="username"
							value={username}
							onChange={handleUsername}
						/>
					</div>
					<div className="input">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							name="password"
							id="password"
							value={password}
							onChange={handlePassword}
						/>
					</div>
					<p>If you don't have an account yet, you <br>
					</br>can create your account <Link to="/api/auth/signup">here.</Link>
					</p>
				</form>
			</div>
			<div className="right">
				<div>
					<h2>Hello!!</h2>
					<h3>Awesome to have at IronProfile again!</h3>
				</div>
				<div>
					<p>If you signup, you agree with all our
						terms and conditions where we can
						do whathever we want with the data!
					</p>
					<Link to="#"><button className="button-white">Log in</button></Link>
				</div>
			</div>

		</div>
	)
}

export default Login