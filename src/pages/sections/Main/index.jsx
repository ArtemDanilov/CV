import React from 'react'

import Experience from './Experience/index';

const Main = (props) => {
    const data = props.content;

    return (
        <Experience content={ data } />
    )
}

export default Main;