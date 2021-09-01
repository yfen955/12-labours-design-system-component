/*New spacing, only multiples of 4 */
export const spaces = [     
  4,
  8,
  12,
  16,
  20,
  24,
  28,
  32,
  36,
  40,
  44,
  48,
  56,
  64
]


export const areas = [
  {
    unit: 'y',
    suffix: ['top', 'bottom']
  },
  {
    unit: 'x',
    suffix: ['left', 'right']
  },
  {
    unit: 'b',
    suffix: ['bottom']
  },
  {
    unit: 't',
    suffix: ['top']
  },
  {
    unit: 'l',
    suffix: ['left']
  },
  {
    unit: 'r',
    suffix: ['right']
  }
]

export const generateTable = (unit, attribute) => {
    return spaces.map(space => {
    const rem = space / 16;

    return areas.map(area => {
      return {
        "class": `.${unit}${area.unit}-${space}`,
        "property": area.suffix.map(suffix => { return `${attribute}-${suffix}: ${rem}rem;` })
      }
    }).flat()
  }).flat()
}
