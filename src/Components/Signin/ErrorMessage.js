import React from 'react';
import 'tachyons';


const ErrorMessage = () => {
    return (
        <div className='center ma'>
            <div className='absolute mt2'> 
                <p className='f3'>
                {'Wrong Credentials!'}
                </p>
            </div> 

        </div>
    )
};


export default ErrorMessage;