import * as React from 'react';
import Markdown from 'markdown-to-jsx';
import classNames from 'classnames';
import { useEffect } from 'react';
import { Social, Action, Link, BackgroundImage } from '../../atoms';
import ImageBlock from '../../molecules/ImageBlock';


export default function Footer(props) {
    const colors = props.colors || 'colors-d';
    const footerStyles = props.styles?.self || {};
    const footerWidth = footerStyles.width || 'narrow';
    return (
        <footer
            className={classNames('sb-component', 'sb-component-footer', footerStyles.padding || 'py-16 px-4')}
            data-sb-field-path={`${props.annotationPrefix}:footer`}
        >
            <div className={classNames('mx-auto', mapMaxWidthStyles(footerWidth))}>
                {footerVariants(props)}
            </div>
        </footer>
    );

}


function footerVariants(props) {
    const variant = props.variant || 'variant-a';
    switch (variant) {
        case 'variant-a':
            return footerVariantA(props);
    }
    return null;
}

function footerVariantA(props) {
    const primaryLinks = props.primaryLinks || [];
    const secondaryLinks = props.secondaryLinks || [];
    const socialLinks = props.socialLinks || [];
    const legalLinks = props.legalLinks || [];
    const embedIframe = props.embed || [];
    const media = props.media.url || [];

    class Iframe extends React.Component {
        render() {
            return <div className="iframe" dangerouslySetInnerHTML={{ __html: embedIframe }} />;
        }
    }
    return (
        <>
            <div className={classNames(props.colors)}>
                {(primaryLinks.length > 0 || socialLinks.length > 0 || props.contacts) && (
                    <div className={classNames('flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto py-8')}>
                        {primaryLinks.length > 0 && (
                            <div className="w-full lg:w-1/3 px-8 py-8">
                                <ul className="contact-svg flex flex-col items-start space-y-6 text-lg" data-sb-field-path=".primaryLinks">
                                    {primaryLinks.map((link, index) => (
                                        <li key={index}>
                                            <Action {...link} data-sb-field-path={`.${index}`} />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        <div className="w-full lg:w-2/3 relative py-12 object-cover h-96 ">
                            {props.media && <BackgroundImage {...props.media} />}
                            {/* {embedIframe ? <Iframe /> : props.media && <BackgroundImage {...props.media} />} */}

                        </div>
                    </div>
                )}
            </div>
            <div className="border-t-2 border-current flex justify-between pt-6 flex-col gap-4">
                <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-start justify-between px-4 mx:px-0">
                    <div>{(props.logo || props.title || props.text) && (
                        <div className="mb-6">
                            <Link href="/" className="sb-footer-logo flex items-center">
                                {props.logo && <ImageBlock {...props.logo} className={classNames('max-h-12', { 'mr-2': props.title })} data-sb-field-path=".logo" />}
                            </Link>
                            {(socialLinks.length > 0 || props.contacts) && (
                                <div className="flex flex-row justify-start mt-6">
                                    {socialLinks.length > 0 && (
                                        <ul className="flex  mr-4 mb-4" data-sb-field-path=".socialLinks">
                                            {socialLinks.map((link, index) => (
                                                <li key={index} className="mr-8 mb-2">
                                                    <Social {...link} data-sb-field-path={`.${index}`} />
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                    {props.contacts && <Contacts {...props.contacts} className="flex flex-wrap justify-center mx-4 mb-4" classNameItem="mx-4 mb-2" />}
                                </div>
                            )}
                        </div>
                    )}
                    </div>
                    <div>
                        {secondaryLinks.length > 0 && (
                            <ul className="contact-svg flex flex-col items-start space-y-1 text-lg" data-sb-field-path=".primaryLinks">
                                {secondaryLinks.map((link, index) => (
                                    <li key={index}>
                                        <Action {...link} data-sb-field-path={`.${index}`} />
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
                <div className='max-w-7xl mx-auto w-full flex flex-col justify-between items-start md:items-center  px-4 mx:px-0'>
                    {legalLinks.length > 0 && (
                        <ul className="flex flex-col mb-6 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row" data-sb-field-path=".legalLinks">
                            {legalLinks.map((link, index) => (
                                <li key={index}>
                                    <Action {...link} data-sb-field-path={`.${index}`} />
                                </li>
                            ))}
                        </ul>
                    )}
                    <Markdown
                        options={{ forceInline: false, }}
                        className="sb-markdown text-center flex flex-col items-start md:items-center"
                        data-sb-field-path=".copyrightText"
                    >
                        {props.copyrightText}
                    </Markdown>
                </div>
            </div>
        </>
    );
}

function Contacts(props) {
    const cssClasses = props.className || null;
    const cssClassesItem = props.classNameItem || null;
    return (
        <div className={cssClasses} data-sb-field-path=".contacts">
            {props.phoneNumber && (
                <p className={cssClassesItem}>
                    <a
                        href={`tel:${props.phoneNumber}`}
                        aria-label={props.phoneAltText}
                        data-sb-field-path=".phoneNumber .phoneNumber#@href .phoneAltText#@title"
                    >
                        {props.phoneNumber}
                    </a>
                </p>
            )}
            {props.email && (
                <p className={cssClassesItem}>
                    <a href={`mailto:${props.email}`} aria-label={props.emailAltText} data-sb-field-path=".email .email#@href .emailAltText#@title">
                        {props.email}
                    </a>
                </p>
            )}
            {props.address && (
                <p className={cssClassesItem}>
                    <a
                        href={`https://www.google.com/maps/search/${props.address}`}
                        aria-label={props.addressAltText}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-sb-field-path=".address .address#@href .addressAltText#@title"
                    >
                        {props.address}
                    </a>
                </p>
            )}
        </div>
    );
}

function mapMaxWidthStyles(width) {
    switch (width) {
        case 'narrow':
            return 'max-w-7xl';
        case 'wide':
            return 'max-w-screen-2xl';
        case 'full':
            return 'max-w-full';
    }
    return null;
}
