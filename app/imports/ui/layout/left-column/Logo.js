import React from 'react';

export const Logo = () => {
    return (
        <div id="logo-container" style={{
            textAlign: 'center',
            padding: '20px 0',
            width: '140px',
        }}>
            <div className="bg-color" style={{
                fontSize: '50px',
                fontFamily: 'monospace',
                fontWeight: 'bold',
            }}>g9</div>
        </div>
    );
};