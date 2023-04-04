import * as React from 'react';
import classNames from 'classnames';
import Markdown from 'markdown-to-jsx';
import { Parallax, Background } from "react-parallax";
import Image from 'next/image'
import { useState } from 'react';


import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import { getDataAttrs } from '../../../utils/get-data-attrs';
import { Action, BackgroundImage } from '../../atoms';
import FeaturedItem from './FeaturedItem';

export default function FeaturedItemsSection(props) {
    const cssId = props.elementId || null;
    const colors = props.colors || 'colors-d';
    const styles = props.styles || {};
    const bgSize = props.backgroundSize || 'full';
    const sectionWidth = styles.self?.width || 'wide';
    const sectionHeight = styles.self?.height || 'auto';
    const sectionJustifyContent = styles.self?.justifyContent || 'center';
    const featuredItems = props.items || [];
    const imageOpt = props.backgroundImage ? props.backgroundImage.url : null;
    const [loaded, setLoaded] = useState(false);

    return (
        <div
            id={cssId}
            {...getDataAttrs(props)}
            className={classNames(
                'sb-component',
                'sb-component-section',
                'sb-component-feature-highlight-section',
                bgSize === 'inset' ? 'w-full' : null,
                bgSize === 'inset' ? mapMaxWidthStyles(sectionWidth) : null,
                colors,
                'flex',
                'flex-col',
                'justify-center',
                'relative',
                mapMinHeightStyles(sectionHeight),
                styles.self?.margin,
                styles.self?.borderColor,
                styles.self?.borderStyle ? mapStyles({ borderStyle: styles.self?.borderStyle }) : 'border-none',
                styles.self?.borderRadius ? mapStyles({ borderRadius: styles.self?.borderRadius }) : null,
            )}
            style={{
                borderWidth: styles.self?.borderWidth ? `${styles.self?.borderWidth}px` : null
            }}
        >   
        <Parallax strength={300}>
        {props.backgroundImage && 
            <Background className="custom-bg">
            <Image
                layout="fill"
                src={props.backgroundImage.url}
                className={classNames('object-cover', 'object-center', loaded ? 'unblur' : '')}
                alt="background image"
                quality={65}
                placeholder="blur"
                blurDataURL={props.backgroundImage.url}
                onLoadingComplete={() => setLoaded(true)}
                />
            </Background>
        }
            <div className={classNames('flex', 'w-full', 'z-10', mapStyles({ justifyContent: sectionJustifyContent }), styles.self?.padding || 'py-12 px-4')}>
                <div className={classNames('w-full', mapMaxWidthStyles(sectionWidth))}>
                    {props.title && (
                        <Markdown
                        className={classNames(styles.title ? mapStyles(styles.title) : null)} data-sb-field-path=".title">
                        {props.title}
                        </Markdown>
                    )}
                    {props.subtitle && (
                        <p
                            className={classNames('text-lg', 'sm:text-xl', styles.subtitle ? mapStyles(styles.subtitle) : null, {
                                'mt-6': props.title
                            })}
                            data-sb-field-path=".subtitle"
                        >
                            {props.subtitle}
                        </p>
                    )}
                    {featuredItemActions(props)}
                    {featuredItems.length > 0 && (
                        <div
                            className={classNames('grid', 'gap-6', 'lg:gap-8', mapColStyles(props?.columns || 3), {
                                'mt-12 lg:mt-16': props.title || props.subtitle || (props.actions || []).length > 0
                            })}
                            data-sb-field-path=".items"
                        >
                            {props.items.map((item, index) => (
                                <FeaturedItem key={index} {...item} enableHover={props.enableHover} data-sb-field-path={`.${index}`} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
            </Parallax>
        </div>
    );
}

function featuredItemActions(props) {
    const actions = props.actions || [];
    if (actions.length === 0) {
        return null;
    }
    const styles = props.styles || {};
    return (
        <div className={classNames('overflow-x-hidden', { 'mt-8': props.title || props.subtitle })}>
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

function mapColStyles(columns) {
    switch (columns) {
        case 4:
            return 'md:grid-cols-4';
        case 3:
            return 'md:grid-cols-3';
        case 2:
            return 'md:grid-cols-2';
    }
    return null;
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
            return 'max-w-7xl';
        case 'wide':
            return 'max-w-screen-2xl';
        case 'full':
            return 'max-w-full';
    }
    return null;
}

