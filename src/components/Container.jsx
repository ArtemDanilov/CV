import React from 'react';

const Container = ({ children, title }) => {
    return (
        <div className="mt-10">
            <h2 className="text-2xl font-normal font-mono text-zinc-200 mb-2">
                { title }
            </h2>

            { children }
        </div>
    )
} 

export default Container;