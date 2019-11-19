import { path } from 'rambda'
import { useTheme as useStyledTheme } from 'styled-components'

export default function useTheme(key) {
  const theme = useStyledTheme()
  if (path(key, theme)[theme.mode]) {
    return path(key, theme)[theme.mode]
  }

  return path(key, theme)
}
