import * as React from 'react';
import dayjs from 'dayjs';
import Markdown from 'markdown-to-jsx';
import classNames from 'classnames';

import { getBaseLayoutComponent } from '../../../utils/base-layout';
import { getComponent } from '../../components-registry';
import getPageUrlPath from '../../../utils/get-page-url-path';
import { Link, BackgroundImage } from '../../atoms';


export default function PostLayout(props) {
    const { page, site } = props;
    const BaseLayout = getBaseLayoutComponent(page.baseLayout, site.baseLayout);
    const colors = page.colors || 'colors-d';
    const sections = page.bottomSections || [];
    const dateTimeAttr = dayjs(page.date).format('YYYY-MM-DD HH:mm:ss');
    const formattedDate = dayjs(page.date).format('MMMM D, YYYY');

    return (
        <BaseLayout page={page} site={site}>
            <main id="main" className="sb-layout sb-post-layout">
                <article className={classNames(colors)}>
                <header className="colors-b flex flex-col justify-center relative pt-8 pb-8 pr-4 pl-4 border-none rounded-none hero-bg">
                        {page.media && <BackgroundImage {...page.media} />}
                        <div className="relative z-30 max-w-7xl mx-auto py-8 md:py-20 xl:py-40 sm:px-8">
                            {page.title && <h1 data-sb-field-path="title">{page.title}</h1>}
                            <div className="text-lg mt-6">
                                <span>
                                    <time dateTime={dateTimeAttr} data-sb-field-path="date">
                                        {formattedDate}
                                    </time>
                                </span>
                                <PostAttribution post={page} />
                            </div>
                        </div>
                        </header>
                    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-14 lg:py-12">
                        {/* {page.media && <div className="w-full">{postMedia(page.media)}</div>} */}
                        {page.markdown_content && (
                            <Markdown options={{ forceBlock: true }} className="sb-markdown max-w-5-xl mx-auto markdown-image" data-sb-field-path="markdown_content">
                                {page.markdown_content}
                            </Markdown>
                        )}
                    </div>
                </article>
                {sections.length > 0 && (
                    <div data-sb-field-path="bottomSections">
                        {sections.map((section, index) => {
                            const Component = getComponent(section.type);
                            if (!Component) {
                                throw new Error(`no component matching the page section's type: ${section.type}`);
                            }
                            return <Component key={index} {...section} data-sb-field-path={`bottomSections.${index}`} />;
                        })}
                    </div>
                )}
            </main>
        </BaseLayout>
    );
}

function postMedia(media) {
    const mediaType = media.type;
    if (!mediaType) {
        throw new Error(`hero section media does not have the 'type' property`);
    }
    const Media = getComponent(mediaType);
    if (!Media) {
        throw new Error(`no component matching the hero section media type: ${mediaType}`);
    }
    return <Media {...media} className={classNames({ 'object-cover w-full h-80': mediaType === 'ImageBlock' })} data-sb-field-path="media" />;
}

function PostAttribution({ post }) {
    if (!post.author && !post.category) {
        return null;
    }
    const author = post.author ? postAuthor(post.author) : null;
    const category = post.category ? postCategory(post.category) : null;
    return (
        <span>
            {author && (
                <>
                    {', by '}
                    {author}
                </>
            )}
            {category && (
                <>
                    {author ? ' in ' : 'In '}
                    {category}
                </>
            )}
        </span>
    );
}

function postAuthor(author) {
    const children = (
        <>
            {author.firstName && <span data-sb-field-path=".firstName">{author.firstName}</span>}{' '}
            {author.lastName && <span data-sb-field-path=".lastName">{author.lastName}</span>}
        </>
    );
    return author.slug ? (
        <Link data-sb-field-path="author" href={`/blog/author/${author.slug}`}>
            {children}
        </Link>
    ) : (
        <span data-sb-field-path="author">{children}</span>
    );
}

function postCategory(category) {
    return (
        <Link data-sb-field-path="category" href={getPageUrlPath(category)}>
            {category.title}
        </Link>
    );
}
