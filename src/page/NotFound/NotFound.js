import React from 'react';
import { useHistory } from 'react-router';

const NotFound = () => {
    const history = useHistory();
    const goBackHandle = () => {
        history.push(`/home`);
    }

    return (
        <div>
            <h3>404!! Page not found</h3>
            <button onClick={goBackHandle} className="btn btn-primary" >Go back </button>
        </div>
    );
};

export default NotFound;