import * as React from 'react';

import { getBaseLayoutComponent } from '../../../utils/base-layout';
import { getComponent } from '../../components-registry';

export default function PageLayout(props) {
    const { page, site } = props;
    const BaseLayout = getBaseLayoutComponent(page.baseLayout, site.baseLayout);
    const hero = page.hero || [];
    const sections = page.sections || [];
    const sidebar = page.sidebar || [];
    const footer = page.footer || [];



    return (
        <BaseLayout page={page} site={site}>
            <main id="main" className="sb-layout sb-page-layout">
                {/* {page.title && (
                    <h1 className="sr-only" data-sb-field-path="title">
                        {page.title}
                    </h1>
                )} */}
                {hero.length > 0 && (
                    <div className="w-full" data-sb-field-path="hero">
                        {hero.map((section, index) => {
                            const Component = getComponent(section.type);
                            if (!Component) {
                                throw new Error(`no component matching the page section's type: ${section.type}`);
                            }
                            return <Component key={index} {...section} data-sb-field-path={`hero.${index}`} />;
                        })}
                    </div>
                )}
                <div className="flex flex-col md:flex-row justify-between items-start">
                    {sections.length > 0 && (
                        <div className="w-full" data-sb-field-path="sections">
                            {sections.map((section, index) => {
                                const Component = getComponent(section.type);
                                if (!Component) {
                                    throw new Error(`no component matching the page section's type: ${section.type}`);
                                }
                                return <Component key={index} {...section} data-sb-field-path={`sections.${index}`} />;
                            })}
                        </div>
                    )}
                    {sidebar.length > 0 && (
                        <div className="sidebar w-full md:w-1/4" data-sb-field-path="sidebar">
                            {sidebar.map((section, index) => {
                                const Component = getComponent(section.type);
                                if (!Component) {
                                    throw new Error(`no component matching the page section's type: ${section.type}`);
                                }
                                return <Component key={index} {...section} data-sb-field-path={`sidebar.${index}`} />;
                            })}
                        </div>
                    )}
                </div>
                {footer.length > 0 && (
                    <div className="w-full" data-sb-field-path="footer">
                        {footer.map((section, index) => {
                            const Component = getComponent(section.type);
                            if (!Component) {
                                throw new Error(`no component matching the page section's type: ${section.type}`);
                            }
                            return <Component key={index} {...section} data-sb-field-path={`footer.${index}`} />;
                        })}
                    </div>
                )}
            </main>
        </BaseLayout>
    );
}
