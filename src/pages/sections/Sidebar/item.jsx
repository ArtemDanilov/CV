import React from 'react';

import { ReactComponent as Link } from '../../../assets/svg/link.svg';

const Item = (props) => {
    return (
        <li className="text-sm font-mono lg:text-base">
            { props.link ? (
                <a
                    href={ props.link }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link py-0.5"
                >
                    <Link className="inline-block pr-1 w-8 h-8 text-current"/>
                    { props.name }
                </a>
            ) : (
                <p>{ props.name }</p>
            )}
        </li> 
    )
}

export default Item;