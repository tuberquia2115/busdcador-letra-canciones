import React from 'react';
import './style.css'
const Spinner = () => {
    return (
        <div>
            <div className="spinner">
                <div className="double-bounce1"></div>
                <div className="double-bounce2"></div>
            </div>
            <hr style={{ height: '5px' }} />
        </div>
    )
}

export default Spinner;