import * as S from '../css/InputStyled.jsx'
// import {TodosContext}from '../context/TodosContext.js'
// import { useContext } from 'react';

function InputBox (props) {

      return(
      <S.InputBox>
        제목 {""}
        <S.TitleInput type="text"
          placeholder="제목을 적어주세요"
          value={props.boxTitle}
          id="TitleInput"
          onChange={(event) => props.handleTitle(event)}/>

        <S.BoxContent>
        내용 {""}
        <S.ContentInput type="text"
          placeholder="내용을 적어주세요"
          value={props.boxContent}
          id="ContentInput"
          onChange={(event) => props.handleContent(event)}/>
        </S.BoxContent>

        <S.BoxDate>
         날짜 {""}
        <S.DateInput type="text"
          placeholder="yy/mm/dd"
          value={props.boxDate}
          id="DateInput"
          onChange={(event) => props.handleDate(event)}
         />
        </S.BoxDate>
        <S.AddBtn
        onClick={() =>props.handleAdd()}
        >추가하기</S.AddBtn> 
      </S.InputBox>
    );
}
      export default InputBox;

