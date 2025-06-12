import { Routes, Route } from 'react-router-dom'
import { DashBoard } from '../Pages/DashBoard'
import { Login } from '../Pages/Login'
import { Schedule } from '../Pages/Schedule'
import { NewSchedule } from '../Pages/NewSchedule'
import { Customers } from '../Pages/Customer'
import { NewCustomer } from '../Pages/Customer/NewCustomer'
import { NewModality } from '../Pages/Modalities/NewModality'
import { EditCustomer } from '../Pages/Customer/EditCustomer'
import { Modalities } from '../Pages/Modalities'


export function Router(){
    return(
        <>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/dashboard' element={<DashBoard/>}/>
                <Route path='/Customers' element={<Customers/>}/>
                <Route path='/newcustomer' element={<NewCustomer/>}/>
                <Route path="/EditCustomer/:id" element={<EditCustomer/>} />
                <Route path='/newModality' element={<NewModality/>}/>
                <Route path="/modalities" element={<Modalities/>}/>
                <Route path='/schedule' element={<Schedule/>}/>
                <Route path='/newschedule' element={<NewSchedule/>}/>
            </Routes>
        </>
    )
}
