import React, { useState } from "react";
import { useNavigate } from "react-router";
import { BsCaretRightFill } from "react-icons/bs";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";
import { useDispatch } from "react-redux";
import { isConnected } from "../feature/user.slice";

const Login = () => {
	let navigate = useNavigate();
	const dispatch = useDispatch();

	const [credentials, setCredentials] = useState({
		email: "dead@pool.com",
		password: "laught",
		remember: false,
	});

	const onChange = (e) => {
		const { name, value, type, checked } = e.target;
		setCredentials({
			...credentials,
			[name]: type === "checkbox" ? checked : value,
		});
	};

	const onSubmit = (e) => {
		e.preventDefault();
		// Simuler une réponse API
		const simulatedResponse = {
			body: {
				token: "fake-jwt-token",
				firstName: "Jane",
				lastName: "Doe",
				photoUrl: "../assets/img/user.png",
			},
		};

		// Simuler le stockage du token et la mise à jour du store
		dispatch(
			isConnected({
				isAuthentificated: true,
				email: credentials.email,
				firstName: simulatedResponse.body.firstName,
				lastName: simulatedResponse.body.lastName,
				photoUrl: simulatedResponse.body.photoUrl,
				token: simulatedResponse.body.token,
			})
		);
		navigate("/dashboard");
	};

	const handleCreateAccount = (e) => {
		e.preventDefault();
		navigate("/create-account", {
			state: { email: credentials.email, password: credentials.password },
		});
	};

	return (
		<section className="login">
			<div className="sign-in">
				<h2>Sign In</h2>
				<form onSubmit={onSubmit}>
					<div className="input-wrapper">
						<input
							type="text"
							name="email"
							placeholder=" "
							value={credentials.email}
							onChange={onChange}
							id="mail-connect"
						/>
						<label htmlFor="mail-connect">e-mail address</label>
					</div>
					<div className="input-wrapper">
						<input
							type="password"
							name="password"
							placeholder=" "
							value={credentials.password}
							onChange={onChange}
							id="password-connect"
						/>
						<label htmlFor="password-connect">Password</label>
					</div>

					<div className="input-wrapper">
						<p>Mot de passe oublié ?</p>
					</div>

					<button type="submit" className="sign-in-btn">
						<span>Se connecter</span>
						<BsCaretRightFill />
					</button>
				</form>
			</div>
			<div className="sign-up">
				<h2>Sign Up</h2>
				<form onSubmit={handleCreateAccount}>
					<div className="input-wrapper">
						<input
							type="text"
							name="email"
							placeholder=" "
							value={credentials.email}
							onChange={onChange}
							id="mail-register"
						/>
						<label htmlFor="mail-register">Email address</label>
					</div>
					<div className="input-wrapper">
						<input
							type="password"
							name="password"
							placeholder=" "
							value={credentials.password}
							onChange={onChange}
							id="password-register"
						/>
						<label htmlFor="password-register">Password</label>
					</div>

					<div className="input-remember">
						<label htmlFor="remember-me">
							Remember me
							{credentials.remember ? (
								<IoIosCheckmarkCircleOutline />
							) : (
								<MdOutlineRadioButtonUnchecked />
							)}
						</label>
						<input
							type="checkbox"
							name="remember"
							id="remember-me"
							className="form-check-input"
							onChange={onChange}
							checked={credentials.remember}
							style={{ display: "none" }}
						/>
					</div>

					<button type="submit" className="sign-up-btn">
						<span>S'inscrire</span>
						<BsCaretRightFill />
					</button>
				</form>
			</div>
			
		</section>
	);
};

export default Login;
