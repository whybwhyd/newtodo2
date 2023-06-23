import * as S from '../css/InputStyled.jsx'
import {TodosContext}from '../context/TodosContext.js'
import { useContext } from 'react';

function InputBox () {
  const data = useContext(TodosContext);

      return(
      <S.InputBox>
        제목 {""}
        <S.TitleInput type="text"
          placeholder="제목을 적어주세요"
          value={data.boxTitle}
          id="TitleInput"
          onChange={(event) => data.handleTitle(event)}/>

        <S.BoxContent>
        내용 {""}
        <S.ContentInput type="text"
          placeholder="내용을 적어주세요"
          value={data.boxContent}
          id="ContentInput"
          onChange={(event) => data.handleContent(event)}/>
        </S.BoxContent>

        <S.BoxDate>
         날짜 {""}
        <S.DateInput type="text"
          placeholder="yy/mm/dd"
          value={data.boxDate}
          id="DateInput"
          onChange={(event) => data.handleDate(event)}
         />
        </S.BoxDate>
        <S.AddBtn
        onClick={() =>data.handleAdd()}
        >추가하기</S.AddBtn> 
      </S.InputBox>
    );
}
      export default InputBox;

