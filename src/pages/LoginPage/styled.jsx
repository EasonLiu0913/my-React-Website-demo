import styled from 'styled-components';

export const Container = styled.div`
    width: 80%;
    margin: auto;
    padding-top: 100px;

    a {
        color: lightseagreen;
    }

    a:hover {
        color: lightpink;
    }

    .bread-crumbs {
        margin-bottom: 100px;
    }

    form {
        border: 3px solid lightblue;
        font-size: 1.7rem;
        padding: 30px;
        position: relative;
        z-index: 1;
        background-color: #fff;
    }

    form > div {
        margin-bottom: 30px;
        display: flex;
        align-items: center;
    }

    form > div:last-child {
        margin-bottom: 0;
    }

    form .register-tab,
    form .login-tab {
        margin-bottom: 0;
        padding: 3px 30px;
        position: absolute;
        top: -36px;

        background-color: lightblue;
        color: black;
        clip-path: polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%);
        font-size: 1.2rem;
        cursor: pointer;
    }
    form .register-tab {
        left: -3px;
    }

    form .login-tab {
        left: 94px;
    }

    form .register-tab.active,
    form .login-tab.active {
        background-color: lightcoral;
    }

    form label {
        margin-right: 30px;
        color: #0e633d;
    }

    form input {
        /* padding: 5px 30px; */
        font-size: 1.3rem;
    }

    form button {
        padding: 5px 20px;
        font-size: 1.3rem;
    }
`;
