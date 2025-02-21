import styled from "styled-components";

export const HeaderStyle = styled.header`
    div{
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding: 20px;
    }

    div img{
        height: 60px;
    }

    div div{
        display: flex;
        gap: 20px;
    }

    div div div{
        border: 1px solid #fff;
        border-radius: 5px;
        padding: 5px;
        display: flex;
        gap: 10px;
    }

    div div div input{
        background-color: #fff;
        cursor: pointer;
        color: #000;
        padding: 10px;
        border-radius: 5px;
    }

    div div div img{
        height: 32px;
        padding: 3px;
        border-radius: 5px;
        cursor: pointer;
        background-color: #fff;
    }

    @media (max-width: 768px) {
        div{
            flex-direction: column;
        }

        div div{
            flex-direction: row;
        }
    }

    @media (max-width: 576px) {
        div div{
            flex-direction: column;
        }

        div div div{
            flex-direction: row;
        }
    }
`