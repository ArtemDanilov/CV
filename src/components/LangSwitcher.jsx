import { React, useRef, useEffect } from 'react';

const LangSwitcher = () => {
    const plSwitcher = useRef(null);
    const enSwitcher = useRef(null);

    const switcher = () => {
        const pathname = window.location.pathname;

        if (pathname === '/en') {
            plSwitcher.current.classList.remove('!hidden');
        } else if (pathname === '/') {
            enSwitcher.current.classList.remove('!hidden');
        }
    };

    useEffect(() => {
        switcher();
    },[])

    return (
        <div>
            <a ref={ plSwitcher } href="/" lang="pl" hrefLang="pl" className="rounded-link !hidden">PL</a>
            <a ref={ enSwitcher } href="/en" lang="en" hrefLang="en" className="rounded-link !hidden">EN</a>
        </div>
    )
}

export default LangSwitcher;