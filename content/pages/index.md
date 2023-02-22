---
title: Home
layout: PageLayout
hero:
  - type: HeroSection
    elementId: homepage-hero-1
    colors: colors-b
    title: |+
      <h1>
      <span>More than <strong>30 years</strong> of</span>
      <span>Criminal Defense &</span>
      <span>Family Law Experience</span>

      <span>In Phoenix, Arizona.</span>
      </h1>

    subtitle: >-
      If you have been charged with a criminal offense in the state of Arizona,
      you deserve legal representation better than that of the prosecution.
    actions:
      - type: Button
        label: Confidential Case Evaluation
        url: /contact-us/
        style: primary
        iconPosition: right
        icon: arrowRight
        showIcon: true
        elementId: home-hero-cta
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - mr-0
        padding:
          - pt-28
          - pb-36
          - pr-8
          - pl-8
        alignItems: center
        justifyContent: center
        flexDirection: row
        borderRadius: none
      title:
        textAlign: left
      subtitle:
        textAlign: left
      text:
        textAlign: left
      actions:
        justifyContent: flex-start
    backgroundSize: full
    backgroundImage:
      url: /images/blumberg-hero-mockup.jpg
      backgroundSize: cover
      backgroundPosition: center
      opacity: 100
sections:
  - colors: colors-a
    elementId: hero-features
    subtitle: ''
    items:
      - type: FeaturedItem
        title: |-
          Extensive Trial
          Experience.
        text: >
          Bruce Blumberg has handled nearly 100 jury trials, including winning
          "not guilty" verdicts in 6 first-degree murder trials. Bruce has also
          represented numerous clients charged with felonies and misdemeanors in
          bench trials.
        actions: []
        styles:
          self:
            textAlign: center
            alignItems: center
            justifyContent: flex-start
            padding:
              - pr-4
        featuredImage:
          url: /images/icon-jury-d2332d6b.svg
          altText: Blumberg jury trail icon
          elementId: ''
          type: ImageBlock
      - type: FeaturedItem
        title: |-
          Proven Track Record
          In The Courtroom.
        text: >
          We have won acquittals in more than 25 serious felony cases, more than
          many attorneys have even tried.  Having our experience on your side
          for your day in court makes all the difference.
        actions: []
        styles:
          self:
            textAlign: center
            alignItems: center
            justifyContent: flex-start
            borderWidth: 0
            borderColor: border-complementary
            borderStyle: solid
            padding:
              - pl-4
              - pr-4
        featuredImage:
          url: /images/icon-gavel-8a7d531e.svg
          altText: Blumberg courtroom track record icon
          elementId: ''
          type: ImageBlock
      - type: FeaturedItem
        title: Successfully Represented Thousands of Clients.
        text: >
          Work with one of the most trusted criminal attorneys in Phoenix, AZ.
          Contact our law office today to schedule a consultation with our
          knowledgeable legal team.
        actions: []
        styles:
          self:
            textAlign: center
            alignItems: center
            justifyContent: flex-start
            padding:
              - pl-4
        featuredImage:
          url: /images/icon-clients-88acd407.svg
          altText: Blumberg represented clients icon
          elementId: ''
          type: ImageBlock
    actions: []
    columns: 3
    enableHover: false
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
          - pt-0
          - pb-8
          - pl-8
          - pr-8
        justifyContent: center
      title:
        textAlign: left
      subtitle:
        textAlign: left
      actions:
        justifyContent: flex-start
    type: FeaturedItemsSection
  - colors: colors-b
    elementId: hero-button-grid
    title: |+
      <h3>
      <span>Phoenix’s Leading</span>
      <strong>Criminal Defense Attorney.</strong>
      </h3>

    subtitle: Choose A Law Practice Area To Learn How We Can Help You.
    items:
      - type: FeaturedItem
        actions:
          - type: Button
            label: |+
              #### Drug Crimes

            showIcon: true
            url: /phoenix-criminal-attorney/drug-crimes/
            style: secondary
            iconPosition: left
            icon: drugCrime
            altText: Drug Crimes Criminal Defense Attorney
        styles:
          self:
            textAlign: left
            alignItems: center
            justifyContent: center
      - type: FeaturedItem
        actions:
          - type: Button
            label: |+
              #### Sex Crimes

            showIcon: true
            icon: sexCrime
            url: /phoenix-criminal-attorney/sex-crimes/
            style: secondary
            iconPosition: left
            altText: Sex Crimes Criminal Defense Attorney
        styles:
          self:
            textAlign: left
            alignItems: center
            justifyContent: center
      - type: FeaturedItem
        actions:
          - type: Button
            label: |+
              #### Violent Crimes

            showIcon: true
            icon: violentCrime
            url: /phoenix-criminal-attorney/violent-crimes/
            style: secondary
            iconPosition: left
        styles:
          self:
            textAlign: left
            justifyContent: center
            alignItems: center
      - elementId: ''
        subtitle: ''
        actions:
          - label: |+
              #### Federal Crime

            altText: Federal Crimes Criminal Defense Attorney
            url: /phoenix-criminal-attorney/federal-crimes/
            showIcon: true
            icon: gavel
            iconPosition: left
            style: secondary
            elementId: ''
            type: Button
        styles:
          self:
            textAlign: left
            alignItems: center
            justifyContent: center
      - elementId: ''
        actions:
          - label: |+
              #### White Collar Crime

            altText: White Collar Crimes Criminal Defense Attorney
            url: /phoenix-criminal-attorney/white-collar-crimes/
            showIcon: true
            icon: whiteCollarCrime
            iconPosition: left
            style: secondary
            elementId: ''
            type: Button
        styles:
          self:
            textAlign: left
            alignItems: center
            justifyContent: center
      - elementId: ''
        subtitle: ''
        actions:
          - label: |+
              #### Child Custody

            altText: Child Custody & Parenting Time Family Law Attorney
            url: /phoenix-family-attorney/child-custody-parenting-time/
            showIcon: true
            icon: childCustody
            iconPosition: left
            style: secondary
            elementId: ''
            type: Button
        styles:
          self:
            textAlign: left
            alignItems: center
            justifyContent: center
    actions: []
    columns: 3
    enableHover: false
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
          - pt-16
          - pb-16
          - pl-8
          - pr-8
        justifyContent: center
      title:
        textAlign: center
      subtitle:
        textAlign: left
      actions:
        justifyContent: flex-start
    type: FeaturedItemsSection
    backgroundSize: full
    backgroundImage:
      url: /images/background-arizona-desert.png
      backgroundSize: cover
      backgroundPosition: center
      opacity: 100
  - elementId: ''
    colors: colors-a
    variant: variant-a
    title: >+
      ## An AZ lawyer with the skills and experience you need when facing the
      fight of your life.

    subtitle: ''
    text: >+
      <div class="flex flex-col lg:flex-row justify-between items-start gap-12
      text-base text-left font-sans">

      <div>At Blumberg & Associates, you’ll find the representation you need to
      get the best outcome available in your Arizona criminal law matter. We
      believe every person accused of a crime deserves fair treatment and an
      effective defense by a skilled and knowledgeable criminal defense lawyer.
      Phoenix criminal attorney Bruce Blumberg is a Board-Certified Criminal Law
      Specialist with over 30 years of experience practicing criminal law in
      Arizona. In that time, he has handled every type of felony and misdemeanor
      case, including over 100 jury trials and innumerable bench (non-jury)
      trials. He has won a tremendous number of jury trials and obtained
      acquittals in more than 25 serious felonies. Bruce’s experience and
      success in criminal defense are virtually unmatched in the state of
      Arizona.

      </div><div>If you’ve been arrested on a felony or misdemeanor charge in
      Phoenix, Blumberg & Associates offers practical advice and effective
      representation to help you make the best of a bad situation. Your best
      chance at a favorable outcome in your criminal case is to be represented
      by an attorney with extensive experience representing people in
      circumstances similar to yours. There are a lot of criminal defense
      lawyers in practice, and not all of them will be suitable for your needs.
      In more than 30 years of practice, Phoenix criminal defense attorney Bruce
      Blumberg has successfully represented thousands of clients faced with all
      types of criminal charges by prosecutors at the Arizona state or federal
      level. </div>

      </div>

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
          - pt-16
          - pb-16
          - pl-4
          - pr-4
        justifyContent: center
      title:
        textAlign: left
      subtitle:
        textAlign: left
      text:
        textAlign: left
    type: TextSection
    actions:
      - type: Button
        label: |
          Contact Blumberg & Associates
        altText: Contact Bruce Blumberg & Associates
        url: /contact-us/
        showIcon: true
        icon: arrowRight
        iconPosition: right
        style: secondary
        elementId: ''
  - colors: colors-d
    elementId: hero-awards
    title: Top Rated Criminal Defense Attorney.
    images:
      - type: ImageBlock
        url: /images/award-avvo-10.png
        altText: AVVO 10.0 Superb Top Attorney Phoenix Arizona Criminal Defense
        caption: AVVO 10.0 Superb Top Attorney Criminal Defense
      - type: ImageBlock
        url: /images/award-av-preeminent.png
        altText: AV Preeminent Lawyer Ratings Phoenix Arizona
        caption: AV Preeminent Lawyer Ratings
      - type: ImageBlock
        url: /images/certified-specialist-state-bar-arizona.png
        altText: State Bar Of Arizona Certified Specialist - Criminal Law
        caption: State Bar Of Arizona Certified Specialist - Criminal Law
      - type: ImageBlock
        url: /images/award-super-lawyers.png
        altText: Super Lawyers Rated Phoenix Arizona
        caption: Super Lawyers Rated
    spacing: 32
    columns: 4
    showCaption: false
    enableHover: true
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
          - pt-16
          - pb-16
          - pl-8
          - pr-8
        justifyContent: center
      title:
        textAlign: center
      subtitle:
        textAlign: center
    type: MediaGallerySection
    aspectRatio: auto
  - elementId: ''
    colors: colors-a
    variant: variant-a
    subtitle: >-
      As a Board-Certified criminal law specialist, Bruce Blumberg has the
      knowledge, skills and experience to competently handle any criminal law
      matter in Arizona, including:
    text: |
      <ul class="columns-4">
        <li><a href="https://azblumberglaw.com/phoenix-criminal-attorney/accounting-tax-fraud/" alt="Phoenix Accounting & Tax Fraud Lawyer">Accounting & Tax Fraud</a></li>

        <li><a href="https://azblumberglaw.com/phoenix-criminal-attorney/bank-fraud/" alt="Phoenix Bank Fraud Lawyer">Bank Fraud</a></li>

        <li><a href="https://azblumberglaw.com/phoenix-criminal-attorney/child-molestation/" alt="Phoenix Child Molestation Lawyer">Child Molestation</a></li>

        <li><a href="https://azblumberglaw.com/phoenix-criminal-attorney/child-pornography/" alt="Phoenix Child Pornography Lawyer">Child Pornography</a></li>

        <li><a href="https://azblumberglaw.com/phoenix-criminal-attorney/crimes-against-children/" alt="Phoenix Children Crimes Lawyer">Children Crimes</a></li>

        <li><a href="https://azblumberglaw.com/phoenix-criminal-attorney/computer-internet-fraud/" alt="Phoenix Computer & Internet Fraud Lawyer">Computer & Internet Fraud</a></li>

        <li><a href="https://azblumberglaw.com/phoenix-criminal-attorney/corporate-fraud/" alt="Phoenix Corporate Fraud Lawyer">Corporate Fraud</a></li>

        <li><a href="https://azblumberglaw.com/phoenix-criminal-attorney/dangerous-offenses/" alt="Phoenix Dangerous Offenses Lawyer">Dangerous Offenses</a></li>

        <li><a href="https://azblumberglaw.com/phoenix-criminal-attorney/date-spousal-rape/" alt="Phoenix Date & Spousal Rape Lawyer">Date & Spousal Rape</a></li>

        <li><a href="https://azblumberglaw.com/phoenix-criminal-attorney/domestic-violence/" alt="Phoenix Domestic Violence Lawyer">Domestic Violence</a></li>

        <li><a href="https://azblumberglaw.com/phoenix-criminal-attorney/drug-crimes/" alt="Phoenix Drug Crimes Lawyer">Drug Crimes</a></li>

        <li><a href="https://azblumberglaw.com/phoenix-criminal-attorney/drug-possession/" alt="Phoenix Drug Possession Lawyer">Drug Possession</a></li>

        <li><a href="https://azblumberglaw.com/phoenix-criminal-attorney/embezzlement/" alt="Phoenix Embezzlement Lawyer">Embezzlement</a></li>

        <li><a href="https://azblumberglaw.com/phoenix-criminal-attorney/federal-crimes/" alt="Phoenix Federal Crimes Lawyer">Federal Crimes</a></li>

        <li><a href="https://azblumberglaw.com/phoenix-criminal-attorney/federal-drug-crimes/" alt="Phoenix Federal Drug Crimes Lawyer">Federal Drug Crimes</a></li>

        <li><a href="https://azblumberglaw.com/phoenix-criminal-attorney/health-care-fraud/" alt="Phoenix Health Care Fraud Lawyer">Health Care Fraud</a></li>

        <li><a href="https://azblumberglaw.com/phoenix-criminal-attorney/homicide/" alt="Phoenix Homicide Lawyer">Homicide</a></li>

        <li><a href="https://azblumberglaw.com/phoenix-criminal-attorney/juvenile-offenses/" alt="Phoenix Juvenile Crimes Lawyer">Juvenile Crimes</a></li>

        <li><a href="https://azblumberglaw.com/phoenix-criminal-attorney/mail-wire-fraud/" alt="Phoenix Mail & Wire Fraud Lawyer">Mail & Wire Fraud</a></li>

        <li><a href="https://azblumberglaw.com/phoenix-criminal-attorney/mandatory-sentencing-scheme/" alt="Phoenix Mandatory Sentencing Lawyer">Mandatory Sentencing</a></li>

        <li><a href="https://azblumberglaw.com/phoenix-criminal-attorney/marijuana/" alt="Phoenix Marijuana Charges Lawyer">Marijuana Charges</a></li>

        <li><a href="https://azblumberglaw.com/phoenix-criminal-attorney/meth/" alt="Phoenix Meth Charges Lawyer">Meth Charges</a></li>

        <li><a href="https://azblumberglaw.com/phoenix-criminal-attorney/money-laundering/" alt="Phoenix Money Laundering Lawyer">Money Laundering</a></li>

        <li><a href="https://azblumberglaw.com/phoenix-criminal-attorney/mortgage-fraud/" alt="Phoenix Mortgage Fraud Lawyer">Mortgage Fraud</a></li>

        <li><a href="https://azblumberglaw.com/phoenix-criminal-attorney/parole-probation-violations/" alt="Phoenix Parole & Probation Violations Lawyer">Parole & Probation Violations</a></li>

        <li><a href="https://azblumberglaw.com/phoenix-criminal-attorney/prostitution/" alt="Phoenix Prostitution Lawyer">Prostitution</a></li>

        <li><a href="https://azblumberglaw.com/phoenix-criminal-attorney/search-seizure-issues/" alt="Phoenix Search & Seizure Lawyer">Search & Seizure</a></li>

        <li><a href="https://azblumberglaw.com/phoenix-criminal-attorney/sex-offender-registration/" alt="Phoenix Sex Offender Registration Lawyer">Sex Offender Registration</a></li>

        <li><a href="https://azblumberglaw.com/phoenix-criminal-attorney/sexual-assault/" alt="Phoenix Sexual Assault Lawyer">Sexual Assault</a></li>

        <li><a href="https://azblumberglaw.com/phoenix-criminal-attorney/sex-crimes/" alt="Phoenix Sex Crimes Lawyer">Sex Crimes</a></li>

        <li><a href="https://azblumberglaw.com/phoenix-criminal-attorney/state-drug-crimes/" alt="Phoenix Arizona State Drug Crimes Lawyer">State Drug Crimes</a></li>

        <li><a href="https://azblumberglaw.com/phoenix-criminal-attorney/violent-crimes/" alt="Phoenix Violent Crimes Lawyer">Violent Crimes</a></li>

        <li><a href="https://azblumberglaw.com/phoenix-criminal-attorney/white-collar-crimes/" alt="Phoenix White Collar Crime Lawyer">White Collar Crime</a></li>
      </ul>
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
          - pt-16
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
    type: TextSection
  - type: FeaturedCasesSection
    elementId: ''
    showDate: true
    showAuthor: false
    showExcerpt: true
    showReadMoreLink: false
    readMoreLinkLabel: See All Cases
    variant: variant-b
    actions:
      - type: Button
        label: |
          See More Case Results
        altText: Criminal Defense & Family Law Case Results
        url: /case-results
        showIcon: true
        icon: arrowRight
        iconPosition: right
        style: primary
        elementId: ''
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
          - pt-16
          - pb-16
          - pl-8
          - pr-8
        justifyContent: center
      title:
        textAlign: center
      subtitle:
        textAlign: center
      actions:
        justifyContent: center
    title: Cases of Interest
    subtitle: ''
    colors: colors-d
    posts:
      - >-
        content/pages/cases/client-accused-of-attempted-murder-in-the-second-degree-after-four-bullets-were-fired-into-the-alleged-victim-in-a-bar-parking-lot-both-involved-parties-were-intoxicated.md
      - >-
        content/pages/cases/sixteen-year-old-clients-charged-with-one-count-of-conspiracy-to-commit-murder.md
      - >-
        content/pages/cases/client-involved-in-a-love-triangle-client-accused-of-five-counts-of-aggravated-assault-dangerous-offenses.md
      - >-
        content/pages/cases/client-traveling-northbound-on-i-17-stopped-in-yavapai-county-with-136-pounds-of-marijuana-packed-into-the-truck.md
      - >-
        content/pages/cases/minor-accused-of-aggravated-assault-dangerous-offense-by-holding-a-gun-on-officers-conducting-a-search-warrant-at-mothers-apartment.md
  - elementId: ''
    colors: colors-b
    variant: variant-b
    title: |+
      ## Contact An **Experienced** Phoenix Criminal Attorney Today

    text: >
      At Blumberg & Associates, we apply our knowledge, skills, experience and
      dedication toward achieving a favorable result in your criminal case. We
      work hard to resolve your case pre-trial wherever possible, including
      getting the prosecutor or judge to dismiss or reduce the charges or secure
      probation, diversion or some other desirable outcome. If your case can’t
      be resolved pre-trial, you are in the hands of one of Arizona’s most
      experienced and successful criminal law trial litigators. Whether facing a
      judge or jury trial, Blumberg & Associates is devoted to obtaining a not
      guilty verdict, and helping you avoid mandatory sentences, the most
      serious consequences of a criminal conviction in Arizona.
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
          - pt-16
          - pb-16
          - pl-8
          - pr-8
        justifyContent: center
      title:
        textAlign: left
      subtitle:
        textAlign: left
      text:
        textAlign: left
    type: TextSection
    actions:
      - label: |
          Attorney Profile
        altText: Bruce Blumberg Attorney Profile
        url: /attorney-profile
        showIcon: true
        icon: arrowRight
        iconPosition: right
        style: primary
        elementId: ''
        type: Button
    backgroundImage:
      url: /images/background-court-blue.jpg
      backgroundSize: cover
      backgroundPosition: center
      opacity: 100
  - type: FeaturedTestimonialsSection
    elementId: ''
    showDate: true
    showAuthor: false
    showExcerpt: true
    showReadMoreLink: true
    readMoreLinkLabel: See All Cases
    variant: variant-b
    actions:
      - type: Button
        label: |
          Read More Client Testimonials
        altText: Bruce Blumberg Testimonials
        url: /testimonials/
        showIcon: true
        icon: arrowRight
        iconPosition: right
        style: primary
        elementId: ''
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
          - pt-16
          - pb-16
          - pl-8
          - pr-8
        justifyContent: center
      title:
        textAlign: left
      subtitle:
        textAlign: left
      actions:
        justifyContent: left
    title: |+
      <h2>
      <span>Read Testimonials From Our </span>
      <strong>Real Cases & Real Clients.</strong>
      </h2>

    colors: colors-b
    posts:
      - content/pages/testimonials/yaser-awad.md
      - content/pages/testimonials/brent-wayne.md
      - content/pages/testimonials/danielle-chodrick.md
    media:
      type: ImageBlock
      url: /images/blumberg-handcuffs.jpg
      altText: Handcuffs
      elementId: ''
  - type: FeaturedPostsSection
    elementId: ''
    showDate: false
    showAuthor: false
    showExcerpt: false
    showReadMoreLink: true
    readMoreLinkLabel: Read Post
    variant: variant-b
    actions: []
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
          - pt-24
          - pb-24
          - pl-4
          - pr-4
        justifyContent: center
      title:
        textAlign: left
      subtitle:
        textAlign: left
      actions:
        justifyContent: flex-start
    title: Law Blog
    subtitle: ''
    colors: colors-d
    posts:
      - >-
        content/pages/blog/what-happens-when-you-are-caught-with-dangerous-drugs-in-arizona.md
      - content/pages/blog/what-is-considered-a-deadly-weapon-in-arizona.md
      - >-
        content/pages/blog/skills-you-should-look-for-in-a-sex-crime-defense-attorney.md
  - type: CtaSection
    elementId: ''
    colors: colors-b
    backgroundSize: full
    title: Schedule Your Confidential Evaluation
    text: |
      Talk with an AZ attorney with the experience needed to win your case.
    actions:
      - type: Button
        label: |
          Contact Us Now
        showIcon: true
        icon: arrowRight
        url: /contact-us/
        style: primary
        altText: Contact Us
    backgroundImage: null
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
          - pt-16
          - pb-16
          - pl-4
          - pr-4
        alignItems: center
        justifyContent: center
        flexDirection: col
        borderStyle: solid
        borderWidth: 0
        borderColor: border-primary
        borderRadius: none
      title:
        textAlign: center
      text:
        textAlign: center
      actions:
        justifyContent: center
  - type: TextSection
    elementId: ''
    colors: colors-a
    variant: variant-a
    subtitle: ''
    text: >
      ### Domestic Violence


      As a criminal law specialist who also handles an array of high-conflict
      divorce, child custody and other family law matters, attorney Bruce
      Blumberg is familiar with the issues of spousal abuse, child abuse and
      other incidents of domestic violence. We are aware that allegations of
      domestic violence are often untrue, or highly exaggerated, whether due to
      innocent misunderstandings or a desire to gain leverage in a divorce or
      child custody dispute. The consequences of a domestic violence finding are
      swift and severe. Long before any criminal trial or conviction for abuse,
      you can be forced out of your home, forced to relinquish firearms, and
      kept from having any contact with your children, often while being
      required to pay support at the same time.


      Blumberg & Associates provides a strong, assertive defense against
      unfounded accusations of domestic violence. We’ll fight hard to protect
      your name, reputation and relationship with your children while helping
      you avoid the jail time and criminal record that can result from being
      found guilty of domestic violence.


      ### Juvenile Offenses


      The goal of the juvenile justice system is rehabilitation, not punishment.
      For minors arrested for juvenile or criminal offenses, the juvenile system
      is almost always preferable to being put through the criminal system. Yet
      under Arizona law, some juveniles must be tried as adults for certain
      offenses, and even where it isn’t required, prosecutors can file charges
      in adult court, or juvenile court judges can transfer cases to criminal
      court. In many situations a juvenile charged in adult court may be
      entitled to a transfer hearing to return to juvenile court. Of particular
      significance is the area of juvenile sex crimes. It is vital to retain a
      criminal defense attorney with experience in handling juvenile sex crimes.
      The treatment of juveniles in this area differs substantially from that of
      adults.  Bruce Blumberg is experienced across the spectrum of juvenile
      offenses. At Blumberg & Associates, we know the right steps to take to
      help your son or daughter get the best result after an arrest for a
      criminal offense or status offense in Phoenix or surrounding areas.


      ### Probation Violations


      Getting sentenced to a period of probation is an alternative to
      incarceration that, for many people, amounts to an excellent outcome in
      their criminal case. However, if during the probation period you commit
      any criminal offense or otherwise break the terms of your probation, the
      jail sentence which had been suspended or deferred can be imposed, without
      the benefit of a full trial. It is important to be aware of this
      possibility before you plead guilty to an offense in order to get
      probation. Talk to your attorney about whether a plea or trial is in your
      best interests.


      Besides staying out of trouble, other common terms of probation include
      reporting to your probation officer as required, allowing the probation
      officer into your home, keeping a job, staying within a specified
      geographical region, refraining from associating with certain individuals,
      and submitting to random alcohol and drug tests.


      If found in violation of probation, the court could send you to jail,
      lengthen your period of probation or add more restrictions to your current
      probation. You are entitled to due process before your probation can be
      modified or revoked, and you are entitled to be represented by an
      attorney. At Blumberg & Associates, we can submit evidence and testimony
      to challenge whether you actually violated the terms of your probation or
      show that your constitutional rights were violated. We may also be able to
      help modify or terminate overly restrictive probation that is keeping you
      from getting or maintaining a job or being with your kids.
    actions: []
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
          - pt-16
          - pb-16
          - pl-8
          - pr-8
        justifyContent: center
      title:
        textAlign: left
      subtitle:
        textAlign: left
      text:
        textAlign: left
addTitleSuffix: false
metaTags:
  - type: MetaTag
    property: 'og:type'
    content: website
metaTitle: 'Blumberg & Associates - Criminal Law Attorney | Phoenix, Arizona'
metaDescription: >-
  Serving clients for over 30 years in Criminal Defense & Family law cases. With
  nearly 100 jury trials, Bruce has won innumerable bench trials for clients
  charges with felonies and misdemeanors.
socialImage: /images/blumber-hero-mockup-65b26475.jpg
---
