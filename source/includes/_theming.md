# Theming

## Default theme

> **Default Rotor Theme**

```typescript
const defaultTheme = {
  dimensions: {
    appbarHeight: '8.4em',
    appbarHeightClips: '8.4em',
    appHeaderHeight: '8.4em',
    appHeaderMobileHeight: '6.8em',
    mobileFixedFooterHeight: '8.4em',
    wizardLayout: {
      actionsHeight: '9.4em',
      optionsWidth: {
        md: '36em',
        lg: '42em',
        xl: '48em'
      }
    }
  },
  fontFamily: {
    regular: 'neue-haas-grotesk-text, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    display: 'neue-haas-grotesk-display, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    titling: 'titling-gothic-fb, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    titlingBold: 'titling-gothic-fb-wide, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    monospace: 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
  },
  palette: {
    grayscale: {
      0: '#ffffff',
      10: '#e7e7e7',
      20: '#d2d2d2',
      30: '#bbbbbb',
      40: '#a5a5a5',
      50: '#8e8e8e',
      60: '#787878',
      70: '#616161',
      80: '#4b4b4b',
      90: '#343434',
      100: '#1e1e1e',
      110: '#0f0f0f'
    },
    text: {
      default: '#fff',
      inverse: '#1e1e1e',
      white: '#fff',
      black: '#1e1e1e'
    },
    backgrounds: {
      default: '#1e1e1e',
      inverse: '#fff',
      white: '#fff',
      black: '#1e1e1e'
    },
    brand: {
      primary: '#00bad8',
      secondary: '#f15c99',
      hotpink: '#eb2782',
      facebook: '#3b5998',
      twitter: '#5ea9dd',
      google: '#4285f4',
      youtube: '#e5272b',
      vimeo: '#1eb6e9',
      spotify: '#1db954',
      soundcloud: '#f50'
    },
    utility: {
      info: '#0192d0',
      error: '#da1e28',
      success: '#37cd7d',
      warning: '#fef3cd'
    }
  },
  zIndex: {
    floatingActionButton: 120,
    notification: 120,
    clipDrawerBackdrop: 160,
    stickyHeader: 160,
    clipDrawer: 170,
    activeUploads: 190,
    footer: 500,
    sidebar: 550,
    popout: 600,
    header: 700,
    modalOverlay: 1050,
    modalContent: 1060,
    popoverContent: 1070,
    menuContent: 1080,
    tooltip: 1090,
    flashMessage: 2000
  },
}
```

The `theme` object provided to the [RotorVideosProvider](#react-rotorvideosprovider)  contains the styling configuration for
the Rotor Videos components. When it is not empty,
the resulted theme is a combination of provided and default theme. The merging of the two themes uses deep merge, so you
can override any part of the default theme.
