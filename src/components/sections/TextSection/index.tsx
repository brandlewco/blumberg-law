import * as React from 'react';
import Markdown from 'markdown-to-jsx';
import classNames from 'classnames';
import { Link, Action, BackgroundImage } from '../../atoms';
import { Parallax, Background } from "react-parallax";
import Image from 'next/image'
import { useState } from 'react';




import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import { getDataAttrs } from '../../../utils/get-data-attrs';

export default function TextSection(props) {
    const cssId = props.elementId || null;
    const colors = props.colors || 'colors-d';
    const sectionStyles = props.styles?.self || {};
    const sectionWidth = sectionStyles.width || 'wide';
    const sectionHeight = sectionStyles.height || 'auto';
    const sectionJustifyContent = sectionStyles.justifyContent || 'center';
    const bgImage = props.backgroundImage;
    const [loaded, setLoaded] = useState(false);

    return (
        <div
            id={cssId}
            {...getDataAttrs(props)}
            className={classNames(
                'sb-component',
                'sb-component-section',
                'sb-component-text-section',
                colors,
                'flex',
                'flex-col',
                'justify-center',
                'relative',
                mapMinHeightStyles(sectionHeight),
                sectionStyles.margin,
                sectionStyles.borderColor,
                sectionStyles.borderStyle ? mapStyles({ borderStyle: sectionStyles.borderStyle }) : 'border-none',
                sectionStyles.borderRadius ? mapStyles({ borderRadius: sectionStyles.borderRadius }) : null
            )}
            style={{
                borderWidth: sectionStyles.borderWidth ? `${sectionStyles.borderWidth}px` : null
            }}
        >
            {/* {props.backgroundImage && <BackgroundImage {...props.backgroundImage} />} */}
            {/* <Parallax
            bgImage={props.backgroundImage ? props.backgroundImage.url : null}
            strength={400}
            renderLayer={percentage => (
                <div
                    style={{
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                    }}
                />
            )}
            > */}
            <Parallax strength={300}>
                {props.backgroundImage && 
                    <Background className="custom-bg">
                    <Image
                        layout="fill"
                        src={props.backgroundImage.url}
                        alt="background image"
                        quality={65}
                        placeholder="blur"
                        blurDataURL={props.backgroundImage.url}
                        onLoadingComplete={() => setLoaded(true)}
                        />
                    </Background>
                }
                <div className={classNames('flex', 'w-full', 'z-10', mapStyles({ justifyContent: sectionJustifyContent }), sectionStyles.padding)}>
                    <div className={classNames('w-full', mapMaxWidthStyles(sectionWidth))}>
                        {textBodyVariants(props)}
                    </div>
                </div>
            </Parallax>
        </div>
    );
}

function textBodyVariants(props) {
    const variant = props.variant || 'variant-a';
    switch (variant) {
        case 'variant-a':
            return textBodyVariantA(props);
        case 'variant-b':
            return textBodyVariantB(props);
    }
    return null;
}

function textBodyVariantA(props) {
    const styles = props.styles || {};
    return (
        <div>
            {props.title && (
                <Markdown
                    className={classNames('h2', styles.title ? mapStyles(styles.title) : null)} data-sb-field-path=".title">
                    {props.title}
                </Markdown>
            )}
            {props.subtitle && (
                <p
                    className={classNames('text-xl', 'sm:text-2xl', styles.subtitle ? mapStyles(styles.subtitle) : null, { 'mt-2': props.title })}
                    data-sb-field-path=".subtitle"
                >
                    {props.subtitle}
                </p>
            )}
            {props.text && (
                <Markdown
                    options={{ forceBlock: true, forceWrapper: true }}
                    className={classNames('sb-markdown', 'sm:text-lg', styles.text ? mapStyles(styles.text) : null, { 'mt-6': props.title || props.subtitle })}
                    data-sb-field-path=".text"
                >
                    {props.text}
                </Markdown>
            )}
            {itemActions(props)}
        </div>
    );
}

function textBodyVariantB(props) {
    const styles = props.styles || {};
    return (
        <div className="flex flex-wrap">
            {(props.title || props.subtitle) && (
                <div className={classNames('w-full', { 'lg:w-1/3 lg:pr-3': props.text })}>
                    {props.title && (
                        <Markdown
                            className={classNames('h2', styles.title ? mapStyles(styles.title) : null)} data-sb-field-path=".title">
                            {props.title}
                        </Markdown>
                    )}
                    {props.subtitle && (
                        <p
                            className={classNames('text-xl', 'sm:text-2xl', styles.subtitle ? mapStyles(styles.subtitle) : null, { 'mt-2': props.title })}
                            data-sb-field-path=".subtitle"
                        >
                            {props.subtitle}
                        </p>
                    )}
                </div>
            )}
            {(props.text || props.actions)&& (
                <div className={classNames('w-full', { 'mt-12 lg:mt-0 lg:w-2/3 lg:pl-3': props.title || props.subtitle })}>
                    {props.text && (
                    <Markdown
                        options={{ forceBlock: true, forceWrapper: true }}
                        className={classNames('sb-markdown', 'sm:text-lg', styles.text ? mapStyles(styles.text) : null)}
                        data-sb-field-path=".text"
                    >
                        {props.text}
                    </Markdown>
                    )}
                    {props.actions && (
                       <div className=''>
                       {itemActions(props)}
                       </div>
                    )}
                </div>
            )}
        </div>
    );
}

function itemActions(props) {
    const actions = props.actions || [];
    if (actions.length === 0) {
        return null;
    }
    const styles = props.styles || {};
    return (
        <div
            className={classNames('overflow-x-hidden', {
                'mt-6': props.title || props.subtitle || props.text
            })}
        >
            <div
                className={classNames('flex', 'flex-wrap', 'items-center', '-mx-2', styles.actions ? mapStyles(styles.actions) : null)}
                data-sb-field-path=".actions"
            >
                {actions.map((action, index) => (
                    <Action key={index} {...action} className="mb-3 mx-2 lg:whitespace-nowrap" data-sb-field-path={`.${index}`} />
                ))}
            </div>
        </div>
    );
}


function mapMinHeightStyles(height) {
    switch (height) {
        case 'screen':
            return 'min-h-screen';
    }
    return null;
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
