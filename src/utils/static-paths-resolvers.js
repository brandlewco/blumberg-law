import { getAllPosts, getAllTestimonials, getAllCategoryPostsSorted, getAllAuthorPostsSorted, generatePagedPathsForPage } from './data-utils';

export function resolveStaticPaths({ pages, objects }) {
    return pages.reduce((paths, page) => {
        const objectType = page?.type || page?.layout;
        const pageUrlPath = page.__metadata?.urlPath;
        if (objectType && StaticPathsResolvers[objectType]) {
            const resolver = StaticPathsResolvers[objectType];
            return paths.concat(resolver(page, objects));
        }
        return paths.concat(pageUrlPath);
    }, []);
}

const StaticPathsResolvers = {
    PostFeedLayout: (page, objects) => {
        const posts = getAllPosts(objects);
        const numOfPostsPerPage = page.numOfPostsPerPage ?? 10;
        return generatePagedPathsForPage(page, posts, numOfPostsPerPage);
    },
    // CasesFeedLayout: (page, objects) => {
    //     const posts = getAllPosts(objects);
    //     const numOfPostsPerPage = page.numOfPostsPerPage ?? 10;
    //     return generatePagedPathsForPage(page, posts, numOfPostsPerPage);
    // },
    TestimonialFeedLayout: (page, objects) => {
        const posts = getAllTestimonials(objects);
        const numOfPostsPerPage = page.numOfPostsPerPage ?? 10;
        return generatePagedPathsForPage(page, posts, numOfPostsPerPage);
    },
    PostFeedCategoryLayout: (page, objects) => {
        const categoryId = page.__metadata?.id;
        const numOfPostsPerPage = page.numOfPostsPerPage ?? 10;
        const categoryPosts = getAllCategoryPostsSorted(objects, categoryId);
        return generatePagedPathsForPage(page, categoryPosts, numOfPostsPerPage);
    },
    TestimonialFeedCategoryLayout: (page, objects) => {
        const categoryId = page.__metadata?.id;
        const numOfPostsPerPage = page.numOfPostsPerPage ?? 10;
        const categoryPosts = getAllCategoryPostsSorted(objects, categoryId);
        return generatePagedPathsForPage(page, categoryPosts, numOfPostsPerPage);
    },
    Person: (page, objects) => {
        const categoryId = page.__metadata?.id;
        const categoryPosts = getAllAuthorPostsSorted(objects, categoryId);
        return generatePagedPathsForPage(page, categoryPosts, 10);
    }
};
