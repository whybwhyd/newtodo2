import React from "react";
import { Link } from "react-router-dom";
import * as S from "../css/CardStyled";
import { TodoType } from "../redux/modules/todo";

interface CardItemProps {
  card: TodoType;
  key: string;
  handleDelete: (id: string) => void;
  handleCbtn: (id: string) => void;
}

function Card({ card, handleCbtn, handleDelete }: CardItemProps) {
  return (
    <S.SquareStyle>
      <div>
        <h3>{card.boxTitle}</h3>
        <h5>{card.boxContent}</h5>
        {/* Link 컴포넌트의 to 속성에 객체를 전달합니다. */}
        <Link
          to="/About"
          state={{
            id: `${card.id}`,
            boxTitle: `${card.boxTitle}`,
            boxContent: `${card.boxContent}`,
            boxDate: `${card.boxDate}`,
          }}
        >
          <h5>상세보기</h5>
        </Link>
        <h6>{card.boxDate}</h6>
        <S.BottomBtn>
          <S.DelBtn onClick={() => handleDelete(card.id)}>삭제</S.DelBtn>
          <S.DoneBtn onClick={() => handleCbtn(card.id)}>
            {card.isDone ? "취소" : "완료"}
          </S.DoneBtn>
        </S.BottomBtn>
      </div>
    </S.SquareStyle>
  );
}

export default Card;
