---
layout: PageLayout
metaTitle: null
metaDescription: null
addTitleSuffix: true
socialImage: null
metaTags: []
title: Attorney Profile
sections:
  - type: TextSection
    colors: colors-d
    variant: variant-b
    title: >-
      Bruce Blumberg


      ![https://www.azblumberglaw.com/wp-content/uploads/2020/01/Bruce.png](https://www.azblumberglaw.com/wp-content/uploads/2020/01/Bruce.png)
    text: "Bruce Blumberg is the founder and principal attorney at Blumberg & Associates, a Phoenix law firm serving clients throughout Phoenix and statewide in the areas of criminal defense and family law. A leading criminal defense lawyer in the state, Bruce is one of only a handful of attorneys to be certified as a specialist in criminal law by the State Bar of Arizona.\n\nAs a criminal defense lawyer in Phoenix, Bruce handles the full range of Arizona criminal law matters, from juvenile offenses and probation violations to the most serious felonies. Bruce has successfully handled a number of murder and violent crime trials and has served as Appointed Counsel in many Maricopa County death penalty cases. A hardworking, dedicated and passionate attorney, Bruce excels in serious felony cases where the stakes are high. Having handled thousands of cases over more than 40 years in practice, he knows how the police investigate, how the prosecutors prepare, and how judges and juries decide the issues before them. Bruce is particularly well-known for his exceptional closing arguments, which are some of the last words a jury hears before going into deliberations to decide the fate of the accused.\n\nBruce is a 1976 graduate of Michigan State University, where he majored in Pre-Law. He next earned his law degree from the Thomas M. Cooley Law School at Western Michigan University and immediately began his legal career. Bruce practiced law in Michigan during the day while earning a Master of Laws in Taxation (LL.M.) from Wayne State University in Detroit at night.\n\nBruce was admitted to practice in Michigan and the U.S. District Court for the Eastern District of Michigan in 1979. He soon relocated to Arizona and was admitted to practice in all Arizona state courts and the U.S. District Court of Arizona in 1986. He has been an Arizona Board-Certified Specialist in Criminal Law since 1999.\n\nBruce is a member of the National Association of Criminal Defense Lawyers and the National Trial Lawyers Association. He can be reached by calling Blumberg & Associates in Phoenix at\_[602-277-6180](tel:+16022776180).\n"
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
          - pb-56
          - pl-4
          - pr-4
        justifyContent: center
      title:
        textAlign: left
      subtitle:
        textAlign: left
      text:
        textAlign: left
    elementId: bruce-blumberg
  - type: QuoteSection
    colors: colors-b
    quote: >-
      "This is someone else, not from our team, but she also loves fishing, so
      we thought we should highlight her."
    name: ''
    title: ''
    backgroundImage:
      type: BackgroundImage
      url: /images/bg.jpg
      backgroundSize: cover
      backgroundPosition: center
      opacity: 70
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
        padding:
          - pt-96
          - pb-10
          - pl-4
          - pr-4
        justifyContent: center
      quote:
        textAlign: left
      name:
        textAlign: left
      title:
        textAlign: left
  - type: FeaturedPeopleSection
    variant: variant-c
    colors: colors-c
    title: Our Team
    subtitle: >-
      We’re a group of proffesional fisherman & friends, who love exploring the
      seas and sharing our experiences with the world.
    people:
      - content/data/team/desmond-eagle.json
      - content/data/team/dianne-ameter.json
      - content/data/team/hugh-saturation.json
      - content/data/team/hilary-ouse.json
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
          - pt-36
          - pb-72
          - pl-4
          - pr-4
        justifyContent: center
      title:
        textAlign: left
      subtitle:
        fontWeight: 400
        fontStyle: normal
        textAlign: left
  - type: ContactSection
    colors: colors-d
    title: Join our club
    text: >-
      We will notify you every time a shipment is heading to your neighborhood,
      and you could immediatly let us know if you want in or not
    form:
      type: FormBlock
      elementId: sign-up-form
      action: /.netlify/functions/submission_created
      destination: ''
      fields:
        - type: TextFormControl
          name: firstName
          label: First Name
          hideLabel: true
          placeholder: First Name
          isRequired: false
          width: 1/2
        - type: TextFormControl
          name: lastName
          label: Last Name
          hideLabel: true
          placeholder: Last Name
          isRequired: false
          width: 1/2
        - type: EmailFormControl
          name: email
          label: Email
          hideLabel: true
          placeholder: Email
          isRequired: true
          width: full
        - type: TextFormControl
          name: address
          label: Address
          hideLabel: true
          placeholder: Address
          isRequired: true
          width: full
        - type: CheckboxFormControl
          name: updatesConsent
          label: Sign me up to recieve updates
          isRequired: false
          width: full
      submitLabel: Submit form
      styles:
        submitLabel:
          textAlign: center
    media: null
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
          - pt-24
          - pb-24
          - pl-4
          - pr-4
        alignItems: center
        justifyContent: center
        flexDirection: row
      title:
        textAlign: center
      text:
        textAlign: center
---
