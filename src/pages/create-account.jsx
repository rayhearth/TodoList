import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { isConnected } from "../feature/user.slice";
import imgprofile from "../assets/img/imgprofile.svg";
import start from "../assets/img/start.svg";

const CreateAccount = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const fileInputRef = useRef(null);

	const [credentials, setCredentials] = useState({
		email: "",
		password: "",
		firstName: "",
		lastName: "",
		photoUrl: "",
	});

	useEffect(() => {
		if (location.state) {
			setCredentials((prev) => ({
				...prev,
				email: location.state.email || "",
				password: location.state.password || "",
			}));
		}
	}, [location.state]);

	const onChange = (e) => {
		const { name, value, files } = e.target;
		if (name === "photoUrl" && files.length > 0) {
			const reader = new FileReader();
			reader.onload = (upload) => {
				setCredentials((prev) => ({
					...prev,
					photoUrl: upload.target.result,
				}));
			};
			reader.readAsDataURL(files[0]);
		} else {
			setCredentials((prev) => ({
				...prev,
				[name]: value,
			}));
		}
	};

	const onSubmit = (e) => {
		e.preventDefault();

		// Validation des champs requis
		if (!credentials.email || !credentials.password || !credentials.firstName || !credentials.lastName) {
			alert("Veuillez remplir tous les champs requis.");
			return;
		}

		// Simuler une réponse API
		const simulatedResponse = {
			body: {
				token: "fake-jwt-token",
				firstName: credentials.firstName,
				lastName: credentials.lastName,
				photoUrl: credentials.photoUrl || imgprofile,
			},
		};

		// Mettre à jour le store avec les informations de l'utilisateur
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

		// Naviguer vers le dashboard
		navigate("/dashboard");
	};

	const handleImageClick = () => {
		fileInputRef.current.click();
	};

	return (
		<section className="create-account">
			<h2>Create Account</h2>
			<form className="account-form" onSubmit={onSubmit}>
				<img
					className="profile-img"
					src={credentials.photoUrl || imgprofile}
					alt="icon for add a profile photo"
					onClick={handleImageClick}
					onKeyDown={(e) => {
						if (e.key === "Enter") {
							handleImageClick();
						}
					}}
					tabIndex="0"
					role="button"
				/>
				<input
					type="file"
					name="photoUrl"
					ref={fileInputRef}
					style={{ display: "none" }}
					onChange={onChange}
				/>
				<div className="input-wrapper">
					<input
						type="text"
						name="email"
						placeholder=" "
						value={credentials.email}
						onChange={onChange}
						id="mail-create"
					/>
					<label htmlFor="mail-create">e-mail</label>
				</div>
				<div className="input-wrapper">
					<input
						type="password"
						name="password"
						placeholder=" "
						value={credentials.password}
						onChange={onChange}
						id="password-create"
					/>
					<label htmlFor="password-create">Password</label>
				</div>
				<div className="input-wrapper">
					<input
						type="text"
						name="firstName"
						placeholder=" "
						value={credentials.firstName}
						onChange={onChange}
						id="firstName-create"
					/>
					<label htmlFor="firstName-create">First Name</label>
				</div>
				<div className="input-wrapper">
					<input
						type="text"
						name="lastName"
						placeholder=" "
						value={credentials.lastName}
						onChange={onChange}
						id="lastName-create"
					/>
					<label htmlFor="lastName-create">Last Name</label>
				</div>
				<button type="submit" className="create-account-btn">
					<span>Je crée mon compte</span>
					<img src={start} alt="" />
				</button>
			</form>
		</section>
	);
};

export default CreateAccount;
