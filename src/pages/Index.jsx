import React from "react";
import { useNavigate } from "react-router-dom";
import img_accueil from "../assets/img/character_acc.png";
import { BsCaretRightFill } from "react-icons/bs"

const Index = () => {
	let navigate = useNavigate();
	const login = () => {
		navigate("/login");
	};

	return (
		<section className="home">
			<img src={img_accueil} className="img-accueil" alt="image d'acceuil avec un personnage en 3D en train de planifier sa journée" />
			<h1>To-Do List</h1>
			<p>
				Boostez votre productivité avec notre application de gestion de tâches
				dynamique ! Que vous soyez un professionnel multitâche ou un étudiant
				organisé, simplifiez votre quotidien en planifiant, éditant et
				accomplissant vos tâches en un clin d'œil. Restez agile, restez
				organisé, et atteignez vos objectifs avec facilité !
			</p>
			<button className="start-button" onClick={login}>
				<span>Let's start</span>
				<BsCaretRightFill />
			</button>
		</section>
	);
};

export default Index;
