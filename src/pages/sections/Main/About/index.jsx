import React from 'react'

import Container from '../../../../components/Container';

const About = (props) => {
    const data = props.content.about;

    return (
        <section className="container w-full p-4 lg:pl-8">
            <Container type="advanced" title={ data.title } key={ data.id }>
                <p>{ data.text }</p>
            </Container>
        </section>
    )
}

export default About;