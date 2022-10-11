import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQuestion from '../QuizQuestion/QuizQuestion';

const Question = () => {

    const data = useLoaderData();
    const quizes = data.data;
    //console.log(quizes);
    const {name, questions} = quizes;

    return (
        <div className=''>
            <h2 className='text-4xl font-semibold my-5 text-teal-600'>Quiz of {name}</h2>
            
            {
                questions.map(q => <QuizQuestion
                    
                    key={q.id}
                    q={q}
                    index = {questions.indexOf(q)}

                ></QuizQuestion>)
            }
        </div>
    );
};

export default Question;