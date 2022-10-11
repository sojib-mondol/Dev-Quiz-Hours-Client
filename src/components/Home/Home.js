import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import cover from '../../jessica-lewis-8T-lK9FkzyI-unsplash.png'


const Home = () => {

    const quizes = useLoaderData();
    const arryQuizes = quizes.data;
    console.log(arryQuizes);

    
    
    
    
    return (
        <div>
            <div>
                <img className="object-cover my-4 w-full h-48 bg-gray-500 rounded" src={cover} alt="cover img" />
                <h4 className='mb-12 mt-12 text-xl font-semibold'>Start your practic with Dev-Quiz Hour. Impove your knoweledge & be ready for interview. Happy Coading.</h4>
            </div>
            <div className='grid grid-cols-1 gap-4	 md:grid-cols-3' >
                {
                    arryQuizes.map(quiz => <Quiz
                        key={quiz.id}
                        quiz={quiz}
                        
                    ></Quiz>)
                }
            </div>
        </div>
    );
};

export default Home;