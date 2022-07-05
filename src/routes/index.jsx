import { Routes, Route } from 'react-router-dom'
import LandingPage from '../pages/landingPage'
import LoginPage from '../pages/login'
import RegisterPage from '../pages/register'


export default function RoutesApp (){
    return(
        <Routes>
            <Route path='/'>
                <Route path="/" element={<LandingPage/>}/>
            </Route>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/cadastro" element={<RegisterPage/>}/>
        </Routes>
    )
}
