import React, { useState } from "react"
import axios from "axios"
import { API_URL } from "../../constants"

const Signup = () => {
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const handleUsername = (e) => setUsername(e.target.value)
	const handlePassword = (e) => setPassword(e.target.value)
	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			const { data } = await axios.post(`${API_URL}/auth/signup`, {
				username,
				password,
			})
			console.log(data)
		} catch (error) {}
	}
	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor="username">Username: </label>
				<input
					type="text"
					name="username"
					id="username"
					value={username}
					onChange={handleUsername}
				/>
			</div>
			<div>
				<label htmlFor="password">Password: </label>
				<input
					type="password"
					name="password"
					id="password"
					value={password}
					onChange={handlePassword}
				/>
			</div>
			<button>Sign up</button>
		</form>
	)
}

export default Signup