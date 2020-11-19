import React from 'react';
import './style.css'
const AlertMessage = ({ alert }) => {
    return (
        <div className="alert">
            <h3>{alert}</h3>
        </div>
    )
}

export default AlertMessage;
