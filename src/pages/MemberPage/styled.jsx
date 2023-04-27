import styled from 'styled-components';

export const Container = styled.div`
    width: 80%;
    margin: auto;
    padding-top: 100px;

    h1 {
        font-size: 2rem;
        margin-bottom: 20px;
    }

    a {
        color: lightseagreen;
    }

    a:hover {
        color: lightpink;
    }

    .bread-crumbs {
        margin-bottom: 20px;
    }

    form label {
        margin-right: 20px;
        font-weight: bold;
        font-size: 1.4rem;
    }

    form span {
        font-size: 1.4rem;
    }

    form .deleteUser {
        background-color: red;
        color: #fff;
        font-size: 1.3rem;
        margin-top: 50px;
    }
`;
