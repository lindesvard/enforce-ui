import { path } from 'rambda'
import tinycolor2 from 'tinycolor2'

const getTheme = (value, props) => {
  if (typeof value === 'object' && value.toString() === '[object Object]') {
    if (props.ignoreTheme) {
      return value.light
    }
    return value[props.theme.mode]
  }

  return value
}

export function theme(key) {
  return (props) => getTheme(path(key, props.theme), props)
}

const getColor = (_color, props) => {
  const [color, opacity] = _color.indexOf('|') !== -1 ? _color.split('|') : [_color]
  const themeColor = theme(['colors', color])(props) || color

  if (opacity) {
    return tinycolor2(themeColor)
      .setAlpha(opacity < 1 ? opacity : opacity / 100)
      .toRgbString()
  }

  return themeColor
}

const getIndex = (colors, props) => {
  const last = colors.length - 1
  let index = last

  for (const i in colors.filter((v) => typeof v !== 'string')) {
    const color = colors[i]
    const qwe = color.slice(0, color.length - 1)

    const matches = []
    for (const prop of qwe) {
      const shouldBeTrue = prop[0] !== '!'
      if (shouldBeTrue) {
        if (props[prop]) {
          matches.push(true)
        }
      } else if (!props[prop.slice(1)]) {
        matches.push(true)
      }
    }

    if (matches.length === qwe.length) {
      index = i
      break
    }
  }

  return index
}

const getLastColor = (arr) => (Array.isArray(arr) ? arr[arr.length - 1] : arr)

export const values = (colors) => (props) => {
  const index = getIndex(colors, props)
  const color = colors[index]
  const lastColor = getLastColor(color)

  if (lastColor.indexOf('px') !== -1) {
    return lastColor
  }

  return getColor(lastColor || 'default', props)
}
