import React, { useState } from "react"
import axios from "axios"
import { API_URL } from "../../constants"
import './Signup.css';
import { Link } from 'react-router-dom';

const Signup = () => {
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const [campus, setCampus] = useState("")
	const [course, setCourse] = useState("")
	const handleUsername = (e) => setUsername(e.target.value)
	const handlePassword = (e) => setPassword(e.target.value)
	const handleCampus = (e) => setCampus(e.target.value)
	const handleCourse = (e) => setCourse(e.target.value)
	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			const { data } = await axios.post(`${API_URL}/auth/signup`, {
				username,
				password,
				campus,
				course
			})
			console.log(data)
		} catch (error) { }
	}
	return (
		<div className="signup">
			<div className="form">
				<h1>Sign up</h1>
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
					<div className="input">
						<label htmlFor="campus">Campus</label>
						<input
							type="text"
							name="campus"
							id="campus"
							value={campus}
							onChange={handleCampus}
						/>
					</div>
					<div className="input">
						<label htmlFor="course">Course</label>
						<input
							type="text"
							name="course"
							id="course"
							value={course}
							onChange={handleCourse}
						/>
					</div>
				</form>
			</div>
			<div className="create">
				<div>
					<h2>Hello!!</h2>
					<h3>Welcome to IronProfile!</h3>
				</div>
				<div>
					<p>If you signup, you agree with all our
						terms and conditions where we can
						do whathever we want with the data!
					</p>
					<Link to="#"><button className="button-white">Create an Account</button></Link>
				</div>
			</div>
		</div>


	)
}

export default Signup