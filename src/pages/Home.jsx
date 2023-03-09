import React from 'react';

import Sidebar from "./sections/Sidebar/index";

const Home = (props) => {
    return (
        <main className="max-w-7xl mx-auto xl:my-8 xl:shadow-lg">
            <Sidebar content={ props.content } />
        </main>
    )
}

export default Home;