import {Routes, Route} from "react-router-dom"

import { Details } from "../pages/details"
import { Home } from "../pages/home"
import { NewMovie } from "../pages/newMovie"
import { Profile } from "../pages/profile"

export function AppRoutes(){
    return (
        <Routes>
            <Route element={<Details />} path="/detalhes/:id" />
            <Route element={<Home />} path="/" />
            <Route element={<NewMovie />} path="/adicionar-filme" />
            <Route element={<Profile />} path="/perfil" />
           
        </Routes>
    )
}