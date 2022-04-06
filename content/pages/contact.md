---
layout: PageLayout
metaTitle: null
metaDescription: null
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
      Need a lawyer?
    subtitle: ''
    text: |
      Contact us today for a confidential case evaluation.
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
          - pt-8
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
sections:
  - elementId: ''
    colors: colors-e
    backgroundSize: full
    title: Schedule Your Consultation
    text: |
      Fill Out The Form To Get Started.
    form:
      type: FormBlock
      elementId: contact-form
      action: /.netlify/functions/submission_created
      destination: ''
      fields:
        - type: TextFormControl
          name: First
          label: First Name
          placeholder: First Name
          isRequired: true
          width: 1/2
        - name: last-name
          label: Last Name
          hideLabel: false
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
        - name: phone-number
          label: Phone Number
          hideLabel: false
          placeholder: XXX-XXX-XXXX
          isRequired: false
          width: 1/2
          type: TextFormControl
        - name: description
          label: Description
          hideLabel: false
          placeholder: Please describe
          isRequired: false
          width: full
          type: TextareaFormControl
        - type: CheckboxFormControl
          name: updates
          label: Sign me up to receive updates
          isRequired: 'false'
          width: full
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
          - pb-16
          - pl-8
          - pr-4
        alignItems: center
        justifyContent: center
        flexDirection: row
      title:
        textAlign: left
      text:
        textAlign: left
    type: ContactSection
sidebar: []
footer: []
---
