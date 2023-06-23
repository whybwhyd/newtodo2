import React, { useState} from 'react';
import * as S from '../css/AppStyled.jsx'
import uuid from 'react-uuid'
import InputBox from '../component/InputBox'; //input 박스를 보여줍니다.
import Card from '../component/Card'; //할일 카드를 보여줍니다.
// import { TodosProvider } from '../context/TodosContext.js';

const Home = () => {
  const initialTodos = ([
    {id: uuid(), boxTitle: '리액트 공부하기', boxContent: '"리액트 기초를 공부해봅시다."', boxDate: '23/06/14', isDone: false },
    {id: uuid(), boxTitle: '자바스크립트 공부하기', boxContent: '"자바스크립트 기초를 공부해봅시다."', boxDate: '23/06/15', isDone: false },
    {id: uuid(), boxTitle: 'html 공부하기', boxContent: '"html 기초를 공부해봅시다."', boxDate: '23/06/11', isDone: true },
    {id: uuid(), boxTitle: 'css 공부하기', boxContent: '"css 기초를 공부해봅시다."', boxDate: '23/06/12', isDone: true },
  ]);
  
  //input 박스를 보여주기 위해 usestate로 변수 선언

    const [cards,setCards]= useState(initialTodos)
    const [boxTitle, setBoxTitle] = useState("");
   const [boxContent, setBoxContent] = useState("");
   const [boxDate, setBoxDate] = useState("");
    // const [isDone, setIsDone] = useState(false);
  
  //입력한 값을 저장하는 핸들러 함수
    const handleTitle = (event) => {setBoxTitle(event.target.value)}
    const handleContent = (event) => {setBoxContent(event.target.value)}
    const handleDate = (event) => {setBoxDate(event.target.value)}
  
  //인풋 박스의 추가하기 버튼
    const handleAdd = () => {
    if (boxTitle === "" || boxContent === "" || boxDate === "") {
        alert("빈칸을 채워주세요!");
      } else {
      const newCard = {
        id: uuid(),
        boxTitle:boxTitle,
        boxContent:boxContent,
        boxDate:boxDate,
        isDone: false,
      };
      setCards([...cards, newCard]);
      setBoxTitle("");
      setBoxContent("");
      setBoxDate("")
    }
  };
  //카드 박스를 보여주기 위한 함수들 선언: 취소<->완료버튼 변경 기능
   const handleCbtn = (id) => {
    const doneCardList = cards.map((card) => {
      if (card.id === id) {
        return {
          ...card,
          isDone: !card.isDone
        };
      }else{
      return card;
    }});
    setCards(doneCardList);
  ;
  };
  
  //삭제버튼
   const handleDelete = (id) => {
    const newCardList = cards.filter((card) => card.id !== id );
    setCards(newCardList);
   };
  const FilteredCardList = (isDone) =>
  cards
    .filter((card) => card.isDone === isDone)
    .map((card) => (
      <Card card={card} key={card.id} handleDelete={handleDelete} handleCbtn={handleCbtn} 
      boxTitle={boxTitle} boxContent={boxContent} boxDate={boxDate} />
    ));        


//화면에 보여주는 부분
  return (
    <>
  <S.Layout>
      <S.MytodoList>MY TO DO LIST</S.MytodoList>
      {/* 인풋값을 적는 박스를 보여줍니다. */}
      
        <InputBox handleTitle={handleTitle} handleContent={handleContent}
      handleDate={handleDate} handleAdd={handleAdd} 
      boxTitle={boxTitle} boxContent={boxContent} boxDate={boxDate}/>

      <S.Doing>
          <S.MainFont>DO-ing</S.MainFont>

            <S.Style>
      {/* 아직 완료되지 않은 할일 Doing 카드를 보여줍니다. */}
      
      {FilteredCardList(false)}
      
           </S.Style>
      </S.Doing>
      <S.Done>
          <S.MainFont>DONE</S.MainFont>
            <S.Style>       
       {FilteredCardList(true)}
            </S.Style>
      </S.Done>

  </S.Layout>
  </>
  )};
  
export default Home;