import * as S from '../css/InputStyled'
import { useAppDispatch, useAppSelector } from "../hooks/index";
import { setBoxTitle,setBoxContent,setBoxDate,NewCardAdd } from '../redux/modules/todo';

function InputBox () {
  const {boxTitle,boxContent,boxDate} = useAppSelector((state) => state.todo);
  const dispatch = useAppDispatch();
  
  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setBoxTitle(e.target.value));
  };
  const handleContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setBoxContent(e.target.value));
  };
  const handleDate = (e: React.ChangeEvent<HTMLInputElement>) => {
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
          onChange={(e:React.ChangeEvent<HTMLInputElement>) => handleTitle(e)}/>

        <p>내용</p>
        <S.ContentInput type="text"
          placeholder="내용을 적어주세요"
          value={boxContent}
          id="ContentInput"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleContent(e)}/>

         <p>날짜</p>
        <S.DateInput type="text"
          placeholder="yy/mm/dd"
          value={boxDate}
          id="DateInput"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleDate(e)}
         />
        <S.AddBtn
        onClick={() =>handleAdd()}
        >추가하기</S.AddBtn> 
      </S.InputBox>
    );
}
      export default InputBox;

