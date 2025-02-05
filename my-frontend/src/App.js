import React from 'react';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import AddClassRoom from './components/ClassRoom/AddClassRoom';
import ClassRoomList from './components/ClassRoom/ClassRoomList';
import UpdateClassRoom from './components/ClassRoom/UpdateClassRoom';

const App = ()=>{
    return(
        <Router>
            <Routes>
                <Route path = "/" element = {<ClassRoomList/>}/>
                <Route path = "/Add-ClassRoom" element = {<AddClassRoom/>}/>
                <Route path = "/edit-ClassRoom/:id" element = {<UpdateClassRoom/>}/>

            </Routes>
        </Router>
    );
};

export default App;
