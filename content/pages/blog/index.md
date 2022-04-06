---
layout: PostFeedLayout
numOfPostsPerPage: 10
postFeed:
  showDate: true
  showAuthor: true
  showExcerpt: true
  showReadMoreLink: true
  readMoreLinkLabel: Keep Reading
  variant: variant-c
  colors: colors-d
  styles:
    self:
      width: wide
      padding:
        - pt-8
        - pl-4
        - pr-4
        - pb-8
styles:
  title:
    textAlign: center
bottomSections:
  - type: TextSection
    colors: colors-d
    variant: variant-a
    text: |+
      ## [Follow Bruce On Instagram](https://www.stackbit.com/)

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
          - pb-20
          - pr-4
          - pl-4
        justifyContent: center
      text:
        textAlign: center
  - colors: colors-d
    elementId: ''
    images:
      - type: ImageBlock
        url: /images/gallery-1.jpg
        altText: Image one
        caption: Image one caption
      - type: ImageBlock
        url: /images/gallery-2.jpg
        altText: Image two
        caption: Image two caption
      - type: ImageBlock
        url: /images/gallery-3.jpg
        altText: Image three
        caption: Image three caption
      - type: ImageBlock
        url: /images/gallery-4.jpg
        altText: Image four
        caption: Image four caption
    spacing: 16
    columns: 4
    aspectRatio: '4:3'
    showCaption: false
    enableHover: false
    styles:
      self:
        height: auto
        width: full
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-12
          - pb-4
          - pl-4
          - pr-4
        justifyContent: center
      title:
        textAlign: center
      subtitle:
        textAlign: center
    type: MediaGallerySection
topSections:
  - type: TextSection
    elementId: ''
    colors: colors-b
    variant: variant-a
    backgroundImage:
      url: /images/background-court-blue.jpg
      backgroundSize: cover
      backgroundPosition: center
      opacity: 100
    title: Arizona Legal Insights Blog
    subtitle: The latest rulings and tips to keep yourself protected.
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
      text:
        textAlign: left
addTitleSuffix: true
---
