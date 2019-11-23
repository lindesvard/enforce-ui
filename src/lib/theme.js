import { css } from 'styled-components'

const breakpoints = ['450px', '769px', '992px', '1200px']

export default {
  theme: 'light',
  space: [0, 2.5, 5, 10, 15, 20, 30, 40, 50],
  breakpoints,
  colors: {
    grey_1: { light: '#333', dark: '#ccc' },
    grey_2: { light: '#555', dark: '#9d9d9d' },
    grey_3: { light: '#888', dark: '#5d5d5d' },
    grey_4: { light: '#e4e4e4', dark: '#4a4a4a' },
    grey_5: { light: '#f5f5f5', dark: '#3a3a3a' },
    primary: { light: '#2196f3', dark: '#1f73b5' },
    default: { light: '#607d8b', dark: '#44606d' },
    error: { light: '#db5757', dark: '#af4c4c' },
    warning: { light: '#f28610', dark: '#c6741b' },
    success: { light: '#4caf50', dark: '#408e43' },
    border: { light: '#e4e4e4', dark: '#3e3e3e' },
    text: { light: '#555', dark: '#9d9d9d' },
    text_title: { light: '#111', dark: '#f1f1f1' },
    text_inverse: { light: '#fff', dark: '#000' },
    text_light: { light: '#9d9d9d', dark: '#7e7e7e' },
    text_active: { light: '#2196f3', dark: '#1f73b5' },
    icon: { light: '#000', dark: '#fff' },
    icon_inverse: { light: '#fff', dark: '#000' },
  },
  css: {
    font: css`
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
        'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
        'Helvetica Neue', sans-serif;
      font-size: 15px;
      line-height: 1.5;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    `,
    button: css`
      background: none;
      border: 0;
      outline: 0;
      font-size: 15px;
      padding: 0;
      margin: 0;
      display: inline-flex;
      cursor: pointer;
      align-items: center;
      justify-content: center;
    `,
    boxShadow: css`
      box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
    `,
    borderRadius: {
      small: css`
        border-radius: 3px;
      `,
      large: css`
        border-radius: 10px;
      `,
    },
  },
}
