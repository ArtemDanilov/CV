import React from 'react';

const Container = ({ children, title, type }) => {
    const isAdvanced = type === 'advanced';

    return (
        <div className={ isAdvanced ? 'mt-1 space-y-4' : 'mt-10'}>
            { type === 'advanced' ? (
                    <div className="flex items-center mb-6">
                        <h2 className="w-full max-w-max text-2xl font-bold font-mono text-zinc-700 lg:text-3xl">
                            { title }
                        </h2>
                        <hr className="w-full h-0.5 mx-4 bg-zinc-200" />
                    </div>
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