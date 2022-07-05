import { Routes, Route } from 'react-router-dom'
import LandingPage from '../pages/landingPage'
import LoginPage from '../pages/login'
import RegisterPage from '../pages/register'
import Home from '../pages/home'


export default function RoutesApp (){
    return(
        <Routes>
            
            <Route path="/a" element={<LandingPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/cadastro" element={<RegisterPage/>}/>
            <Route path="/" element={<Home/>}/>
        </Routes>
    )
}
