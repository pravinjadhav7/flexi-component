import React from 'react';

export default ({ name, place }) => {
    return (
        <div className='card'>
            <div className='card-header bg-white'>
                <div className="h4">Output</div>
            </div>
            <div className='card-body'>
                <p>Hello {name} from {place} !</p>
            </div>
        </div>
    )
}