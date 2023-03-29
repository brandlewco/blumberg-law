import * as React from 'react';
import Markdown from 'markdown-to-jsx';

import classNames from 'classnames';
import Link from '../Link';
import Apple from '../../svgs/apple';
import ArrowLeft from '../../svgs/arrow-left';
import ArrowLeftCircle from '../../svgs/arrow-left-circle';
import ArrowRight from '../../svgs/arrow-right';
import ArrowRightCircle from '../../svgs/arrow-right-circle';
import Cart from '../../svgs/cart';
import ChevronLeft from '../../svgs/chevron-left';
import ChevronRight from '../../svgs/chevron-right';
import Facebook from '../../svgs/facebook';
import GitHub from '../../svgs/github';
import GooglePlay from '../../svgs/google-play';
import Instagram from '../../svgs/instagram';
import LinkedIn from '../../svgs/linkedin';
import Mail from '../../svgs/mail';
import Play from '../../svgs/play';
import PlayCircle from '../../svgs/play-circle';
import Reddit from '../../svgs/reddit';
import Send from '../../svgs/send';
import Twitter from '../../svgs/twitter';
import Vimeo from '../../svgs/vimeo';
import YouTube from '../../svgs/youtube';
import ChildCustody from '../../svgs/a-child-custody';
import PornCrime from '../../svgs/a-porn-crime';
import WhiteCollarCrime from '../../svgs/a-white-collar-crime';
import DrugCrime from '../../svgs/a-drug-crime';
import Clients from '../../svgs/a-clients';
import Gavel from '../../svgs/a-gavel';
import Jury from '../../svgs/a-jury';
import SexCrime from '../../svgs/a-sex-crime';
import ViolentCrime from '../../svgs/a-violent-crime';
import MenuDown from '../../svgs/menu-down';
import Map from '../../svgs/a-map';
import Phone from '../../svgs/a-phone';



const iconMap = {
    menuDown: MenuDown,
    map: Map,
    phone: Phone,
    apple: Apple,
    arrowLeft: ArrowLeft,
    arrowLeftCircle: ArrowLeftCircle,
    arrowRight: ArrowRight,
    arrowRightCircle: ArrowRightCircle,
    cart: Cart,
    chevronLeft: ChevronLeft,
    chevronRight: ChevronRight,
    facebook: Facebook,
    github: GitHub,
    googlePlay: GooglePlay,
    instagram: Instagram,
    linkedin: LinkedIn,
    mail: Mail,
    play: Play,
    playCircle: PlayCircle,
    reddit: Reddit,
    send: Send,
    twitter: Twitter,
    vimeo: Vimeo,
    youtube: YouTube,
    childCustody: ChildCustody,
    pornCrime: PornCrime,
    clients: Clients,
    drugCrime: DrugCrime,
    gavel: Gavel,
    jury: Jury,
    sexCrime: SexCrime,
    violentCrime: ViolentCrime,
    whiteCollarCrime: WhiteCollarCrime,
};


export default function Action(props) {
    const { type, label, altText, url, showIcon } = props;
    const icon = props.icon || 'arrowLeft';
    const iconPosition = props.iconPosition || 'right';
    const IconComponent = iconMap[icon];
    const annotationPrefix = props['data-sb-field-path'] || '';
    const annotations = [
        `${annotationPrefix}`,
        `${annotationPrefix}.url#@href`,
        `${annotationPrefix}.altText#@aria-label`,
        `${annotationPrefix}.elementId#@id`,
        `${annotationPrefix}.label#span[1]`,
        `${annotationPrefix}.icon#svg[1]`
    ];
    const defaultStyle = type === 'Link' ? 'link' : 'secondary';
    const style = props.style || defaultStyle;
    const cssClasses = props.className || null;
    const cssId = props.elementId || null;
    return (
        <Link
            href={url}
            aria-label={altText}
            id={cssId}
            className={classNames('sb-component', 'sb-component-block', style === 'link' ? 'sb-component-link' : 'sb-component-button', cssClasses, {
                'sb-component-button-primary': style === 'primary',
                'sb-component-button-secondary': style === 'secondary'
            })}
            data-sb-field-path={annotations.join(' ').trim()}
        >
            <Markdown
                options={{}}
                className={"markdown whitespace-pre-wrap"} data-sb-field-path=".label">
                {label}
            </Markdown>
            {showIcon && IconComponent && (
                <IconComponent
                    className={classNames('fill-current', {
                        'order-first': iconPosition === 'left',
                        'mr-1.5': label && iconPosition === 'left',
                        'ml-1.5': label && iconPosition === 'right'
                    })}
                />
            )}
        </Link>
    );
}
