import React from 'react';

const Image = (props) => {
    return (
        <img
            src={ props.url }
            width={ props.width }
            height={ props.height }
            alt={ props.alt || 'image' }
            loading="lazy"
            className={ props.classes }
        />
    )
} 

export default Image;