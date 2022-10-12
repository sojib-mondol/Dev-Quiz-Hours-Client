import React, { useState } from 'react';
import Option from '../Option/Option';

const QuizQuestion = ({q, index}) => {

    const {correctAnswer, options, question} = q;

    // To show the correct answer
    const correctAns = ans => {
        const popupCorrectAns = ans.correctAnswer;
        alert(popupCorrectAns);
    }

    const [ans, setAns] = useState("COD");

    const seletedCorrectOne = async (ans) => {
        if(ans === correctAnswer) {
            alert('Congratulation. Your answer is correct.');
        } else if (ans !== 'COD'){
            alert('Wrong!');
        }
    }

   
    
    
    //console.log(q);

    return (
        <div className='text-teal-600 m-4 p-4 text-left shadow-lg rounded w-full items-center'>
            <h4 className='font-semibold mb-1'>Quiz {index+1}: {question}</h4>

            {
                options.map(option => <Option
                key={option}
                index = {options.indexOf(option)}
                option = {option}
                seletedCorrectOne={seletedCorrectOne}
                ></Option>)
            }
            <p className='pb-4 mt-1'><span className='text-yellow-400  font-semibold'>Confused!</span> here is the <button onClick={() => correctAns({correctAnswer})} className='text-white font-semibold bg-red-600 hover:bg-blue-600 px-2 py-.5 rounded'>correct answer</button></p>

        </div>
    );
};

export default QuizQuestion;