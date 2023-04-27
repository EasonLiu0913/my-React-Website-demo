import { useState } from 'react';

import {
    createBrowserRouter,
    createRoutesFromElements,
    Router,
    Route,
    RouterProvider,
    Link,
} from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Home from './pages/Home';
import ProductsPage from './pages/ProductPage';
import ProductDetails from './pages/ProductDetails';
import LoginPage from './pages/LoginPage';
import MemberPage from './pages/MemberPage';

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Header />}>
                <Route index element={<Home />} />
                <Route path="/product" element={<ProductsPage />}></Route>
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/member" element={<MemberPage />} />
            </Route>
        )
    );

    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
