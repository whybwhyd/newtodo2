import React from 'react';
import { Link } from 'react-router-dom';
import * as S from '../css/CardStyled.jsx'
// import {TodosContext} from '../context/TodosContext.js'


function Card (props) {
console.log(props.handleCbtn)
  return (
    <S.SquareStyle>
      <div>

        <h3>{props.card.boxTitle}</h3>
        
        <h5>{props.card.boxContent}</h5>
        <Link to='/About' state={{
          id:`${props.card.id}`,
          boxTitle:`${props.card.boxTitle}`,
          boxContent:`${props.card.boxContent}`,
          boxDate:`${props.card.boxDate}`
          }}>
        <h5>상세보기</h5>
        </Link>   
        <h6>{props.card.boxDate}</h6>

        <S.BottomBtn>
          <S.DelBtn onClick={() =>props.handleDelete(props.card.id)}>삭제</S.DelBtn>
          <S.DoneBtn onClick={() =>props.handleCbtn(props.card.id)}>{props.card.isDone?"취소":"완료"}</S.DoneBtn>
        </S.BottomBtn>
      </div>
    </S.SquareStyle>
  );
}

export default Card;