import { Routes, Route } from 'react-router-dom'
import { DashBoard } from '../Pages/DashBoard'
import { Login } from '../Pages/Login'
import { Schedule } from '../Pages/Schedule'
import { NewSchedule } from '../Pages/NewSchedule'
import { Customers } from '../Pages/Customer'
import { NewCustomer } from '../Pages/NewCustomer'
import { NewModality } from '../Pages/NewModality'
import { EditCustomerUser } from '../Pages/EditCustomer'
import { Modalitys } from '../Pages/Modalitys'


export function Router(){
    return(
        <>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/dashboard' element={<DashBoard/>}/>
                <Route path='/schedule' element={<Schedule/>}/>
                <Route path='/newschedule' element={<NewSchedule/>}/>
                <Route path='/Customers' element={<Customers/>}/>
                <Route path='/newcustomer' element={<NewCustomer/>}/>
                <Route path='/newModality' element={<NewModality/>}/>
                <Route path="/EditCustomer/:id" element={<EditCustomerUser/>} />
                <Route path="/Modalitys" element={<Modalitys/>}/>
            </Routes>
        </>
    )
}
