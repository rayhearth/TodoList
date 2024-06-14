import React, { useState } from "react";
import { useNavigate } from "react-router";
import { BsCaretRightFill } from "react-icons/bs"

const Login = () => {
	let navigate = useNavigate();

	const [credentials, setCredentials] = useState({
		email: "dead@pool.com",
		password: "laught",
		remember: false,
	});

	const onChange = (e) => {
		setCredentials({
			...credentials,
			[e.target.name]: e.target.value,
		});
	};

	const onSubmit = (e) => {
		e.preventDefault,
			dataServices
				.userLogin(credentials)
				.then((res) => {
					accountServices.saveToken(res.body.token);
					navigate("/dashboard");
				})
				.catch((error) => console.log(error));
	};

	return (
		<section className="login">
			<div className="sign-in">
				<h2> Connexion </h2>
				<form onSubmit={onSubmit}>
					<div className="input-wrapper">
						<label htmlFor="mail-connect">e-mail address</label>
						<input
							type="text"
							name="mail-connect"
							value={credentials.email}
							onChange={onChange}
							id="mail-connect"
						/>
					</div>
					<div className="input-wrapper">
						<label htmlFor="password-connect">Password</label>
						<input type="text" id="password-connect" />
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
				<h2> Créer mon compte </h2>
				<form action="">
					<div className="input-wrapper">
						<label htmlFor="mail-register">Email address</label>
						<input type="text" id="mail-register" />
					</div>
					<div className="input-wrapper">
						<label htmlFor="password-register">Password</label>
						<input type="text" id="password-register" />
					</div>
					
					<div className="input-remember">
						<label htmlFor="remember-me">Remember me</label>
						<input
							type="checkbox"
							id="remember-me"
							className="form-check-input"
							onChange={onChange}
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
