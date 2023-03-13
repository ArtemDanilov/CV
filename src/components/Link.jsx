import {useRef, useEffect} from 'react';

const Link = ({url, download, children}) => {
    const link = useRef(null);
    
    useEffect(() => {
        const downloadable = () => {
            if (download) {
                link.current.setAttribute('download', download);
            }
        };

        downloadable();
    },[download]);

    return (
        <a
            ref={link}
            href={url}
            className="rounded-link"
        >
            {children}
        </a>
    )
}

export default Link;