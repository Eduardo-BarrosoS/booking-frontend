import {
    Routes,
    Route,
  } from "react-router-dom";
import { Home } from "./pages/Home/Index";
import { Hotel } from "./pages/Hotel";
import { List } from "./pages/List";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={ <Home />}/>
            <Route path="/hotels" element={ <List />}/>
            <Route path="/hotel" element={ <Hotel />}/>
        </Routes>
    )
}