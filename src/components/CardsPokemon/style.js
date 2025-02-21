import styled from "styled-components";

export const CardsStyle = styled.div`
    max-width: 50%;
    margin: 0 auto;

    ul{
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 30px;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin-top: 30px;
    }

    ul li{
        border: 1px solid #fff;
        border-radius: 5px;
        padding: 20px;
    }

    ul li img{
        height: 100%;
        background-color: #fff;
        cursor: pointer;
        border-radius: 5px;
    }

    ul li p{
        margin-top: 10px;
    }

    @media (max-width: 992px) {
        max-width: 30%;

        ul{
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (max-width: 576px) {
        ul{
            grid-template-columns: repeat(1, 1fr);
        }
    }
    `