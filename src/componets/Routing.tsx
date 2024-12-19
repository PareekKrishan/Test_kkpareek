import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./HomePage"
import SignUpPage from "./SignUpPage"



function Routing() {
    return (
        <>
            <BrowserRouter>

                <Routes>

                    <Route path="/" element={<HomePage />} />

                    <Route path="/sign-up" element={<SignUpPage />} />

                </Routes>

            </BrowserRouter>

        </>
    )
}


export default Routing