import React, { useContext }  from 'react';
import { Link } from 'react-router-dom';
import * as S from '../css/CardStyled.jsx'

function Card ({card, handleCbtn,handleDelete}) {
  return (
    <S.SquareStyle>
      <div>
        <h3>{card.boxTitle}</h3>
        
        <h5>{card.boxContent}</h5>
        <Link to='/About' state={{
          id:`${card.id}`,
          boxTitle:`${card.boxTitle}`,
          boxContent:`${card.boxContent}`,
          boxDate:`${card.boxDate}`
          }}>
        <h5>상세보기</h5>
        </Link>   
        <h6>{card.boxDate}</h6>

        <S.BottomBtn>
          <S.DelBtn onClick={() =>handleDelete(card.id)}>삭제</S.DelBtn>
          <S.DoneBtn onClick={() =>handleCbtn(card.id)}>{card.isDone?"취소":"완료"}</S.DoneBtn>
        </S.BottomBtn>
      </div>
    </S.SquareStyle>
  );
}

export default Card;