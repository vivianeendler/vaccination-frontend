import { Outlet } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Consulta e agendamento de vacinação contra Covid-19</h1>
            <Outlet />
        </div>
    );
};

export default Home;
