import React, { useState } from "react";
import { useSelector } from "react-redux";
import user_img from "../assets/img/user.png";

const UserCard = () => {
	
	const profileData = useSelector((state) => state.user);

	const [edit, setEdit] = useState({
		firstName: "",
		lastName: "",
	});

	return (
		<div className="profile">
				<img
					src={profileData.photoUrl || user_img}
					alt={`photo de profil de ${profileData.firstName}`}
				/>
				<h2>Hello {profileData.firstName} {profileData.lastName}!</h2>
		</div>
	);
};

export default UserCard;
