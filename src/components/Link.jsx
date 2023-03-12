import {useRef, useEffect} from 'react';

const Link = ({url, download, children}) => {
    const link = useRef(null);

    const downloadable = () => {
        if (download) {
            link.current.setAttribute('download', download);
        }
    };

    useEffect(() => {
        downloadable();
    },[]);

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