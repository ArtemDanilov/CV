import { React, useRef, useEffect } from 'react';

const LangSwitcher = () => {
    const plSwitcher = useRef(null);
    const enSwitcher = useRef(null);

    const publicUrl = process.env.PUBLIC_URL;

    const switcher = () => {
        const pathname = window.location.pathname;
        
        if (pathname === `${publicUrl}/en`) {
            plSwitcher.current.classList.remove('!hidden');
        } else if (pathname === publicUrl) {
            enSwitcher.current.classList.remove('!hidden');
        }
    };

    useEffect(() => {
        switcher();
    },[])

    return (
        <div>
            <a ref={ plSwitcher } href={publicUrl} lang="pl" hrefLang="pl" className="rounded-link !hidden">PL</a>
            <a ref={ enSwitcher } href={ `${publicUrl}/en` } lang="en" hrefLang="en" className="rounded-link !hidden">EN</a>
        </div>
    )
}

export default LangSwitcher;