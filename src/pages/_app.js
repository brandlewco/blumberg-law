import Script from 'next/script'
import { useRouter } from 'next/router';
import { GTM_ID, pageview } from '../lib/gtm'


import * as ga from '../lib/ga';
import '../css/main.css';

function MyApp({ Component, pageProps }) {
    const router = useRouter();

    // useEffect(() => {
    //     const handleRouteChange = (url) => {
    //         ga.pageview(url);
    //     };
    //     //When the component is mounted, subscribe to router changes
    //     //and log those page views
    //     router.events.on('routeChangeComplete', handleRouteChange);

    //     // If the component is unmounted, unsubscribe
    //     // from the event with the `off` method
    //     return () => {
    //         router.events.off('routeChangeComplete', handleRouteChange);
    //     };
    // }, [router.events]);

    return (
        <>
          {/* Google Tag Manager - Global base code */}
          <Script
            id="gtag-base"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer', '${GTM_ID}');
              `,
            }}
          />
          <Component {...pageProps} />
        </>
      )
}

export default MyApp;
