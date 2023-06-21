import React from 'react';
import { useState } from "react";
import "./css/App.css";
import { styled } from 'styled-components'; 
import Box from './component/InputBox'; //input 박스를 보여줍니다.
import Card from './component/Card'; //할일 카드를 보여줍니다.


const App = () => {
//할일 카드 내용을 담은 배열입니다.
//isdone은 할일 완료 여부를 나타내는 값입니다.
const [cards,setCards] = useState([
  {id:1, boxTitle: '리액트 공부하기', boxContent: '"리액트 기초를 공부해봅시다."', boxDate: '23/06/14', isdone: false },
  {id:2, boxTitle: '자바스크립트 공부하기', boxContent: '"자바스크립트 기초를 공부해봅시다."', boxDate: '23/06/15', isdone: false },
  {id:3, boxTitle: 'html 공부하기', boxContent: '"html 기초를 공부해봅시다."', boxDate: '23/06/11', isdone: true },
  {id:4, boxTitle: 'css 공부하기', boxContent: '"css 기초를 공부해봅시다."', boxDate: '23/06/12', isdone: true },

]);

//input 박스를 보여주기 위해 usestate로 변수 선언
 const [boxTitle, setBoxTitle] = useState("");
 const [boxContent, setBoxContent] = useState("");
 const [boxDate, setBoxDate] = useState("");

 //입력한 값을 저장하는 핸들러 함수
const onTitleChangeHandler = (event) => {
  setBoxTitle(event.target.value)
}
const onContentChangeHandler = (event) => {
  setBoxContent(event.target.value)
}
const onDateChangeHandler = (event) => {
  setBoxDate(event.target.value)
}
//인풋 박스의 추가하기 버튼
 const addCardHandler = () => {
 const newCard = {
  id: cards.length +1,
  boxTitle: boxTitle,
  boxContent: boxContent,
  boxDate: boxDate,
  isdone: false,//isdone의 기본값을 false로 설정
};
//추가하기를 누르고 나면 초기화
 setBoxTitle("");
 setBoxContent("");
 setBoxDate("");
 setCards([...cards, newCard]);
 };

 //카드 박스를 보여주기 위한 함수들 선언: 취소<->완료버튼 변경 기능
 const CbtnUserHandler = (id) => {
  const doneCardList = cards.map((card) => {
    if (card.id === id) {
      return {
        ...card,
        isdone: !card.isdone
      };
    }
    return card;
  });
  setCards(doneCardList);
};

//삭제버튼
 const DeleteUserHandler = (id) => {
  const newCardList = cards.filter((card) => card.id !== id );
  setCards(newCardList);
 };

 //doing, done칸에서 해당칸에 맞게 필터로 보여줌
 const FilteredCardList = (isDone) =>
    cards
      .filter((card) => card.isdone === isDone)
      .map((card) => (
        <Card card={card} key={card.id} handleDelete={DeleteUserHandler} handleCbtn={CbtnUserHandler} />
      ));

//화면에 보여주는 부분
  return (
  <div className="layout">
      <h1 className="mytodolist">MY TO DO LIST</h1>
      {/* 인풋값을 적는 주황색 박스를 보여줍니다. */}
      <Box handleTitle={onTitleChangeHandler} handleContent={onContentChangeHandler}
      handleDate={onDateChangeHandler} handleAdd={addCardHandler}/>

      <div className="doing">
          <div className="mainFont">DO-ing</div>
            <div className="style">
      {/* 아직 완료되지 않은 할일 Doing 카드를 보여줍니다. */}
            {FilteredCardList(false)}
           </div>
      </div>

      <div className="done">
          <div className="mainFont">DONE</div>
            <div className="style">
      {/* 완료된 할일 DONE 카드를 보여줍니다. */}        
            {FilteredCardList(true)}
            </div>
      </div>
  </div>

  )};
  
export default App;