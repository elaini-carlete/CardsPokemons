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
        border: 1px solid #fff;
        border-radius: 5px;
        padding: 5px;
        gap: 10px;
    }

    div div input{
        background-color: #fff;
        cursor: pointer;
        color: #000;
        padding: 10px;
        border-radius: 5px;
    }

    div div img{
        height: 30px;
        padding: 3px;
        border-radius: 5px;
        cursor: pointer;
        background-color: #fff;
        transition: 0.5s ease-in-out;
    }

    div div img:hover{
        height: 31px;
    }
`