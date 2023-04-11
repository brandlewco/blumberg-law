import * as React from 'react';
import classNames from 'classnames';
import Image from 'next/image'
import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import { useState } from 'react';


export default function BackgroundImage(props) {
    const { url } = props;
    if (!url) {
        return null;
    }
    const cssClasses = props.className || null;
    const title = props.title || null;
    const cssId = props.elementId || null;
    const imageOpacity = props.opacity || props.opacity === 0 ? props.opacity : 100;
    const backgroundImageSize = props.backgroundSize || 'cover';
    const backgroundImagePosition = props.backgroundPosition || 'center';

    return (
        <>
            <Image src={url}
                layout="fill"
                id={cssId}
                className={classNames('object-cover', 'object-center', cssClasses)}
                alt={title || ''}
                quality={65}
                priority={true}
            />

        </>
    );
}
