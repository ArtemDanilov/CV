import React from 'react';

const Container = ({ children, title }) => {
    const before = '//';

    return (
        <div className="mt-1 space-y-4">
            <h2 className="text-3xl font-bold font-mono text-zinc-700 mb-8">
                { before } { title }
            </h2>

            { children }
        </div>
    )
} 

export default Container;