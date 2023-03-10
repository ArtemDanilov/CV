import React from 'react';

const Container = ({ children, title }) => {
    return (
        <div className="mt-1 space-y-4">
            <h2 className="
                flex items-center text-3xl font-bold font-mono text-zinc-700 mb-8
                after:content-[''] after:block after:w-full after:mx-4 after:h-0.5 after:bg-zinc-700"
            >
                { title }
            </h2>

            { children }
        </div>
    )
} 

export default Container;