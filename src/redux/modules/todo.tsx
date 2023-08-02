import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from 'uuid';

export interface TodoType {
  id: string;
  boxTitle: string;
  boxContent: string;
  boxDate: string;
  isDone: boolean;
}
const initialTodos = [
  {
    id: uuid(),
    boxTitle: "리액트 공부하기",
    boxContent: '"리액트 기초를 공부해봅시다."',
    boxDate: "23/06/14",
    isDone: false,
  },
  {
    id: uuid(),
    boxTitle: "자바스크립트 공부하기",
    boxContent: '"자바스크립트 기초를 공부해봅시다."',
    boxDate: "23/06/15",
    isDone: false,
  },
  {
    id: uuid(),
    boxTitle: "html 공부하기",
    boxContent: '"html 기초를 공부해봅시다."',
    boxDate: "23/06/11",
    isDone: true,
  },
  {
    id: uuid(),
    boxTitle: "css 공부하기",
    boxContent: '"css 기초를 공부해봅시다."',
    boxDate: "23/06/12",
    isDone: true,
  },
];

const initialState = {
  id:uuid(),
  boxTitle: "",
  boxContent: "",
  boxDate: "",
  isDone: false,
  cards: initialTodos,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setBoxTitle: (state, action) => {
      state.boxTitle = action.payload;
    },
    setBoxContent: (state, action) => {
      state.boxContent = action.payload;
    },
    setBoxDate: (state, action) => {
      state.boxDate = action.payload;
    },
    NewCardAdd: (state, action) => {
      if (
        state.boxTitle === "" ||
        state.boxContent === "" ||
        state.boxDate === ""
      ) {
        alert("빈칸을 채워주세요!");
      } else {
        const { boxTitle, boxContent, boxDate } = action.payload;
        const newCard = {
          id: uuid(),
          boxTitle: boxTitle,
          boxContent: boxContent,
          boxDate: boxDate,
          isDone: false,
        };
        state.cards.push(newCard);
      }
      state.boxTitle = "";
      state.boxContent = "";
      state.boxDate = "";
    },
    isDoneChange: (state, action) => {
      const { id } = action.payload;
      const card = state.cards.find((card) => card.id === id);
      if (card) {
        card.isDone = !card.isDone;
      }
    },
    deleteCard: (state, action) => {
      const { id } = action.payload;
      state.cards = state.cards.filter((card) => card.id !== id);
    },
  },
});

export default todoSlice.reducer;

export const {
  setBoxTitle,
  setBoxContent,
  setBoxDate,
  NewCardAdd,
  deleteCard,
  isDoneChange,
} = todoSlice.actions;
