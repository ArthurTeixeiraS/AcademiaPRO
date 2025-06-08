import { Routes, Route } from 'react-router-dom'
import { DashBoard } from '../Pages/DashBoard'
import { Login } from '../Pages/Login'
import { Schedule } from '../Pages/Schedule'
import { NewSchedule } from '../Pages/NewSchedule'
import { MainUsers } from '../Pages/Users'

export function Router(){
    return(
        <>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/dashboard' element={<DashBoard/>}/>
                <Route path='/schedule' element={<Schedule/>}/>
                <Route path='/newschedule' element={<NewSchedule/>}/>
                <Route path='/users' element={<MainUsers/>}/>
            </Routes>
        </>
    )
}
