import { Route, Routes } from "react-router-dom"

import { SignIn } from "../pages/signIn"
import { SignUp } from "../pages/signUp"

export function AuthRoutes(){
    return (
        <Routes>
            <Route element={<SignIn />} path="/"/>
            <Route element={<SignUp />} path="/registrar"/>
        </Routes>
    )
}