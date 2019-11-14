import { path } from 'rambda'
import { useTheme as useStyledTheme } from 'styled-components'

export default function useTheme(key) {
  const theme = useStyledTheme()
  return path(key, theme)[theme.mode]
}
