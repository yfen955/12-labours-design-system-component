import typoStyles from './demo-styles.scss';

const demoBackground = {
  padding:'20px',
  borderRadius:'15px',
  backgroundColor: typoStyles.primary,
  note: 'Background added to show text. Background color may vary and is specified on a per component basis.'
}

const defaultFont ={
  font:typoStyles.font
}

const regularWeight={
  code:400, displayName:'Regular'
}

const semiBoldWeight={
  code:600, displayName:'Semi Bold'
}

const boldWeight={
  code:700,displayName:'Bold'
}

export const headings = [
  {
    ...defaultFont,
    name: 'Title',
    fontSize: '40px',
    lineHeight: '44px',
    fontWeight: boldWeight.code,
    weightDisplay: boldWeight.displayName,
    color: '#FFFFFF',
    showBackgroundColor: true,
    ...demoBackground
  },
  {
    ...defaultFont,
    name: 'Heading 1',
    fontSize: '30px',
    lineHeight: '36px',
    fontWeight: boldWeight.code,
    weightDisplay: boldWeight.displayName,
    color: typoStyles.primary
  },
  {
    ...defaultFont,
    name: 'Heading 2',
    fontSize: '18px',
    lineHeight: '24px',
    fontWeight: boldWeight.code,
    weightDisplay: boldWeight.displayName,
    color: typoStyles.text
  },
  {
    ...defaultFont,
    name: 'Heading 3',
    fontSize: '18px',
    lineHeight: '24px',
    fontWeight: semiBoldWeight.code,
    weightDisplay: semiBoldWeight.displayName,
    color: typoStyles.primary
  },
  {
    ...defaultFont,
    name: 'Heading 4',
    fontSize: '24px',
    lineHeight: '32px',
    fontWeight: boldWeight.code,
    weightDisplay: boldWeight.displayName,
    color: typoStyles.primary
  }
]

export const navigation = [
  {
    ...defaultFont,
    name: 'Nav 1',
    fontSize: '16px',
    lineHeight: '18px',
    fontWeight: regularWeight.code,
    weightDisplay: regularWeight.displayName,
    color: typoStyles.primary
  },
  {
    ...defaultFont,
    name: 'Nav 1 Selected',
    fontSize: '16px',
    lineHeight: '18px',
    fontWeight: boldWeight.code,
    weightDisplay: boldWeight.displayName,
    color: typoStyles.primary
  }
]

const defaultBody ={
  ...defaultFont,
  fontSize: '18px',
  lineHeight: '24px',
  color: typoStyles.text
}

export const body = [
  {
    name: 'Body 1',
    fontWeight: regularWeight.code,
    weightDisplay: regularWeight.displayName,
    itemClass:'body',
    ...defaultBody
  },
  {
    name: 'Body 2',
    fontWeight: semiBoldWeight.code,
    weightDisplay: semiBoldWeight.displayName,
    ...defaultBody
  }
]

export const fields = [
  {
    ...defaultFont,
    name: 'Field 1',
    fontSize: '16px',
    lineHeight: '20px',
    fontWeight: regularWeight.code,
    weightDisplay: regularWeight.displayName,
    color:  typoStyles.text
  },
  {
    ...defaultFont,
    name: 'Field Info',
    fontSize: '14px',
    lineHeight: '20px',
    fontStyle: 'italic',
    color:  typoStyles.text
  },
  {
    ...defaultFont,
    name: 'Placeholder',
    fontSize: '16px',
    lineHeight: '20px',
    fontStyle: 'italic',
    color: typoStyles.line1
  },
  {
    ...defaultFont,
    name: 'Placeholder 2',
    fontSize: '16px',
    lineHeight: '20px',
    fontStyle: 'italic',
    color: typoStyles.text
  }
]

const link1 = {
  ...defaultFont,
  name: 'Link 1',
  fontSize: '14px',
  lineHeight: '24px',
  fontWeight: regularWeight.code,
  weightDisplay: regularWeight.displayName,
  color: typoStyles.secondary,
  textDecoration: 'underline'
}

const link2 = {
  ...defaultFont,
  name: 'Link 2',
  fontSize: '16px',
  lineHeight: '18px',
  fontWeight: semiBoldWeight.code,
  weightDisplay: semiBoldWeight.displayName,
  color: typoStyles.primary
}

export const linksDefault = [
  { ...link1 },
  { ...link2 }

]

export const linksHover = [
  {
    ...link1,
    textDecoration: 'underline'
  },
  {
    ...link2,
    textDecoration: 'underline'
  }
]
