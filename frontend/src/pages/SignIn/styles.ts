import styled from 'styled-components';

export const Container= styled.div`
    background-color:#1c1c1c;
    height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
    position:relative;
    main{
        display:flex;
        flex-direction:column;
        justify-content:space-around;
        align-items:center;
       
        h1{
            font-family:Roboto, sans-serif;
            font-size:70px;
            transition:all 0.2s;
            color:#F0F0F0;
            font-weight:bold;
        }
        form{
            display:flex;
            flex-direction: column;
            padding:20px;
            align-items:center;
            box-shadow:4px 6px #000;
            background-color:#323232;
            border-radius:40px;
            width:630px;
            height:550px;
            transition:all 0.4s;
            &:hover {
                border-radius:20px;
                box-shadow:none;  
            }
            span{
                font-size:70px;
                font-weight:bold;
                font-family:Roboto, sans-serif;
                color:#DE8C18;
                margin-bottom:72px;
            }        
            
        }
    }
    
   
`;