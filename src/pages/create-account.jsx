import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";

const CreateAccount = () => {
  const location = useLocation();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (location.state) {
      setCredentials({
        email: location.state.email || "",
        password: location.state.password || "",
      });
    }
  }, [location.state]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // Logic for creating a new account goes here
  };

  return (
    <section className="create-account">
      <h2>Create Account</h2>
      <form onSubmit={onSubmit}>
        <div className="input-wrapper">
          <img src=" " alt="" />
        </div>
        <div className="input-wrapper">
          <label htmlFor="mail-create">Nom</label>
          <input
            type="text"
            name="email"
            value=""
            onChange={onChange}
            id="mail-create"
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="mail-create">Prénom</label>
          <input
            type="text"
            name="email"
            value=""
            onChange={onChange}
            id="mail-create"
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="mail-create">Pseudo</label>
          <input
            type="text"
            name="email"
            value=""
            onChange={onChange}
            id="mail-create"
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="mail-create">Email address</label>
          <input
            type="text"
            name="email"
            value={credentials.email}
            onChange={onChange}
            id="mail-create"
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password-create">Password</label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={onChange}
            id="password-create"
          />
        </div>
        <button type="submit" className="create-account-btn">
          <span>Create Account</span>
        </button>
      </form>
    </section>
  );
};

export default CreateAccount;
