import { useRef, useEffect } from 'react';

import './style.scss';

const LanguageSwitcher = () => {
    const plSwitcher = useRef(null);
    const enSwitcher = useRef(null);

    const switcher = () => {
        const pathname = window.location.pathname;

        if (pathname === '/en') {
            plSwitcher.current.classList.replace('hidden', 'flex');
        } else if (pathname === '/') {
            enSwitcher.current.classList.replace('hidden', 'flex');
        }
    };

    useEffect(() => {
        switcher();
    },[])

    return (
        <div className="language-switcher fixed top-4 right-4">
            <a ref={ plSwitcher } href="/" lang="pl" hrefLang="pl" className="hidden">PL</a>
            <a ref={ enSwitcher } href="/en" lang="en" hrefLang="en" className="hidden">EN</a>
        </div>
    )
}

export default LanguageSwitcher;