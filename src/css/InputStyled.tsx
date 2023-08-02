import styled from 'styled-components';

export const InputBox= styled.div`
width: 1200px;
height: 100px;
background-image: linear-gradient(to top, transparent, white 10%, white 90%, transparent);
border-top:5px solid white;
border-bottom:5px solid white;
display: flex;
align-items: center;
justify-content: center;
font-weight: bold;
`

export const TitleInput= styled.input`
  border: 3px solid transparent;
  background-image: linear-gradient(white,white), linear-gradient(to right,  #ffb300, #00fff4);
  background-origin: border-box;
  background-clip: content-box, border-box;
  border-radius: 10px;
  width: 250px;
  height: 25px;
  margin-left: 10px;
  margin-right:10px;
  text-align: center;
  &:focus{
 outline:3px solid orange;
 border-color:transparent;
  }
  ` 
 
export const ContentInput= styled.input`
  border: 3px solid transparent;
  background-image: linear-gradient(white,white), linear-gradient(to right,  #ffb300, #00fff4);
  background-origin: border-box;
  background-clip: content-box, border-box;
  border-radius: 10px;
  border-style: solid;
  border-color:transparent;
  width: 250px;
  height: 25px;
  margin-left:10px;
  margin-right:10px;
  text-align: center;
  &:focus{
  outline:3px solid orange;
  border-color:transparent;
  }
  `
export const DateInput= styled.input`
  border: 3px solid transparent;
  background-image: linear-gradient(white,white), linear-gradient(to right,  #ffb300, #00fff4);
  background-origin: border-box;
  background-clip: content-box, border-box;
  border-radius: 10px;
  border-style: solid;
  border-color:transparent;
  width: 250px;
  height: 25px;
  margin: 0px 10px 0px 10px;
  text-align: center;
  &:focus{
  outline:3px solid orange;
  border-color:transparent;
  }
  
  `
export const AddBtn= styled.button`
  width: 100px;
  height: 35px;
  background-image: linear-gradient(to right,  #ffb300, #00fff4);
  color: white;
  border:2px solid white;
  border-radius: 10px;
  margin-left: 20px;
  font-weight: bold;
  &:hover{
  background-image: linear-gradient(to right,  #c78c00, #00b9af);
  border: 2px solid orange;
  }
`