import * as React from 'react';
import dayjs from 'dayjs';
import Markdown from 'markdown-to-jsx';
import classNames from 'classnames';

import { getBaseLayoutComponent } from '../../../utils/base-layout';
import { getComponent } from '../../components-registry';
import getPageUrlPath from '../../../utils/get-page-url-path';
import Link from '../../atoms/Link';

export default function CasesLayout(props) {
    const { page, site } = props;
    const BaseLayout = getBaseLayoutComponent(page.baseLayout, site.baseLayout);
    const colors = page.colors || 'colors-d';
    const sections = page.bottomSections || [];
    const dateTimeAttr = dayjs(page.date).format('YYYY-MM-DD HH:mm:ss');
    const formattedDate = dayjs(page.date).format('MMMM D, YYYY');

    return (
        <BaseLayout page={page} site={site}>
            <main id="main" className="sb-layout sb-post-layout">
                <article className={classNames(colors, 'px-4', 'sm:px-8', 'py-14', 'lg:py-20')}>
                    <div className="max-w-7xl mx-auto">
                        {/* {page.media && <div className="w-full mb-8 sm:mb-12">{postMedia(page.media)}</div>} */}
                        <header className="max-w-5xl mx-auto mb-12 text-left colors-d">
                            {page.title &&
                                <div className="px-8 py-12">
                                    <h1 data-sb-field-path="title">{page.title}</h1>
                                </div>
                            }
                            {page.excerpt &&
                                <div className="px-8 py-12 bg-primary">
                                    <h2 className="text-white" data-sb-field-path="excerpt"><span className='text-secondary pr-4'>X</span><span className="text-white">{page.excerpt}</span></h2>
                                </div>
                            }
                            <div className="text-lg mt-6">
                                <PostAttribution post={page} />
                            </div>
                        </header>
                        {page.markdown_content && (
                            <Markdown options={{ forceBlock: true }} className="sb-markdown max-w-5xl mx-auto markdown-image" data-sb-field-path="markdown_content">
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
    return <Media {...media} className={classNames({ 'w-full': mediaType === 'ImageBlock' })} data-sb-field-path="media" />;
}


function PostAttribution({ post }) {
    if (!post.category) {
        return null;
    }
    // const author = post.author ? postAuthor(post.author) : null;
    const category = post.category ? postCategory(post.category) : null;
    return (
        <span>
            {category && (
                <>
                    {category}
                </>
            )}
        </span>
    );
}

function postCategory(category) {
    return (
        <Link data-sb-field-path="category" href={getPageUrlPath(category)}>
            {category.title}
        </Link>
    );
}
