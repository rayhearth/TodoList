import React from "react";

const Login = () => {
	return (
		<section className="login">
			<div className="sign-in">
				<h2> Connexion </h2>
				<form action="">
					<input type="text" id="mail-connect" />
					<label htmlFor="mail-connect">Email address</label>
					<input type="text" id="password-connect" />
					<label htmlFor="password-connect">password</label>
				</form>
			</div>
			<div className="sign-up">
				<h2> Créer mon compte </h2>
				<form action="">
					<input type="text" id="mail-register" />
					<label htmlFor="mail-register">Email address</label>
					<input type="text" id="password-register" />
					<label htmlFor="password-register">password</label>
				</form>
			</div>
		</section>
	);
};

export default Login;
