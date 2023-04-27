import React, { useState, useEffect } from 'react';
import { Container } from './styled';
import {
    onAuthStateChanged,
    getAuth,
    deleteUser,
    reauthenticateWithCredential,
} from 'firebase/auth';
import { auth } from '../../firebase/firebase';
import { Link, useNavigate } from 'react-router-dom';

export default function MemberPage() {
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                // const uid = user.uid;
                console.log('user', user);
                setUser(user);
            } else {
                console.log('user is logged out');
            }
        });
    }, []);

    function handleInputChange() {
        console.log('changed');
    }

    function handleDelete(e) {
        e.preventDefault();
        // deleteUser(getAuth().currentUser)

        deleteUser(user)
            .then(() => {
                alert('你已成功刪除使用者');
                console.log('Successfully deleted user');
                navigate('/login');
            })
            .catch((error) => {
                console.log('Error deleting user:', error);
                const credential = promptForCredentials();

                reauthenticateWithCredential(user, credential)
                    .then(() => {
                        // User re-authenticated.
                        handleDelete();
                    })
                    .catch((error) => {
                        // An error ocurred
                        // ...
                    });
            });

        // signOut(auth)
        //     .then(() => {
        //         // Sign-out successful.
        //         alert('你已成功登出');
        //         setisLogin(false);
        //         setTimeout(() => {
        //             navigate('/login');
        //         }, 1000);
        //     })
        //     .catch((error) => {
        //         // An error happened.
        //     });
    }

    return (
        <Container>
            <div className="bread-crumbs">
                <Link to="/">Home</Link>
                <span> / </span>
                <span>member</span>
            </div>

            <h1>User Info:</h1>
            <form>
                <div>
                    <label htmlFor="useremail">email:</label>
                    <span>{user?.email}</span>
                </div>
                <div>
                    <label htmlFor="password" name="password">
                        createAt:
                    </label>
                    <span>{user?.metadata?.creationTime}</span>
                </div>
                <div>
                    <label htmlFor="password" name="password">
                        lastLoginAt:
                    </label>
                    <span>{user?.metadata?.lastSignInTime}</span>
                </div>
                <div>
                    <label htmlFor="password" name="password">
                        emailVerified:
                    </label>
                    <span>{user?.emailVerified?.toString()}</span>
                </div>

                <button className="deleteUser" onClick={handleDelete}>
                    Delete Me
                </button>
            </form>
        </Container>
    );
}
