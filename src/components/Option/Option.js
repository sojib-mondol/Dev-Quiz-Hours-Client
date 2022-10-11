import React from 'react';

const Option = ({index, option}) => {
    console.log(option);
    return (
        <div>
            <h2>{index+1}. {option}</h2>
        </div>
    );
};

export default Option;