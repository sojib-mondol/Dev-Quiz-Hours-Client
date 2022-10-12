import React, { useState } from 'react';
import ToestYes from '../ToastYes/ToestYes';



const Option = ({index, option, correctAnswer}) => {
    
    const [ans, setAns] = useState();
    if(ans === correctAnswer){
        alert('yes');
    } 
    
   
    

    return (
        <div>
            {/* <h2>{index+1}. {option}</h2> */}
            <div>
                <input className='' type='radio' name="singleOption" value={option} onChange={e => setAns(e.target.value)}/>
                <label>{index+1}. {option}</label>
               
            </div>
        </div>
    );
};

export default Option;