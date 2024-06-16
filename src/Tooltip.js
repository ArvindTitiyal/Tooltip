import React, { useState } from 'react';
import './Tooltip.css';

const Tooltip = ({ position, message, children }) => {
    const [visible, setVisible] = useState(false);

    return (
        <div
            className="tooltip-container"
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
        >
            {children}
            {visible && (
                <div className={`tooltip-box ${position}`}>
                    {message}
                </div>
            )}
        </div>
    );
};

export default Tooltip;
