import { createSlice } from '@reduxjs/toolkit';

// 초기 상태값
const initialState = {
    boxTitle: "",
    boxContent:"",
    boxDate:"",
    isDone:false,
};

const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        setBoxTitle:(state, action)=>{
            state.boxTitle = action.payload;
        },
        setBoxContent:(state, action)=>{
            state.boxContent = action.payload;
        },
        setBoxDate:(state, action)=>{
            state.boxDate = action.payload;
        },
        setBoxDate:(state, action)=>{
            state.boxDate = action.payload;
        },
    },
});
// 모듈파일에서는 리듀서를 export default 한다.
export default todoSlice.reducer;

export const {setBoxTitle,setBoxContent,setBoxDate} = todoSlice.actions;