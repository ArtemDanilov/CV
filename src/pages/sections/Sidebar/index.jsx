import React from 'react'
import { useTranslation } from 'react-i18next';
import Obfuscate from 'react-obfuscate';

import Image from '../../../components/Image';
import Container from '../../../components/Container';
import NameAndPosition from '../../../components/NameAndPosition';

import avatar from '../../../assets/avatar.webp';
import { ReactComponent as Phone } from '../../../assets/svg/phone.svg';
import { ReactComponent as Email } from '../../../assets/svg/email.svg';

import './style.scss';

const Sidebar = () => {
    const { t } = useTranslation();
    const sidebar = t('sidebar', { returnObjects: true })

    return (
        <aside className="bg-zinc-700 text-zinc-200 w-full h-full">
            <div className="w-full h-auto">
                <Image
                    url={ avatar }
                    width="427"
                    height="560"
                    alt="Artem Danilov portrait"
                    classes="hidden w-full h-full object-cover object-top md:block"
                />
            </div>

            <section className="main-info p-4">
                <NameAndPosition
                    fullName={ t('fullName') }
                    position={ t('position') }
                    classes="mb-10 md:hidden"
                />

                <Container title={ t('contact_title') }>
                    <address className="not-italic space-y-1">
                        <Obfuscate email={ t('email') } className="link obfuscate">
                            <Email className="link_icon" />
                            <span>{ t('email') }</span>
                        </Obfuscate>
                        <Obfuscate tel={ t('phone') } className="link obfuscate">
                            <Phone className="link_icon" />
                            <span>{ t('phone') }</span>
                        </Obfuscate>
                    </address>
                </Container>
                
                { sidebar.map(({title, items, id}) => {
                    return (
                        <Container title={ title } key={ id }>
                            <ul className="list-disc space-y-1 pl-5">
                                { items.map(({name, id}) => <li key={ id } className="text-sm font-mono lg:text-base">{ name }</li> ) }
                            </ul>
                        </Container>
                    )
                })}
            </section>
        </aside>
    )
}

export default Sidebar;