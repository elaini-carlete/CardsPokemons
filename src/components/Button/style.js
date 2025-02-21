import styled from "styled-components";

export const ButtonStyle = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 50px;

    div {
        border: 1px solid #fff;
        border-radius: 5px;
        padding: 5px;
    }

    button {
        background-color: #fff;
        cursor: pointer;
        color: #000;
        padding: 10px;
        border-radius: 5px;
    }

    @media (max-width: 992px) {
        margin-bottom: 50px;
    }
`