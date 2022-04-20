---
layout: PageLayout
metaTitle: null
metaDescription: Please give us a call or contact us via email using our contact form.
addTitleSuffix: true
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
    title: |
      Contact us today for a confidential case evaluation.
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
  - elementId: ''
    colors: colors-a
    backgroundSize: full
    form:
      type: FormBlock
      elementId: contact-form
      action: /.netlify/functions/submission_created
      destination: hello@brandlew.co
      fields:
        - type: TextFormControl
          name: First
          label: First Name
          placeholder: First Name
          isRequired: true
          width: 1/2
          hideLabel: true
        - name: last-name
          label: Last Name
          hideLabel: true
          placeholder: Last Name
          isRequired: false
          width: 1/2
          type: TextFormControl
        - type: EmailFormControl
          name: email
          label: Email
          placeholder: Your email
          isRequired: 'true'
          width: 1/2
          hideLabel: true
        - name: phone-number
          label: Phone Number
          hideLabel: true
          placeholder: Phone Number
          isRequired: false
          width: 1/2
          type: TextFormControl
        - name: description
          label: Description
          hideLabel: true
          placeholder: Please describe your case.
          isRequired: false
          width: full
          type: TextareaFormControl
      submitLabel: Send Message
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
          - pb-8
          - pl-8
          - pr-8
        alignItems: center
        justifyContent: center
        flexDirection: row
      title:
        textAlign: left
      text:
        textAlign: left
    type: ContactSection
  - type: TextSection
    elementId: ''
    colors: colors-a
    variant: variant-a
    subtitle: ''
    text: >
      Please do not include any confidential or sensitive information in a
      contact form, text message, or voicemail. The contact form sends
      information by non-encrypted email, which is not secure. Submitting a
      contact form, sending a text message, making a phone call, or leaving a
      voicemail does not create an attorney-client relationship.
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
          - pt-0
          - pb-8
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
    colors: colors-e
    elementId: ''
    title: |
      Connect with Bruce.
    backgroundSize: full
    subtitle: ''
    items:
      - type: FeaturedItem
        actions:
          - type: Button
            label: |
              LinkedIn
            showIcon: true
            icon: linkedin
            url: /
            style: secondary
            iconPosition: left
          - type: Button
            label: |
              Facebook
            altText: ''
            url: /
            showIcon: true
            icon: facebook
            iconPosition: left
            style: secondary
            elementId: ''
          - type: Button
            label: |
              Instagram
            altText: ''
            url: /
            showIcon: true
            icon: instagram
            iconPosition: left
            style: secondary
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
