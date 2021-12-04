import { useState } from "react";
import Cards from "../components/Cards";

function Home({ handleNav }) {
  const [options, setOptions] = useState([
    {
      icon: "./industry.png",
      title: "Solicitudes de creacion de empresas",
      info: "2 solicitudes por tratar",
    },
    {
      icon: "./chart.png",
      title: "Indicadores",
      info: "Visitado por ultima vez: 31/01/2021",
    },
    {
      icon: "./usertie.png",
      title: "Inscripcion de empleados en empresas",
      info: "3 usuarios sin empresa",
    },
    {
      icon: "./usercog.png",
      title: "Gestion de Usuarios",
      info: "532 usuarios activos en la plataforma",
    },
  ]);
  return (
    <div>
      <Cards options={options} handleNav={handleNav} />
    </div>
  );
}

export default Home;
