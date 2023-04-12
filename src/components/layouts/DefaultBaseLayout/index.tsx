import * as React from 'react';
import Head from 'next/head';
import classNames from 'classnames';
import Header from '../../sections/Header';
import Footer from '../../sections/Footer';
import { seoGenerateTitle, seoGenerateMetaTags, seoGenerateMetaDescription } from '../../../utils/seo-utils';

export default function DefaultBaseLayout(props) {
    const { page, site } = props;
    const siteMeta = site?.__metadata || {};
    const pageMeta = page?.__metadata || {};
    let title = seoGenerateTitle(page, site);
    let metaTags = seoGenerateMetaTags(page, site);
    let metaDescription = seoGenerateMetaDescription(page, site);
    return (
        <div className={classNames('sb-page', pageMeta.pageCssClasses)} data-sb-object-id={pageMeta.id}>
            <div className="sb-base sb-default-base-layout">
                <Head>
                    <title>{title}</title>
                    {metaDescription && <meta name="description" content={metaDescription} />}
                    {metaTags.map((metaTag) => {
                      if (metaTag.format === 'property' ) {
                        // OpenGraph meta tags (og:*) should be have the format <meta property="og:…" content="…">
                        return  <meta key={metaTag.property} property={metaTag.property} content={metaTag.content} />
                      }
                      return  <meta key={metaTag.property} name={metaTag.property} content={metaTag.content} />
                    })}
                    <script type='application/ld+json' dangerouslySetInnerHTML={ { __html: `{
                            "@context": "https://schema.org",
                            "@type": "Attorney",
                            "name": "Blumberg & Associates",
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "3600 N. 19TH Ave.",
                                "addressLocality": "Phoenix",
                                "addressRegion": "AZ",
                                "postalCode": "85015"
                            },
                            "image": "https://azblumberglaw.com/_next/image?url=%2Fimages%2Fblumberg-hero-mockup.jpg&w=1080&q=75",
                            "telePhone": "602-277-6180",
                            "faxNumber": "602-889-9167",
                            "url": "https://azblumberglaw.com/",
                            "openingHours": "Mo,Tu,We,Th,Fr 09:00-17:00",
                            "openingHoursSpecification": [ {
                                "@type": "OpeningHoursSpecification",
                                "dayOfWeek": [
                                    "Monday",
                                    "Tuesday",
                                    "Wednesday",
                                    "Thursday",
                                    "Friday"
                                ],
                                "opens": "09:00",
                                "closes": "17:00"
                            } ],
                            "geo": {
                                "@type": "GeoCoordinates",
                                "latitude": "33.489876",
                                "longitude": "-112.100171"
                            },
                            "priceRange":"$"

                        }`}} />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    {site.favicon && <link rel="icon" href={site.favicon} />}
                <link rel="dns-prefetch" href="https://www.googletagmanager.com/"/>
                <link rel="dns-prefetch" href="https://use.typekit.net"/>
                <link rel="dns-prefetch" href="https://p.typekit.net"/>
                <link rel="preload" href="https://use.typekit.net/yxh4eie.css" as="style"/>
                <link rel="stylesheet" href="https://use.typekit.net/yxh4eie.css"/>
                <link href="https://www.googletagmanager.com/gtag/js?id=G-2XG31D631P&l=dataLayer&cx=c" rel="preload" as="script"/>
                </Head>
                {site.header && <Header {...site.header} annotationPrefix={siteMeta.id} />}
                {props.children}
                {site.footer && <Footer {...site.footer} annotationPrefix={siteMeta.id} />}
            </div>
        </div>
    );
}
