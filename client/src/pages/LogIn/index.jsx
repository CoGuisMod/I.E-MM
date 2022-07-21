import React from "react";

const index = () => {
  return (
    <div className="container">
      <div className="container_formulario">
        <div className="icono_1">
          <i className="fa-solid fa-user"></i>
        </div>
        <input type="text" className="login" placeholder="Usuario" />
        <input type="password" className="login" placeholder="contraseña" />
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
            <i className="fa-solid fa-graduation-cap"></i>
          </div>
        </div>
      </div>

      <div className="container_img">
        <img src="../../assets/chinos.png" alt="" />
      </div>
    </div>
  );
};

export default index;
