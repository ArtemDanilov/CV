import React from 'react';

const Container = ({ children, title, type }) => {
    const isAdvanced = type === 'advanced';

    return (
        <div className={ isAdvanced ? 'mt-1 space-y-4' : 'mt-10'}>
            { type === 'advanced' ? (
                    <h2 className="
                        flex items-center text-2xl font-bold font-mono text-zinc-700 mb-6 lg:text-3xl
                        after:content-[''] after:block after:w-full after:mx-4 after:h-px after:bg-zinc-700"
                    >
                        { title }
                    </h2>
                ) : (
                    <h2 className="text-xl font-normal font-mono text-zinc-200 mb-2 lg:text-2xl">
                        { title }
                    </h2>
                )
            }

            { children }
        </div>
    )
} 

export default Container;