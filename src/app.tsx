import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import {Main} from './pages/main'

export const App: React.FC = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}
