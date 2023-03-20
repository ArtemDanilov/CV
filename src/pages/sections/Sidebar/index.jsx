import React from 'react'
import { useTranslation } from 'react-i18next';

import Image from '../../../components/Image';
import Container from '../../../components/Container';
import NameAndPosition from '../../../components/NameAndPosition';
import Contact from '../../../components/Contact';
import Item from './item';

import avatar from '../../../assets/avatar.webp';

import './style.scss';

const Sidebar = () => {
    const { t } = useTranslation();
    const sidebar = t('sidebar', { returnObjects: true })

    return (
        <aside className="bg-zinc-700 text-zinc-200 w-full h-full">
            <div className="avatar hidden w-full h-auto p-4 pb-0 md:block">
                <Image
                    url={ avatar }
                    width="427"
                    height="520"
                    alt="Artem Danilov portrait"
                    classes="w-full h-full max-h-[32rem] rounded-lg object-cover object-top"
                />
            </div>

            <section className="main-info p-4">
                <NameAndPosition
                    fullName={ t('fullName') }
                    position={ t('position') }
                    classes="mb-10 md:hidden"
                />

                <Contact />
                
                { sidebar.map(({id, title, type, items}) => {
                    return (
                        <Container title={ title } key={ id }>
                            <ul className={ `${type !== 'links' && 'list-disc pl-5'} space-y-1` }>
                                { items.map((item) => <Item {...item} key={item.id} /> )}
                            </ul>
                        </Container>
                    )
                })}
            </section>
        </aside>
    )
}

export default Sidebar;