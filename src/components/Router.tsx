import { Routes, Route } from 'react-router-dom'
import { Home } from '../Pages/Home'
import { DashBoard } from '../Pages/DashBoard'

export function Router(){
    return(
        <>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/dashboard' element={<DashBoard/>}/>
            </Routes>
        </>
    )
}