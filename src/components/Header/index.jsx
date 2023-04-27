import React, { useState, useEffect } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { Nav } from './styled';

import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase';

export default function Header() {
    const navigate = useNavigate();
    const [isLogin, setisLogin] = useState(false);
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                setisLogin(true);
            } else {
                // User is signed out
                // ...
                console.log('user is logged out');
            }
        });
    }, [isLogin]);

    function handleLogout(e) {
        e.preventDefault();
        console.log('logout');
        signOut(auth)
            .then(() => {
                // Sign-out successful.
                alert('你已成功登出');
                setisLogin(false);
                setTimeout(() => {
                    navigate('/login');
                }, 1000);
            })
            .catch((error) => {
                // An error happened.
            });
    }
    return (
        <>
            <Nav>
                <Link to="/">Home</Link>
                <Link to="/product">Product Page</Link>
                {isLogin ? (
                    <>
                        <Link to="/member">Member</Link>
                        <a onClick={handleLogout}>Log out</a>
                    </>
                ) : (
                    <Link to="/login">Login</Link>
                )}
            </Nav>

            <Outlet />
        </>
    );
}
