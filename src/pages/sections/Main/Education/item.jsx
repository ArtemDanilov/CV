import React from 'react';

import SingleCheck from '../../../../Utilities/SingleCheck'

const Item = (props) => {
    return (
        <div className="experience-item">
            <h3 className="text-base font-mono font-bold tracking-widest uppercase lg:text-lg" style={ props.style }>
                { props.institution }
            </h3>
            <p className="text-sm font-mono font-normal lg:text-base">
                <SingleCheck check={ props.education_title }>
                    <strong>{ props.education_title }</strong>
                    <span className="mx-1.5">|</span>
                </SingleCheck>

                { props.time }
            </p>

            <p className="font-mono text-sm font-normal mt-2 space-y-1 lg:text-base">
                { props.description }
            </p>
        </div>
    )
}

export default Item;