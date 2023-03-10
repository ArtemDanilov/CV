import React from 'react'

import Experience from './Experience/index';
import Education from './Education/index';

const Main = (props) => {
    const data = props.content;

    return (
        <div className="bg-zinc-100">
            <Experience content={ data } />
            <Education content={ data } />
        </div>
    )
}

export default Main;