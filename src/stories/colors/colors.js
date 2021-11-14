import colorStyles from './colors-demo-styles.scss';

export const primary = [
  { 
    name:colorStyles.blueName,
    hex: colorStyles.blueHex,
    rgb: colorStyles.blueRgb,
    cmyk: colorStyles.blueCmyk,
    usage: 'Repeating major elements across the site like links and buttons',
    variable: colorStyles.blueVariable
  },
  /* from old system
  {
    name: 'Dark Blue',
    hex: '#24245b',
    rgb: '36-36-91',
    cmyk: '22, 22, 0, 64',
    usage: 'Repeating major elements across the site like heros, icons and header text',
    variable: '$darkBlue'
  },*/
  {
    name: colorStyles.greyName,
    hex: colorStyles.greyHex,
    rgb:colorStyles.greyRgb,
    cmyk: colorStyles.greyCmyk,
    usage: 'Typography and icons',
    variable: colorStyles.greyVariable
  }
]

export const secondary = [
  {
    name:colorStyles.redName,
    hex: colorStyles.redHex,
    rgb: colorStyles.redRgb,
    cmyk: colorStyles.redCmyk,
    usage: 'Decorative elements such as illustrations',
    variable: colorStyles.redVariable
  },
  {
    name:colorStyles.mediumBlueName,
    hex: colorStyles.mediumBlueHex,
    rgb: colorStyles.mediumBlueRgb,
    cmyk: colorStyles.mediumBlueCmyk,
    usage: 'Decorative elements such as illustrations',
    variable: colorStyles.mediumBlueVariable
  }
]

export const status = [
  {
    name:colorStyles.successName,
    hex: colorStyles.successHex,
    rgb: colorStyles.successRgb,
    cmyk: colorStyles.successCmyk,
    usage:'Confirmation messages',
    variable: colorStyles.successVariable
  },
  {
    name:colorStyles.warningName,
    hex: colorStyles.warningHex,
    rgb: colorStyles.warningRgb,
    cmyk:colorStyles.warningCmyk,
    usage: 'To warn users of potentially harmful situation',
    variable: colorStyles.warningVariable
  },
  {
    name:colorStyles.dangerName,
    hex: colorStyles.dangerHex,
    rgb: colorStyles.dangerRgb,
    cmyk: colorStyles.dangerCmyk,
    usage: 'Error messages and confirmation for deletion',
    variable: colorStyles.dangerVariable
  }
]

export const text = [
  {
    name:'',
    hex: colorStyles.greyHex,
    rgb:colorStyles.greyRgb,
    cmyk: colorStyles.greyCmyk,
    usage: 'Typography and icons',
    variable: colorStyles.greyVariable
  },
  { //From old system
    name: '',
    hex: '#606266',
    rgb: '96-98-102',
    cmyk: '2, 2, 0, 60',
    usage: 'For footer text',
    variable: '$mediumGrey'
  }
]

export const line = [
  {
    name: colorStyles.line1Name,
    hex: colorStyles.line1Hex,
    rgb: colorStyles.line1Rgb,
    cmyk: colorStyles.line1Cmyk,
    usage: 'For cards',
    variable: colorStyles.line1Variable
  },
  { //From old system
    name: '',
    hex: '#e4e7ed',
    rgb: '228-231-237',
    cmyk: '4, 2, 0, 7',
    usage: 'For table/dividers/breadcrumb backgrounds',
    variable: '$lineColor2'
  }
]

export const background = [
  {
    name: colorStyles.backgroundName,
    hex: colorStyles.backgroundHex,
    rgb: colorStyles.backgroundRgb,
    cmyk: colorStyles.backgroundCmyk,
    usage: 'For page backgrounds',
    variable: colorStyles.backgroundVariable
  }
]
