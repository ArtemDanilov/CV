import React from 'react';
import { useTranslation } from "react-i18next";

import Experience from './Experience/index';
import Education from './Education/index';
import About from './About/index';

const Main = () => {
    const { t } = useTranslation();
    const about = t('about', { returnObjects: true })
    const experience = t('experience', { returnObjects: true })
    const education = t('education', { returnObjects: true })

    return (
        <div className="flex flex-col bg-zinc-100">
            <About content={ about } />
            <Experience content={ experience } />
            <Education content={ education } />
            
            <section className="mt-auto flex items-start p-4 border-t md:pl-8">
                <input type="checkbox" name="agreement" className="w-full max-w-[1rem]" checked readOnly />
                <p className="text-xs italic pl-2">{ t('recruitment_agreement') }</p>
            </section>
        </div>
    )
}

export default Main;