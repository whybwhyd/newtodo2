import * as S from '../css/InputStyled.jsx'
import { useSelector, useDispatch } from 'react-redux';
import { setBoxTitle,setBoxContent,setBoxDate,NewCardAdd } from '../redux/modules/todo.jsx';

function InputBox () {
  const {boxTitle,boxContent,boxDate} = useSelector((state) => state.todo);
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
  const handleAdd = () => {
    dispatch(NewCardAdd({boxTitle, boxContent, boxDate}));
  };
      return(
      <S.InputBox>
        <p>제목 </p>
        <S.TitleInput type="text"
          placeholder="제목을 적어주세요"
          value={boxTitle}
          id="TitleInput"
          onChange={(event) => handleTitle(event)}/>

        <p>내용</p>
        <S.ContentInput type="text"
          placeholder="내용을 적어주세요"
          value={boxContent}
          id="ContentInput"
          onChange={(event) => handleContent(event)}/>

         <p>날짜</p>
        <S.DateInput type="text"
          placeholder="yy/mm/dd"
          value={boxDate}
          id="DateInput"
          onChange={(event) => handleDate(event)}
         />
        <S.AddBtn
        onClick={() =>handleAdd()}
        >추가하기</S.AddBtn> 
      </S.InputBox>
    );
}
      export default InputBox;

