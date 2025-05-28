import { Routes, Route } from 'react-router-dom'
import { Home } from '../Pages/Home'
import { DashBoard } from '../Pages/DashBoard'
import { Login } from './Login'

export function Router(){
    return(
        <>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/dashboard' element={<DashBoard/>}/>
                <Route path='/login' element={<Login/>}/>
            </Routes>
        </>
    )
}
