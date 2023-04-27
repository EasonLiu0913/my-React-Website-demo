import React, { useState, useEffect } from 'react';
import { Container } from './styled';
import { Link, useNavigate } from 'react-router-dom';
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../../firebase/firebase';

export default function LoginPage() {
    const navigate = useNavigate();

    const [isRegister, setIsRegister] = useState(true);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = user.uid;
                // ...
                // alert('您已登入');
                navigate('/member');
            } else {
                // User is signed out
                // ...
                console.log('user is logged out');
            }
        });
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        if (isRegister) {
            await createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed up

                    console.log(user);
                    alert('你已成功註冊');
                    setTimeout(() => {
                        navigate('/member');
                    }, 1000);
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log('errorCode', errorCode);
                    console.log('errorMessage', errorMessage);

                    if (errorCode) {
                        alert(errorCode);
                    }

                    // ..
                });
        } else {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in
                    // const user = userCredential.user;
                    console.log('login');
                    alert('您已成功登入');
                    setTimeout(() => {
                        navigate('/member');
                    }, 1000);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage);
                    alert(errorCode);
                });
        }
    };

    function handleRegBtnClick() {
        setIsRegister(true);
    }
    function handleLoginBtnClick() {
        setIsRegister(false);
    }
    return (
        <Container>
            <div className="bread-crumbs">
                <Link to="/">Home</Link>
                <span> / </span>
                <span>Login</span>
            </div>

            <div>
                <form>
                    <div
                        className={`register-tab ${isRegister ? 'active' : ''}`}
                        onClick={handleRegBtnClick}
                    >
                        註冊
                    </div>
                    <div
                        className={`login-tab ${isRegister ? '' : 'active'}`}
                        onClick={handleLoginBtnClick}
                    >
                        登入
                    </div>
                    <div>
                        <label htmlFor="useremail" name="useremail">
                            useremail
                        </label>
                        <input
                            type="text"
                            id="useremail"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="password" name="password">
                            password
                        </label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button onClick={onSubmit}>{`${
                        isRegister ? '送出註冊' : '送出登入'
                    }`}</button>
                </form>
            </div>
        </Container>
    );
}
