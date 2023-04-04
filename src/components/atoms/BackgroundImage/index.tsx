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
    const [loaded, setLoaded] = useState(false);

    return (
        <>
            <Image src={url}
                layout="fill"
                id={cssId}
                className={classNames('object-cover', 'object-center', cssClasses,loaded ? 'unblur' : '')}
                alt={title || ''}
                quality={65}
                placeholder="blur"
                blurDataURL={url}
                onLoadingComplete={() => setLoaded(true)}
            />
        <style jsx global>{`
        .unblur {
          animation: unblur 0.33s linear;
        }

        @keyframes unblur {
          from {
            filter: blur(20px);
          }
          to {
            filter: blur(0);
          }
        }
      `}</style>
        </>
    );
}
