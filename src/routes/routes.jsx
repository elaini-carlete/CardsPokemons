import { BrowserRouter, Routes, Route } from "react-router-dom";
import Posts from "../pages/posts";
import CardsPokemonDetail from "../components/CardsPokemonDetail/index";

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Posts />} />
                <Route path="/pokemon/:name" element={<CardsPokemonDetail />} />
            </Routes>
        </BrowserRouter>
    )
}