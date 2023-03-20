import React from 'react'
import { useTranslation } from 'react-i18next';

import Image from '../../../components/Image';
import Container from '../../../components/Container';
import NameAndPosition from '../../../components/NameAndPosition';
import Contact from '../../../components/Contact';

import avatar from '../../../assets/avatar.webp';

import './style.scss';

const Sidebar = () => {
    const { t } = useTranslation();
    const sidebar = t('sidebar', { returnObjects: true })

    return (
        <aside className="bg-zinc-700 text-zinc-200 w-full h-full">
            <div className="avatar hidden w-full h-[32.5rem] p-4 pb-0 md:block">
                <Image
                    url={ avatar }
                    width="427"
                    height="520"
                    alt="Artem Danilov portrait"
                    classes="w-full h-full rounded-lg object-cover object-top"
                />
            </div>

            <section className="main-info p-4">
                <NameAndPosition
                    fullName={ t('fullName') }
                    position={ t('position') }
                    classes="mb-10 md:hidden"
                />

                <Contact />
                
                { sidebar.map(({title, items, id}) => {
                    return (
                        <Container title={ title } key={ id }>
                            <ul className="list-disc space-y-1 pl-5">
                                { items.map(({id, name, link}) => (
                                    <li key={ id } className="text-sm font-mono lg:text-base">
                                        { link ? (
                                            <a
                                                href={ link }
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="link"
                                            >
                                                { name }
                                            </a>
                                        ) : (
                                            <p>{ name }</p>
                                        )}
                                    </li> 
                                ))
                                }
                            </ul>
                        </Container>
                    )
                })}
            </section>
        </aside>
    )
}

export default Sidebar;