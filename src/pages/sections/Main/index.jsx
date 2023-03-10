import React from 'react'

import Experience from './Experience/index';
import Education from './Education/index';

const Main = (props) => {
    const data = props.content;

    return (
        <div className="flex flex-col bg-zinc-100">
            <Experience content={ data } />
            <Education content={ data } />
            
            <section className="mt-auto flex items-start p-4 pl-8 border-t">
                <input type="checkbox" name="afreement" checked readOnly />
                <p className="text-xs italic pl-2">{ data.recruitment_agreement }</p>
            </section>
        </div>
    )
}

export default Main;