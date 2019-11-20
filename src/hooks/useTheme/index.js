import { useTheme as useStyledTheme } from 'styled-components'
import { getValueFromTheme } from '../../lib/mixins'

export default function useTheme(key, options = {}) {
  const { ignoreTheme } = options
  const theme = useStyledTheme()
  return getValueFromTheme(key, { theme, ignoreTheme })
}
