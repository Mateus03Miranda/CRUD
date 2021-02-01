import styled from 'styled-components';

export const Container= styled.div`
    background-color:#1c1c1c;
    height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
    form{
        display:flex;
        flex-direction: column;
        padding:20px;
        align-items:center;
        box-shadow:6px 8px #000;
        background-color:#303030;
        border-radius:15px;
        span{
            font-size:3em;
            font-weight:bold;
            font-family:Roboto, sans-serif;
            color:#FFF;
        }        
    }
`;