import React from 'react'
import "./account.css"

const Accountdetail = ({title}) => {
    
    return (
        <div>
          <div className="account-card"  style={title === "Income" ? {borderBottom : "10px solid  #1abc9c"}: {borderBottom : "10px solid  #e84118"}} >
            <h4>{title}</h4>
            <h5>$1530</h5>

          </div>
            
        </div>
    )
}

export default Accountdetail
