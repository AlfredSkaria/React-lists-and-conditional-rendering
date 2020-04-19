import React from 'react';
import './CharComponent.css'

const charComponent = (props) =>{
    return (
        <div className='boxClass'
             onClick={props.click}>
            <p >{props.character}</p>
        </div>
    )
        
};

export default charComponent;