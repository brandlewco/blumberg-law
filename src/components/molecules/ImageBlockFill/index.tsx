import * as React from 'react';
import classNames from 'classnames';
import Image from 'next/image';

export default function ImageBlockFill(props) {
    const { url, altText } = props;
    if (!url) {
        return null;
    }
    const cssClasses = props.className || null;
    const cssId = props.elementId || null;
    const annotationPrefix = props['data-sb-field-path'] || '';
    const annotations = [
        `${annotationPrefix}`,
        `${annotationPrefix}.url#@src`,
        `${annotationPrefix}.altText#@alt`,
        `${annotationPrefix}.elementId#@id`
    ];

    return (
        <div className={'image-container'}>
            <Image src={url}
                layout="fill"
                id={cssId}
                className={classNames('sb-component', 'sb-component-block', 'sb-component-image-block', cssClasses)}
                alt={altText || ''}
                data-sb-field-path={annotations.join(' ').trim()}
                quality={65}
                placeholder="blur"
                blurDataURL={url}
            />
        </div>
    );
}
