import HomeModal from "./HomeModal";
import { Outlet } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <HomeModal />
            <Outlet />
        </div>
    );
};

export default Home;
