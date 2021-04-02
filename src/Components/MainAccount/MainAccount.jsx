import React from 'react'
import "./main.css"
import {Row,Col} from "react-bootstrap"
const MainAccount = () => {
    return (
        <div>
            <div className="main-account-card">
                <div className="main-card-top">
                  <h2>Expense Tracker</h2>
                  <h6>Powered By Speechly</h6>
                </div>
                <div className="main-card-middle">
                    <h4>Total Balance $757</h4>
                     <p>Try Saying: <br/> Add Expense for $50 in Category Travel for Thursday </p>
                  <div className="main-form">
                  <form action="">
                      <Row>
                       <Col sm={12} md={6} >   
                      <div className="fld-input">
                        <label htmlFor="type">
                            Type
                        </label>
                        <select >
                            <option defaultValue="income">Income</option>
                            <option defaultValue="expense">Expense</option>

                        </select>
                      </div>
                      </Col> 
                      <Col sm={12} md={6} >   
                      <div className="fld-input">
                      <label htmlFor="type">
                            Category
                        </label>
                        
                        <select >
                            <option defaultValue="income" >Category</option>
                            <option defaultValue="expense">Expense</option>

                        </select>
                      </div>
                      </Col> 
                      <Col sm={12} md={6} > 
                      <label htmlFor="type">
                            Amount
                        </label>  
                      <div className="fld-input">
                        
                       <input type="number" name="amount" required="required"/>
                      </div>
                      </Col>
                      <Col sm={12} md={6} >   
                      <div className="fld-input">
                      <label htmlFor="type">
                            Date
                        </label> 
                        
                       <input type="date" name="amount" placeholder="Amount" required="required"/>
                      </div>
                      </Col>
                      <Col>
                       <input type="submit" value="Create"/> 
                      </Col>
                     </Row> 
                      
                    </form>       
                      
                  </div> 

                </div>

            </div>
            
        </div>
    )
}

export default MainAccount
