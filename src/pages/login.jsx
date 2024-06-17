import React, { useState } from "react";
import { useNavigate } from "react-router";
import { BsCaretRightFill } from "react-icons/bs";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";
import { useDispatch } from "react-redux";

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
		e.preventDefault,
			dataServices
				.userLogin(credentials)
				.then((res) => {
					accountServices.saveToken(res.body.token);
					dispatch(
						isConnected({
							isAuthentificated: true,
							email: credentials.email,
							firstname: res.body.firstname,
							lastname: res.body.lastname,
							token: res.body.token,
						})
					);
					navigate("/dashboard");
				})
				.catch((error) => console.log(error));
	};

	return (
		<section className="login">
			<div className="sign-in">
				<h2> Sign In </h2>
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
						<input
							type="password"
							name="password"
							value={credentials.password}
							onChange={onChange}
							id="password-connect"
						/>
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
				<h2> Sign Up </h2>
				<form onSubmit={onSubmit}>
					<div className="input-wrapper">
						<label htmlFor="mail-register">Email address</label>
						<input
							type="text"
							name="email"
							value={credentials.email}
							onChange={onChange}
							id="mail-register"
						/>
					</div>
					<div className="input-wrapper">
						<label htmlFor="password-register">Password</label>
						<input
							type="password"
							name="password"
							value={credentials.password}
							onChange={onChange}
							id="password-register"
						/>
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
