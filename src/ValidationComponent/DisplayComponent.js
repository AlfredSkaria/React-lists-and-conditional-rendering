import React from 'react';

const displayText = (props) => {

    const charLength = props.charLength;
    if(charLength <= 5 && charLength >0){
        return <p>Text too short</p>
    }else if(charLength > 5){
        return <p>Text long enough</p>
    }else{
        return null
    }
};

export default displayText;