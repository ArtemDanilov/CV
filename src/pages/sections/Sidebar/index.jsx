import React from 'react'
import Obfuscate from 'react-obfuscate';

import Image from '../../../components/Image';
import Container from '../../../components/Container';

import avatar from '../../../assets/avatar.webp';
import { ReactComponent as Phone } from '../../../svg/phone.svg';
import { ReactComponent as Email } from '../../../svg/email.svg';

import './style.scss';

const Sidebar = (props) => {
    const data = props.content;

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
                <div className="name-and-position md:text-center">
                    <h1 className="text-6xl font-mono font-thin md:text-3xl lg:text-4xl">
                        { data.fullName }
                    </h1>
                    <strong className="text-2xl tracking-widest font-normal md:text-base">
                        { data.position }
                    </strong>
                </div>

                <Container title={ data.contact_title }>
                    <address className="not-italic space-y-1">
                        <Obfuscate email={ data.email } className="link obfuscate">
                            <Email className="link_icon" />
                            <span>{ data.email }</span>
                        </Obfuscate>
                        <Obfuscate tel={ data.phone } className="link obfuscate">
                            <Phone className="link_icon" />
                            <span>{ data.phone }</span>
                        </Obfuscate>
                    </address>
                </Container>

                { data.sections.map(({title, items, id}) => {
                    return (
                        <Container title={ title } key={ id }>
                            <ul className="list-disc space-y-1 pl-5">
                                { items.map(({name, id}) => <li key={ id } className="text-base font-mono">{ name }</li> ) }
                            </ul>
                        </Container>
                    )
                })}
            </section>
        </aside>
    )
}

export default Sidebar;