import * as React from 'react';
import Markdown from 'markdown-to-jsx';
import classNames from 'classnames';

import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import { getDataAttrs } from '../../../utils/get-data-attrs';
import { BackgroundImage } from '../../atoms';
import { Parallax, Background } from "react-parallax";
import Image from 'next/image'
import { useState } from 'react';


export default function QuoteSection(props) {
    const cssId = props.elementId || null;
    const colors = props.colors || 'colors-d';
    const sectionStyles = props.styles?.self || {};
    const sectionWidth = sectionStyles.width || 'wide';
    const sectionHeight = sectionStyles.height || 'auto';
    const sectionJustifyContent = sectionStyles.justifyContent || 'center';
    const [loaded, setLoaded] = useState(false);

    return (
        <div
            id={cssId}
            {...getDataAttrs(props)}
            className={classNames(
                'sb-component',
                'sb-component-section',
                'sb-component-quote-section',
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
                        alt="backgroud image"
                        quality={65}
                        placeholder='blur'
                        blurDataURL={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkUE6rBwABvgEKne8iCAAAAABJRU5ErkJggg=='}
                        />
                    </Background>
                }
                <div className={classNames('flex', 'relative', 'w-full',
                    sectionStyles.padding || 'py-12 px-4', mapStyles({ justifyContent: sectionJustifyContent }))}>
                    <div className={classNames('w-full', mapMaxWidthStyles(sectionWidth))}>{quoteContent(props)}</div>
                </div>
            </Parallax>

        </div>
    );
}

function quoteContent(props) {
    const styles = props.styles || {};
    return (
        <blockquote>
            {props.quote && (
                <Markdown
                    options={{ forceBlock: true, forceWrapper: true }}
                    className={classNames('sb-markdown', 'sm:leading-tight', 'text-4xl', 'sm:text-6xl', styles.quote ? mapStyles(styles.quote) : null)}
                    data-sb-field-path=".quote"
                >
                    {props.quote}
                </Markdown>
            )}
            {(props.name || props.title) && (
                <footer className="mt-8 sm:mt-10">
                    {props.name && (
                        <span className={classNames('block', 'text-lg', styles.name ? mapStyles(styles.name) : null)} data-sb-field-path=".name">
                            {props.name}
                        </span>
                    )}
                    {props.title && (
                        <span className={classNames('block', 'text-lg', styles.title ? mapStyles(styles.title) : null)} data-sb-field-path=".title">
                            {props.title}
                        </span>
                    )}
                </footer>
            )}
        </blockquote>
    );
}

function mapMinHeightStyles(height) {
    switch (height) {
        case 'auto':
            return 'min-h-0';
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
