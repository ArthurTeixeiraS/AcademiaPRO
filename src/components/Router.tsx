import { Routes, Route } from 'react-router-dom'
import { DashBoard } from '../Pages/DashBoard'
import { Login } from '../Pages/Login'

export function Router(){
    return(
        <>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/dashboard' element={<DashBoard/>}/>
            </Routes>
        </>
    )
}
