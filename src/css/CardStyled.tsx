import styled from 'styled-components';

export const  SquareStyle= styled.div`
width: 350px;
height: 300px;
border: 5px solid transparent;
border-radius: 20px;
background-image: linear-gradient(white,white), linear-gradient(to right,  #ffb300, #00fff4);
background-origin: border-box;
background-clip: content-box, border-box;
/* 정렬 */
display: flex;
align-items: center;
justify-content: center;
text-align:center;
`
export const BottomBtn = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding:10px;
`
export const DelBtn= styled.button`
width:70px;
background-color: white;
border-color:#ffb300;
border-radius: 6px;
margin-right:3px;

&:hover{
background-color: #ffb300;
border-color:transparent;
color:white;
font-weight: 800;
margin-top: -0.88px;
}
`
export const DoneBtn= styled.button`
width:70px;
background-color: white;
border-color:#00fff4;
border-radius: 6px;

&:hover{
background-color: #00fff4;
border-color:transparent;
color: white;
font-weight: 800;
margin-top: -0.88px;
}
`