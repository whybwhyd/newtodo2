import * as S from '../css/InputStyled.jsx'
import { useSelector, useDispatch } from 'react-redux';
import { setBoxTitle,setBoxContent,setBoxDate } from '../redux/modules/todo.jsx';

function InputBox () {
  const {boxTitle,boxContent,boxDate,isDone} = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  
  const handleTitle = (e) => {
    dispatch(setBoxTitle(e.target.value));
  };
  const handleContent = (e) => {
    dispatch(setBoxContent(e.target.value));
  };
  const handleDate = (e) => {
    dispatch(setBoxDate(e.target.value));
  };
      return(
      <S.InputBox>
        제목 {""}
        <S.TitleInput type="text"
          placeholder="제목을 적어주세요"
          value={boxTitle}
          id="TitleInput"
          onChange={(event) => handleTitle(event)}/>

        <S.BoxContent>
        내용 {""}
        <S.ContentInput type="text"
          placeholder="내용을 적어주세요"
          value={boxContent}
          id="ContentInput"
          onChange={(event) => handleContent(event)}/>
        </S.BoxContent>

        <S.BoxDate>
         날짜 {""}
        <S.DateInput type="text"
          placeholder="yy/mm/dd"
          value={boxDate}
          id="DateInput"
          onChange={(event) => handleDate(event)}
         />
        </S.BoxDate>
        <S.AddBtn
        onClick={() =>handleAdd()}
        >추가하기</S.AddBtn> 
      </S.InputBox>
    );
}
      export default InputBox;

