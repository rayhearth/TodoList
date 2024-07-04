import React, { useState } from "react";
import { useNavigate } from "react-router";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const navigate = useNavigate();

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const handleLoginClick = () => {
		navigate("/login");
	};

	const handleAccueilClick = () => {
		navigate("/");
	};

	return (
		<nav className={`navigation ${isOpen ? "open" : ""}`}>
			<div className="toggle" onClick={toggleMenu}>
				<HiOutlineMenuAlt2 />
			</div>
			<div className="menu">
				<ul>
					<li>
						<a href="Login" className="scrollto">
							<span className="icon">
								<i className="fas fa-candy-cane"></i>
							</span>
							<span className="title" onClick={handleLoginClick}>
								Login
							</span>
						</a>
					</li>
					<li>
						<a href="dashboard" className="scrollto">
							<span className="icon">
								<i className="fas fa-store"></i>
							</span>
							<span className="title">Mes Tâches</span>
						</a>
					</li>
					<li>
						<a href="" className="scrollto">
							<span className="icon">
								<i className="fas fa-user"></i>
							</span>
							<span className="title" onClick={handleAccueilClick}>
								Accueil
							</span>
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
