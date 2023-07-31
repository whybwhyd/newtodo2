import React, { useContext }  from 'react';
import { Link } from 'react-router-dom';
import * as S from '../css/CardStyled.jsx'


function Card () {
  const data = useContext(TodosContext);

  return (
    <S.SquareStyle>
      <div>
        <h3>{data.card.boxTitle}</h3>
        
        <h5>{data.card.boxContent}</h5>
        <Link to='/About' state={{
          id:`${data.card.id}`,
          boxTitle:`${data.card.boxTitle}`,
          boxContent:`${data.card.boxContent}`,
          boxDate:`${data.card.boxDate}`
          }}>
        <h5>상세보기</h5>
        </Link>   
        <h6>{data.card.boxDate}</h6>

        <S.BottomBtn>
          <S.DelBtn onClick={() =>data.handleDelete(data.card.id)}>삭제</S.DelBtn>
          <S.DoneBtn onClick={() =>data.handleCbtn(data.card.id)}>{data.card.isDone?"취소":"완료"}</S.DoneBtn>
        </S.BottomBtn>
      </div>
    </S.SquareStyle>
  );
}

export default Card;