import React, { useState } from "react";
import "./styles.css";

import { FaGraduationCap, FaUserAlt } from "react-icons/fa";
import { UserAuth } from "../../context/AuthContext";

const index = () => {
  const { logIn, user } = UserAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(user);

  const handleSubmit = (e) => {
    e.preventDefault();
    logIn(email, password);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="container_formulario">
        <div className="icono_1">
          <FaUserAlt />
        </div>
        <input
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="login"
          placeholder="Usuario"
        />
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className="login"
          placeholder="contraseña"
        />
        <button className="btn">Iniciar Sesion</button>
        <a href="#" className="forgot">
          Olvidaste tu contraseña?
        </a>

        <div className="card">
          <div className="text_card">
            <p>Visita nuestra</p>
            <p>pagina</p>
            <p>principal!</p>
          </div>

          <div className="img_card">
            <FaGraduationCap />
          </div>
        </div>
      </form>

      <div className="container_img">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/ie-mm-a2c59.appspot.com/o/pexels-rebecca-zaal-764681.jpg?alt=media&token=f3ba4971-f87f-4119-bd51-94323df0ea42"
          alt=""
        />
      </div>
    </div>
  );
};

export default index;
