import React from 'react'

import Container from '../../../../components/MainContainer';
import Item from './item';

const Experience = (props) => {
    const data = props.content.experience;
    const color = data.headings_color;

    return (
        <section className="experience w-full h-full p-4 lg:pl-8">
            <Container title={ data.title } key={ data.id }>
                {
                    data.items.map( item => {
                        return <Item { ...item } key={ item.id } style={{ color: color }} />
                    })
                }
            </Container>
        </section>
    )
}

export default Experience;