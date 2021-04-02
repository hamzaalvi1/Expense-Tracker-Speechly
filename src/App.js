import './App.css';
import {Container,Row,Col} from 'react-bootstrap'
import AccountDetail from "./Components/AccountDetail/accountdetail"
import MainAccount from "./Components/MainAccount/MainAccount"
function App() {
  return (
    <div className="App">
     <Container>
       <Row className="align-items-center">
         <Col sm={12} md={4}>
           <AccountDetail title="Income"/>
         
         </Col>
         <Col sm={12} md={4}>
           <MainAccount/>
           
         
         </Col>
         <Col sm={12} md={4}>
         <AccountDetail title="Expense"/>

         
         </Col>
       </Row>
     </Container>
    </div>
  );
}

export default App;
