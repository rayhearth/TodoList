import React from "react";

const Login = () => {
	return (
		<section className="login">
			<div className="sign-in">
				<h2> Connexion </h2>
				<form action="">
					<div className="input-wrapper">
						<label htmlFor="mail-connect">Email address</label>
						<input type="text" id="mail-connect" />
					</div>
					<div className="input-wrapper">
						<label htmlFor="password-connect">password</label>
						<input type="text" id="password-connect" />
					</div>
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
						<label htmlFor="password-register">password</label>
						<input type="text" id="password-register" />
					</div>
				</form>
			</div>
		</section>
	);
};

export default Login;
