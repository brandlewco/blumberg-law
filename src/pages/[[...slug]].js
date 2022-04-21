import React from 'react';
import { sourcebitDataClient } from 'sourcebit-target-next';
import { withRemoteDataUpdates } from 'sourcebit-target-next/with-remote-data-updates';
import { getComponent } from '../components/components-registry';
import { resolveStaticProps } from '../utils/static-props-resolvers';
import { resolveStaticPaths } from '../utils/static-paths-resolvers';

function Page(props) {
    const { page, site } = props;
    const { layout } = page;
    if (!layout) {
        throw new Error(`page has no layout, page '${props.path}'`);
    }
    const PageLayout = getComponent(layout);
    if (!PageLayout) {
        throw new Error(`no page layout matching the layout: ${layout}`);
    }
    return <PageLayout page={page} site={site} />;
}

export async function getStaticPaths() {
    // The "data" object is generated by sourcebit.js and cached inside .sourcebit-nextjs-cache.json
    const data = await sourcebitDataClient.getData();
    const paths = resolveStaticPaths(data);
    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    // The "data" object is generated by sourcebit.js and cached inside .sourcebit-nextjs-cache.json
    const data = await sourcebitDataClient.getData();
    const urlPath = '/' + (params.slug || []).join('/');
    const props = await resolveStaticProps(urlPath, data);
    return { props };
}

export default withRemoteDataUpdates(Page);
