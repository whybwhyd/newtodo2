import React from "react";
import * as S from "../css/AppStyled";
import InputBox from "../component/InputBox"; //input 박스를 보여줍니다.
import Card from "../component/Card"; //할일 카드를 보여줍니다.
import { useAppDispatch, useAppSelector } from "../hooks/index";
import { deleteCard, isDoneChange } from "../redux/modules/todo";

const Home = () => {
  const { id, isDone, cards } = useAppSelector((state) => state.todo);
  const dispatch = useAppDispatch();
  //isDone 상태 변경 버튼
  const handleCbtn = (id:string) => {
    dispatch(isDoneChange({ id }));
  };

  //삭제버튼
  const handleDelete = (id:string) => {
    dispatch(deleteCard({ id }));
  };

  const FilteredCardList = (isDone:boolean) =>
    cards
      .filter((card) => card.isDone === isDone)
      .map((card) => (
        <Card
          key={card.id}
          card={card}
          handleDelete={handleDelete}
          handleCbtn={handleCbtn}
        />
      ));

  return (
    <>
      <S.Layout>
        <S.MytodoList>MY TO DO LIST</S.MytodoList>
        <InputBox />
        <S.Doing>
          <S.MainFont>DO-ing</S.MainFont>

          <S.Style>
            {/* 아직 완료되지 않은 할일 Doing 카드를 보여줍니다. */}
            {FilteredCardList(false)}
          </S.Style>
        </S.Doing>
        <S.Done>
          <S.MainFont>DONE</S.MainFont>
          <S.Style>{FilteredCardList(true)}</S.Style>
        </S.Done>
      </S.Layout>
    </>
  );
};

export default Home;
