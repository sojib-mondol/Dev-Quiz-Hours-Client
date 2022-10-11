import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


const Quiz = ({quiz}) => {

   // console.log(quiz);
   const {name, id, total, logo} = quiz;
    return (
       
    <div className='mx-4'>
        <div className="w-full rounded-lg shadow-md lg:max-w-sm">
            <img className="object-cover w-full h-48 bg-gray-500 rounded" src={logo} alt="t-shirt img" />
            <h4 className='pt-2 text-xl font-semibold'>Total Questions: {total}</h4>
            <div className="px-4 py-2 flex justify-between">
                <h4 className="text-xl font-semibold tracking-tight text-blue-600">
                    {name}
                </h4>
                <Link to={`/course/${id}`}>
                    <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
                        Start Practice <FontAwesomeIcon icon={faArrowAltCircleRight} />
                    </button> 
                </Link>
            </div>
        </div>
    </div>
        
    );
}

export default Quiz;