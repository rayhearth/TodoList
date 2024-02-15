import React from "react";
import img_accueil from "../assets/img/character_acc.png";
import start from "../assets/img/start.svg";

const Home = () => {
	return (
		<section className="home">
			<img src={img_accueil} className="logo react" alt="React logo" />
			<h1>To-Do List</h1>
			<p>
				Boostez votre productivité avec notre application de gestion de tâches
				dynamique ! Que vous soyez un professionnel multitâche ou un étudiant
				organisé, simplifiez votre quotidien en planifiant, éditant et
				accomplissant vos tâches en un clin d'œil. Restez agile, restez
				organisé, et atteignez vos objectifs avec facilité !
			</p>
			<button className="start-button">Let's start </button>
		</section>
	);
};

export default Home;
