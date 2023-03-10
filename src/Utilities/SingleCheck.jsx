import React from 'react';

const SingleCheck = ({children, check}) => {
    return (
        <React.Fragment>
            { check && <React.Fragment>{ children }</React.Fragment> }
        </React.Fragment>
    )
}

export default SingleCheck;