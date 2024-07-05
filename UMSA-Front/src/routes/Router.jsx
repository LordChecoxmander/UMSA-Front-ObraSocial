import {BrowserRourter as Routes, Route} from 'react-router-dom'

import Login from '../pages/Login'
import Register from '../pages/Register'
import Home from '../pages/Home'
import Doctors from '../pages/Doctors'

const Router = () => {

    return(
        <>
            <Routes>
                <Route path='/login' element={<Login />}/>
                <Route path='/register' element={<Register />}/>
                <Route path='/home' element={<Home />}/>
                <Route path='/doctors' element={<Doctors />}/>
            </Routes>
        </>
    )
}

export default Router