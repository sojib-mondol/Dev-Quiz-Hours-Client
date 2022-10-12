const Option = ({index, option, seletedCorrectOne}) => {
    

    return (
        <div>
            {/* <h2>{index+1}. {option}</h2> */}
            <div>
                <input className='' type='radio' name="singleOption" value={option} onClick={e => seletedCorrectOne(e.target.value)}/>
                <label>{index+1}. {option}</label>
            </div>
        </div>
    );
    
};

export default Option;