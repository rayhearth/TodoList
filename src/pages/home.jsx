import React from 'react';
import Images from '../assets/img/Images';



const Home = () => {
  return (
    <div>
      <img src={Images.image1} alt="" />
      <h1>To-Do List</h1>
      <p>Boostez votre productivité avec notre application de gestion de tâches dynamique ! Que vous soyez un professionnel multitâche ou un étudiant organisé, simplifiez votre quotidien en planifiant, éditant et accomplissant vos tâches en un clin d'œil. Restez agile, restez organisé, et atteignez vos objectifs avec facilité !</p>
    </div>
  );
};

export default Home;