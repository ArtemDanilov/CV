import React from 'react';

import Sidebar from "./sections/Sidebar/index";
import Main from "./sections/Main/index";
import LanguageSwitcher from "../components/LanguageSwitcher/index";
import Link from "../components/Link";

import { ReactComponent as File } from '../assets/svg/file.svg';

const Home = (props) => {
    return (
        <main className="max-w-7xl mx-auto md:grid md:grid-cols-[35%,65%] xl:my-8 xl:shadow-lg">
            <Sidebar content={ props.content } />
            <Main content={ props.content } />

            <div className="fixed top-4 right-4 space-y-2">
                <LanguageSwitcher />
                <Link url={ props.file } download="Artem_Danilov">
                    <File className="w-8 h-8" />
                </Link>
            </div>
        </main>
    )
}

export default Home;