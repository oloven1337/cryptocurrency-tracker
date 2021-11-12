import React from 'react'
import {Routes, Route} from 'react-router-dom'

import {Main} from './pages/main'
import {Signup} from "./pages/signup";
import {Header} from "./components/header";
import {Cryptocurrency} from "./pages/cryptocurrency";

export const App: React.FC = () => {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/cryptocurrency" element={<Cryptocurrency/>}/>
            </Routes>
        </>
    )
}
