import React from 'react';
import { Outlet } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

import LangSwitcher from "../components/LangSwitcher";
import Link from "../components/Link";

import { ReactComponent as File } from '../assets/svg/file.svg';

const Default = () => {
    const { t } = useTranslation();

    return (
        <React.Fragment>
            <Outlet />

            <div className="fixed top-4 right-4 space-y-2">
                <LangSwitcher />
                <Link url={ t('file_to_download') } download="Artem_Danilov">
                    <span className="sr-only">File to download</span>
                    <File className="w-8 h-8" />
                </Link>
            </div>
        </React.Fragment>
    )
}

export default Default;