
import React from 'react'
import { Route, Routes } from "react-router-dom";

import Home from './Home';
import Signal from "./Signal"


export function Pages() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/signals' element={<Signal />} />
            </Routes>
        </>
    )
}