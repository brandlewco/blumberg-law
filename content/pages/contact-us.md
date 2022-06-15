---
layout: PageLayout
metaTitle: Contact Bruce Blumberg | Blumberg & Associates
metaDescription: >-
  Call or contact us using our online contact form for a confidential case
  evaluation to talk to a lawyer who will fight for you.
addTitleSuffix: false
socialImage: null
metaTags: []
title: contact
hero:
  - type: TextSection
    elementId: ''
    colors: colors-b
    variant: variant-a
    backgroundImage:
      url: /images/background-court-blue.jpg
      backgroundSize: cover
      backgroundPosition: center
      opacity: 100
    title: |+
      # Contact us today for a confidential case evaluation.

    subtitle: ''
    text: >
      Get dedicated, experienced, and proven legal representation in Phoenix,
      Arizona with Bruce Blumberg.
    actions:
      - type: Button
        label: |
          ##### CALL 602-277-6180
        altText: ''
        url: 'tel:+16022776180'
        showIcon: false
        icon: arrowRight
        iconPosition: left
        style: secondary
        elementId: contact-call-us
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-8
          - pb-8
          - pl-8
          - pr-8
        justifyContent: center
      title:
        textAlign: left
      subtitle:
        textAlign: left
      text:
        textAlign: left
sections:
  - type: TextSection
    elementId: ''
    colors: colors-a
    variant: variant-a
    title: |
      Contact Bruce Blumberg
    subtitle: ''
    text: |2-

          <iframe
            id="JotFormIFrame-42726306387156"
            title="Contact Page Form"
            onload="window.parent.scrollTo(0,0)"
            allowtransparency="true"
            allowfullscreen="true"
            allow="geolocation; microphone; camera"
            src="https://form.jotform.com/42726306387156"
            frameborder="0"
            style="
            min-width: 100%;
            height:711px;
            border:none;"
            scrolling="no"
          >
          </iframe>
          <script type="text/javascript">
            var ifr = document.getElementById("JotFormIFrame-42726306387156");
            if (ifr) {
              var src = ifr.src;
              var iframeParams = [];
              if (window.location.href && window.location.href.indexOf("?") > -1) {
                iframeParams = iframeParams.concat(window.location.href.substr(window.location.href.indexOf("?") + 1).split('&'));
              }
              if (src && src.indexOf("?") > -1) {
                iframeParams = iframeParams.concat(src.substr(src.indexOf("?") + 1).split("&"));
                src = src.substr(0, src.indexOf("?"))
              }
              iframeParams.push("isIframeEmbed=1");
              ifr.src = src + "?" + iframeParams.join('&');
            }
            window.handleIFrameMessage = function(e) {
              if (typeof e.data === 'object') { return; }
              var args = e.data.split(":");
              if (args.length > 2) { iframe = document.getElementById("JotFormIFrame-" + args[(args.length - 1)]); } else { iframe = document.getElementById("JotFormIFrame"); }
              if (!iframe) { return; }
              switch (args[0]) {
                case "scrollIntoView":
                  iframe.scrollIntoView();
                  break;
                case "setHeight":
                  iframe.style.height = args[1] + "px";
                  break;
                case "collapseErrorPage":
                  if (iframe.clientHeight > window.innerHeight) {
                    iframe.style.height = window.innerHeight + "px";
                  }
                  break;
                case "reloadPage":
                  window.location.reload();
                  break;
                case "loadScript":
                  if( !window.isPermitted(e.origin, ['jotform.com', 'jotform.pro']) ) { break; }
                  var src = args[1];
                  if (args.length > 3) {
                      src = args[1] + ':' + args[2];
                  }
                  var script = document.createElement('script');
                  script.src = src;
                  script.type = 'text/javascript';
                  document.body.appendChild(script);
                  break;
                case "exitFullscreen":
                  if      (window.document.exitFullscreen)        window.document.exitFullscreen();
                  else if (window.document.mozCancelFullScreen)   window.document.mozCancelFullScreen();
                  else if (window.document.mozCancelFullscreen)   window.document.mozCancelFullScreen();
                  else if (window.document.webkitExitFullscreen)  window.document.webkitExitFullscreen();
                  else if (window.document.msExitFullscreen)      window.document.msExitFullscreen();
                  break;
              }
              var isJotForm = (e.origin.indexOf("jotform") > -1) ? true : false;
              if(isJotForm && "contentWindow" in iframe && "postMessage" in iframe.contentWindow) {
                var urls = {"docurl":encodeURIComponent(document.URL),"referrer":encodeURIComponent(document.referrer)};
                iframe.contentWindow.postMessage(JSON.stringify({"type":"urls","value":urls}), "*");
              }
            };
            window.isPermitted = function(originUrl, whitelisted_domains) {
              var url = document.createElement('a');
              url.href = originUrl;
              var hostname = url.hostname;
              var result = false;
              if( typeof hostname !== 'undefined' ) {
                whitelisted_domains.forEach(function(element) {
                    if( hostname.slice((-1 * element.length - 1)) === '.'.concat(element) ||  hostname === element ) {
                        result = true;
                    }
                });
                return result;
              }
            };
            if (window.addEventListener) {
              window.addEventListener("message", handleIFrameMessage, false);
            } else if (window.attachEvent) {
              window.attachEvent("onmessage", handleIFrameMessage);
            }
            </script>
    actions: []
    styles:
      self:
        height: auto
        width: narrow
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-28
          - pb-28
          - pl-4
          - pr-4
        justifyContent: center
      title:
        textAlign: left
      subtitle:
        textAlign: left
      text:
        textAlign: left
  - type: FeaturedItemsSection
    colors: colors-d
    elementId: ''
    title: |
      ### Connect with Bruce.
    backgroundSize: full
    subtitle: ''
    items:
      - type: FeaturedItem
        actions:
          - type: Button
            label: |
              Facebook
            altText: Bruce Blumberg Facebook
            url: 'https://www.facebook.com/BlumbergandAssociates/'
            showIcon: true
            icon: facebook
            iconPosition: left
            style: primary
            elementId: ''
          - type: Button
            label: |
              LinkedIn
            showIcon: true
            icon: linkedin
            url: 'https://www.linkedin.com/company/blumberg-&-associates/'
            style: primary
            iconPosition: left
            altText: Bruce Blumberg LinkedIn
          - type: Button
            label: |
              Twitter
            altText: Bruce Blumberg Twitter
            url: 'https://twitter.com/bruceblumberg/'
            showIcon: true
            icon: twitter
            iconPosition: left
            style: primary
            elementId: ''
          - type: Button
            label: |
              Instagram
            altText: Bruce Blumberg Instagram
            url: 'https://www.instagram.com/blumbergandassociates/'
            showIcon: true
            icon: instagram
            iconPosition: left
            style: primary
            elementId: ''
        styles:
          self:
            textAlign: center
    actions: []
    columns: 1
    enableHover: false
    styles:
      self:
        height: auto
        width: narrow
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-8
          - pb-8
          - pl-4
          - pr-4
        justifyContent: center
      title:
        textAlign: center
      subtitle:
        textAlign: left
      actions:
        justifyContent: flex-start
sidebar: []
footer: []
---
