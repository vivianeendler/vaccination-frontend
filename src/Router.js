import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Schedule from "./Pages/Schedule";
import Query from "./Pages/Query";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} index />
                <Route path="schedule" element={<Schedule />} />
                <Route path="query" element={<Query />} />
                <Route path="*" element={"Página não encontrada"} />
            </Routes>
        </BrowserRouter>
    );
};
export default Router;
