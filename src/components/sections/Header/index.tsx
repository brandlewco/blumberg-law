import * as React from 'react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import classNames from 'classnames';
// import { v4 as uuidv4 } from 'uuid';
import { isMobile } from "react-device-detect";
import Image from 'next/image'


import { Link, Action } from '../../atoms';
import ImageBlock from '../../molecules/ImageBlock';
import CloseIcon from '../../svgs/close';
import MenuIcon from '../../svgs/menu';
import { loadGetInitialProps } from 'next/dist/shared/lib/utils';
import next from 'next';

// console.log("is mobile:", isMobile)
export default function Header(props) {
    const primaryColors = props.primaryColors || 'colors-d';
    const headerStyles = props.styles?.self || {};
    const headerWidth = headerStyles.width || 'narrow';

    return (
        <header
            className={classNames('sb-component', 'sb-component-header', primaryColors, props.isSticky ? 'sticky top-0 z-50' : 'relative')}
            data-sb-field-path={`${props.annotationPrefix}:header`}
        >
            <div className={classNames('mx-auto', mapMaxWidthStyles(headerWidth))}>
                <Link href="#main" className="sr-only">
                    Skip to main content
                </Link>
                {headerVariantB(props)}
            </div>
        </header>
    );
}

function headerVariantB(props) {
    const primaryLinks = props.primaryLinks || [];
    const secondaryLinks = props.secondaryLinks || [];
    return (
        <nav className="flex flex-row justify-between items-center relative">
            {(props.logo || (props.title && props.isTitleVisible)) && <div className="mr-8">{siteLogoLink(props)}</div>}
            {primaryLinks.length > 0 && (
                <ul key="primaryLinks"
                    className="hidden lg:flex lg:items-center space-x-2 xl:space-x-8 w-auto"
                    data-sb-field-path=".primaryLinks"
                >
                    {listOfLinks(primaryLinks, false)}
                </ul>
            )}
            {secondaryLinks.length > 0 && (
                <ul key="secondaryLinks" className="hidden lg:flex lg:items-center space-x-8" data-sb-field-path=".secondaryLinks">
                    {listOfLinks(secondaryLinks, false)}
                </ul>
            )}
            {(primaryLinks.length > 0 || secondaryLinks.length > 0) && <MobileMenu {...props} />}
        </nav>
    );
}

function MobileMenu(props) {
    const secondaryColors = props.secondaryColors || 'colors-d';
    const primaryLinks = props.primaryLinks || [];
    const secondaryLinks = props.secondaryLinks || [];
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = () => {
            setIsMenuOpen(false);
        };
        router.events.on('routeChangeStart', handleRouteChange);

        return () => {
            router.events.off('routeChangeStart', handleRouteChange);
        };
    }, [router.events]);

    return (
        <div className="ml-auto lg:hidden">
            <button aria-label="Open Menu" title="Open Menu" className="p-2 -mr-1 focus:outline-none" onClick={() => setIsMenuOpen(true)}>
                <span className="sr-only">Open Menu</span>
                <MenuIcon className="fill-current h-6 w-6" />
            </button>
            <div
                className={classNames(
                    secondaryColors,
                    'fixed',
                    'inset-0',
                    'px-4',
                    'sm:px-8',
                    'py-5',
                    'overflow-y-auto',
                    'z-20',
                    isMenuOpen ? 'block' : 'hidden'
                )}
            >
                <div className="flex flex-col min-h-full">
                    <div className="flex items-center justify-between mb-10">
                        {(props.logo || (props.title && props.isTitleVisible)) && siteLogoLink(props)}
                        <button aria-label="Close Menu" title="Close Menu" className="p-2 -mr-1 focus:outline-none" onClick={() => setIsMenuOpen(false)}>
                            <CloseIcon className="fill-current h-6 w-6" />
                        </button>
                    </div>
                    {primaryLinks.length > 0 && (
                        <ul className="flex-grow mb-10 space-y-6" data-sb-field-path=".primaryLinks">
                            {listOfLinks(primaryLinks, true)}
                        </ul>
                    )}
                    {secondaryLinks.length > 0 && (
                        <ul className="mb-10 space-y-5" data-sb-field-path=".secondaryLinks">
                            {listOfLinks(secondaryLinks, true)}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}

function siteLogoLink(props) {
    return (
        <Link href="/" aria-label={props.title} className="sb-header-logo flex items-center">
            <Image src={props.logo.url}
                id="logo"
                className={classNames('mr-2')}
                alt='Blumberg & Associates Logo'
                height={54}
                width={183}
                priority={true}
                data-sb-field-path=".logo"
            />
            {props.title && props.isTitleVisible && (
                <span className="text-2xl uppercase font-medium" data-sb-field-path=".title">
                    {props.title}
                </span>
            )}
        </Link>
    );
}

function listOfLinks(links, inMobileMenu = false) {
    return links.map((link, index) => {
        const secondaryColors = 'colors-d';
        const headerStyles = link.styles || {};
        const linkChild = link.child || [];
        const [isMenuOpen, setIsMenuOpen] = useState(false);
        const router = useRouter();
        var toggle = false;

        useEffect(() => {
            const handleRouteChange = () => {
                setIsMenuOpen(false);
            };
            router.events.on('routeChangeStart', handleRouteChange);

            return () => {
                router.events.off('routeChangeStart', handleRouteChange);
            };
        }, [router.events]);

        return (
            <>
                {linkChild.length > 0 && (
                    <li key={index} data-key={index} className={classNames('dropdown', 'relative', 'block', 'xl:py-12')}
                        onMouseEnter={() => setIsMenuOpen(true)}
                        onMouseLeave={() => setIsMenuOpen(false)}
                        onMouseDown={() => setIsMenuOpen(toggle = !toggle)}
                    >
                        <Action label={link.label} altText={link.altText} url={isMobile ? "#" : link.url} style="link" showIcon="true" icon="menuDown" className="w-full flex flex-row justify-between border-b-2 lg:border-0 border-solid border-secondary " data-sb-field-path={`.${index}`} />
                        <ul className={classNames(secondaryColors, 'transition-all', 'lg:absolute', 'top-full', 'flex', 'flex-col', 'whitespace-nowrap', 'px-4', 'pt-4', 'shadow-lg', isMenuOpen ? 'block' : 'hidden')} data-sb-field-path=".primaryLinks">
                            {linkChild.map((link, index) => (
                                <li key={index} data-key={index} className="pb-4">
                                    <Action {...link} style="link" className="min-w-max justify-start border-b-2 lg:border-0 border-solid border-gray" data-sb-field-path={`.${index}`} />
                                </li>
                            ))}
                        </ul>
                    </li>
                )}

                {linkChild.length == 0 && (
                    <li key={index} data-key={index} className={classNames('relative', 'block')}>
                        <Action {...link} elementId={inMobileMenu ? link.elementId + '-mobile' : link.elementId} className={classNames(headerStyles, "w-full justify-start border-b-2 lg:border-0 border-solid border-secondary ", inMobileMenu && link.type === 'Button' ? 'w-full' : '')} data-sb-field-path={`.${index}`} />
                    </li>
                )}
            </>
        );
    });
}

function mapMaxWidthStyles(width) {
    switch (width) {
        case 'narrow':
            return 'max-w-5xl';
        case 'wide':
            return 'max-w-7xl';
        case 'full':
            return 'max-w-full';
    }
    return null;
}
