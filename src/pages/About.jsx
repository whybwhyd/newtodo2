import { styled } from 'styled-components';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Display = styled.div`
display: grid;
align-items: center;
justify-content: center;
 `   
const DetailCard = styled.div`
border: 2px solid black;
background-color:lightyellow;
padding-top: 30px;
padding-bottom:0;
margin: 100px;
width: 700px;
height:400px;
 `   
const Text = styled.div`
text-align:center;
  `   
const Comeback= styled.button`
margin-left:30px;
margin-bottom:20px;
`
  
function About() {
const location = useLocation()
const navigate= useNavigate()

  return (
    <Display>
      <DetailCard>
        <Comeback
        onClick={()=>{
          navigate("/")
        }}>{'<'} BEFORE</Comeback>
        <Text>
      <h3>ID: {location.state.id}</h3>
      <h3>{location.state.boxTitle}</h3>
      <h5>{location.state.boxContent}</h5>
      <p>공부는 예습, 복습, 집중입니다.
        현재 공부를 집중하여 해내고,<br/>
        과거에 했던 공부를 복습하며,<br/>
        미래에 할 공부를 예습하는 것 입니다.
      </p>
      <h6>{location.state.boxDate}</h6>
      </Text>

      </DetailCard>
    </Display>
    );
  }
  
  export default About;