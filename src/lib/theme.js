import { css } from 'styled-components'

const breakpoints = ['450px', '769px', '992px', '1200px']

export default {
  theme: 'light',
  space: [0, 2.5, 5, 10, 15, 20, 30, 40, 50],
  breakpoints,
  colors: {
    grey_1: { light: '#333', dark: '#333' },
    grey_2: { light: '#555', dark: '#555' },
    grey_3: { light: '#888', dark: '#888' },
    grey_4: { light: '#e4e4e4', dark: '#4a4a4a' },
    grey_5: { light: '#f5f5f5', dark: '#f5f5f5' },
    primary: { light: '#2196f3', dark: '#2196f3' },
    default: { light: '#607d8b', dark: '#607d8b' },
    error: { light: '#db5757', dark: '#db5757' },
    warning: { light: '#f28610', dark: '#f28610' },
    success: { light: '#4caf50', dark: '#4caf50' },
    border: { light: '#e4e4e4', dark: '#4a4a4a' },
    text: { light: '#555', dark: '#e8e8e8' },
    text_inverse: { light: '#fff', dark: '#000' },
    text_light: { light: '#9d9d9d', dark: '#9d9d9d' },
    text_active: { light: '#2196f3', dark: '#2196f3' },
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
