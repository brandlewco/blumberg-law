import * as React from 'react';
import classNames from 'classnames';
import Image from 'next/image';

export default function ImageBlock(props) {
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
        <Image
            id={cssId}
            className={classNames('sb-component', 'sb-component-block', 'sb-component-image-block', cssClasses)}
            src={url}
            alt={altText || ''}
            data-sb-field-path={annotations.join(' ').trim()}
            height={props.height}
            width={props.width}
            placeholder='blur'
            blurDataURL={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkUE6rBwABvgEKne8iCAAAAABJRU5ErkJggg=='}
        />
    );
}