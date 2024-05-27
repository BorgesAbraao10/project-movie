import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './Pages/Home';
import Filme from './Pages/Filme';

function RouteApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/filme/:id" element={<Filme/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RouteApp;