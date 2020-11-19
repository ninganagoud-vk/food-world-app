import React from 'react'
import { LoadingOutlined } from '@ant-design/icons';
import './style.css';

const SpinLoader = ({ text }) => {
    return (
        <div className="loader-container">
            <span>{text}</span>
            <span>Please Wait...</span>
            <LoadingOutlined style={{ color: 'green' }} />
        </div>

    )
}

export default SpinLoader;