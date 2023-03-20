import React from 'react';
import { useTranslation } from 'react-i18next';
import Obfuscate from 'react-obfuscate';

import Container from '../components/Container';

import { ReactComponent as Phone } from '../assets/svg/phone.svg';
import { ReactComponent as Email } from '../assets/svg/email.svg';
import { ReactComponent as Github } from '../assets/svg/github.svg';

const Contact = () => {
    const { t } = useTranslation();

    const simplifyLink = (link) => {
        return link.substring(8);
    }

    return (
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
                <a
                    href={ t('github') }
                    className="link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Github className="link_icon p-1" />
                    <span>{ simplifyLink(t('github')) }</span>
                </a>
            </address>
        </Container>
    )
}

export default Contact;