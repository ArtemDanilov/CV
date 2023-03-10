import React from 'react';

const Item = (props) => {
    const description = props.description;

    return (
        <div className="experience-item">
            <h3 className="text-lg font-mono font-bold tracking-widest uppercase mb-1 lg:text-xl" style={ props.style }>
                { props.company }
            </h3>
            <p className="text-sm font-mono font-normal lg:text-base">
                <strong>{ props.position }</strong> | { props.time }
            </p>

            <ul className="list-disc pl-5 mt-2 space-y-1">
                {
                    description.map(({id, text}) => {
                        return (
                            <li className="text-sm font-mono font-normal lg:text-base" key={ id }>
                                { text }
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Item;