# Theming

## Default theme

> **Default Rotor Theme**

```typescript
export default {
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
  components: {
    AudioPlayer: {
      theme: {
        primaryColor: '#fff',
        backgroundColor: 'transparent',
        barColor: '#fff',
        timeColor: 'rgba(255, 255, 255, 0.7)',
      },
    },
    Button: {
      theme: {
        borderRadius: '100em',
        borderRadiusAlt: '5px',
        fontFamily:
            'neue-haas-grotesk-display, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        fontSize: {
          xs: '1em',
          sm: '1.2em',
          md: '1.4em',
          lg: '1.6em',
          xl: '1.8em',
          xxl: '2em',
          xxxl: '2.2em',
        },
        fontWeight: '600',
        gap: '0.8em',
        height: '3em',
        heightTall: '4.4em',
        lineHeight: '1',
        outline: '0',
        outlineOffset: '0',
        paddingInline: '1.6em',
        paddingInlineWide: '3.2em',
        palette: {
          label: '#fff',
          labelInverse: '#1e1e1e',
          primary: '#00bad8',
          primaryHover: '#00A1BF',
          primaryActive: '#00A1BF',
          primaryFocus: '#00A1BF',
          primaryFocusOutline: '#00A1BF',
          primaryHoverFocus: '#00A1BF',
          secondary: '#f15c99',
          secondaryHover: '#D84380',
          secondaryActive: '#D84380',
          secondaryFocus: '#D84380',
          secondaryFocusOutline: '#D84380',
          secondaryHoverFocus: '#D84380',
          tertiary: '#fff',
          tertiaryBorder: '#1e1e1e',
          tertiaryLabel: '#1e1e1e',
          tertiaryLabelInverse: '#fff',
          tertiaryHover: '#1e1e1e',
          tertiaryActive: '#1e1e1e',
          tertiaryFocus: '#fff',
          tertiaryFocusOutline: '#1e1e1e',
          tertiaryHoverFocus: '#1e1e1e',
        },
        transition:
            'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      },
    },
    MenuItem: {
      theme: {
        color: 'rgba(255, 255, 255, 0.9)',
        activeBackgroundColor: '#000',
      },
    },
    RangeInput: {
      theme: {
        trackColor: '#28d3ea',
        trackBgColor: '#979797',
        trackHeight: '4px',
        thumbColor: '#bef2f9',
        thumbSize: '12px',
      },
    },
    Slider: {
      theme: {
        navigationSize: '3em',
        navigationColor: '#fff',
        paginationSize: '.8em',
        paginationColor: '#fff',
      },
    },
  },
}
```

The `theme` object provided to the [RotorVideosProvider](#react-rotorvideosprovider)  contains the styling configuration for
the Rotor Videos components. When it is not empty,
the resulted theme is a combination of provided and default theme. The merging of the two themes uses deep merge, so you
can override any part of the default theme.

## Theme Components

> **Theme Components Definition**

```typescript
type ThemeProps = { theme: AppTheme; };
type ComponentStyle<ComponentProps = Record<string, any>> = Interpolation<ThemeProps & ComponentProps>;
type ComponentThemeData<ThemeDataProps = Record<string, any>> = ThemeDataProps | ((theme: AppTheme) => ThemeDataProps);

type GenericThemeComponents = Record<
  string,
  {
    theme?: ComponentThemeData;
    defaultProps?: Record<string, any>;
    styleOverrides?: Record<
      string,
      ComponentStyle
    >;
  }
>;
```

> **Theme Components Examples**

```typescript

const theme = {
  ...,
  components: {
    StyleGroupTabs: {
      styleOverrides: {
        // Component with custom props
        StyleGroupTabsItem: ({ theme, active }) => {
          if (active) {
            return {
              color: theme.palette.text.inverse,
              '&:after': {
                backgroundColor: theme.palette.text.inverse,
              },
            };
          }
        },
      },
    },
    VideoCard: {
      // Theme as a function
      theme: (theme) => ({
        backgroundColor: theme.palette.backgrounds.inverse,
        textColor: theme.palette.text.inverse,
      }),
    },
    VideoCardDownloadButton: {
      // Override default props
      defaultProps: {
        color: 'primary',
      },
    },
    VideoPlayerControls: {
      // Override styles with theme
      styleOverrides: {
        VideoPlayerControlsRoot: ({ theme }) => ({
          backgroundColor: theme.palette.backgrounds.black,
        }),
      },
    },
    WizardStep: {
      styleOverrides: {
        // Override styles as an object
        WizardStepMeta: {
          opacity: 1,
        },
      },
    },
  }
}

```
> **Theme Components Properties**

```typescript
type ThemeComponents = {
  ActionButton: {
    defaultProps: {
      color: ButtonColor,
    },
  },
  AffectedVideos: {
    defaultProps: {
      showVideosList: boolean,
    },
  },
  AlbumMotionArtworkAsset: {
    styleOverrides: {
      AlbumMotionArtworkAssetInfo: ComponentStyle
    },
  },
  AlbumMotionArtworkButton: {
    defaultProps: {
      showIcon: boolean,
      color: ButtonColor,
    },
  },
  AlbumMotionArtworkUploaderIdle: {
    styleOverrides: {
      AlbumMotionArtworkUploaderInfo: ComponentStyle
    },
  },
  AudioPlayer: {
    theme: ComponentThemeData<{
      primaryColor: string,
      backgroundColor: string,
      barColor: string,
      timeColor: string,
    }>,
  },
  Button: {
    theme: ComponentThemeData<{
      borderRadius: string,
      borderRadiusAlt: string,
      fontFamily: string,
      fontSize: {
        xs: string,
        sm: string,
        md: string,
        lg: string,
        xl: string,
        xxl: string,
        xxxl: string,
      },
      fontWeight: string,
      gap: string,
      height: string,
      heightTall: string,
      lineHeight: string,
      outline: string,
      outlineOffset: string,
      paddingInline: string,
      paddingInlineWide: string,
      palette: {
        label: string,
        labelInverse: string,
        primary: string,
        primaryHover: string,
        primaryActive: string,
        primaryFocus: string,
        primaryFocusOutline: string,
        primaryHoverFocus: string,
        secondary: string,
        secondaryHover: string,
        secondaryActive: string,
        secondaryFocus: string,
        secondaryFocusOutline: string,
        secondaryHoverFocus: string,
        tertiary: string,
        tertiaryBorder: string,
        tertiaryLabel: string,
        tertiaryLabelInverse: string,
        tertiaryHover: string,
        tertiaryActive: string,
        tertiaryFocus: string,
        tertiaryFocusOutline: string,
        tertiaryHoverFocus: string,
      },
      transition: string,
    }>,
  },
  CanvasCartActionButton: {
    defaultProps: {
      color: ButtonColor,
    },
  },
  CanvasWizardFooter: {
    styleOverrides: {
      CanvasWizardFooterPreview: ComponentStyle
    },
  },
  CarouselViewAllLink: {
    styleOverrides: {
      CarouselViewAllLinkRoot: ComponentStyle
    },
  },
  ClipCustomizationEditButton: {
    defaultProps: {
      showIcon: boolean,
      color: ButtonColor,
    },
  },
  ClipsLibraryPage: {
    styleOverrides: {
      ClipsLibraryMobileSearchLink: ComponentStyle
    },
  },
  ClipsSearchBox: {
    styleOverrides: {
      ClipsSearchBoxInput: ComponentStyle
    },
  },
  ClipsSelectorCloseButton: {
    defaultProps: {
      useIcon: boolean,
    },
  },
  ClipsTabs: {
    styleOverrides: {
      ClipsTabsRoot: ComponentStyle
      ClipsTabsLink: ComponentStyle
    },
  },
  ClipsUploader: {
    styleOverrides: {
      ClipsMobileButton: ComponentStyle
    },
  },
  ClipsUploaderBrowseButton: {
    defaultProps: {
      showIcon: boolean,
      color: ButtonColor,
    },
  },
  CompactWizardContainer: {
    styleOverrides: {
      CompactWizardContainerRoot: ComponentStyle
    },
  },
  CreateVideoModal: {
    styleOverrides: {
      CreateVideoModalRoot: ComponentStyle
      CreateVideoOption: ComponentStyle
      CreateVideoOptionTitle: ComponentStyle
      CreateVideoOptionIconWrapper: ComponentStyle<{ creationFlow: CreationFlow }>,
    },
  },
  CropAdjustmentFrame: {
    defaultProps: {
      alwaysEditing: boolean,
    },
  },
  CropDragHandle: {
    styleOverrides: {
      CropDragHandleInner: ComponentStyle
    },
  },
  DialogModal: {
    defaultProps: {
      mode: 'light' | 'dark',
    },
  },
  FileUploadCard: {
    defaultProps: {
      showHelp: boolean,
    },
    styleOverrides: {
      FileUploadCardRoot: ComponentStyle
      FileUploadCardIcon: ComponentStyle
      FileUploadCardDropzone: ComponentStyle
    },
  },
  FileUploader: {
    defaultProps: {
      enabledLegalNotice: true,
    },
  },
  FileUploaderCard: {
    styleOverrides: {
      FileUploaderCardRoot: ComponentStyle,
    },
  },
  FileUploaderCardDragging: {
    defaultProps: {
      small: boolean,
    },
  },
  FileUploaderCopyright: {
    styleOverrides: {
      FileUploaderCopyrightCancelButton: ComponentStyle,
    },
  },
  FileUploaderDragOverlay: {
    styleOverrides: {
      FileUploaderDragOverlayRoot: ComponentStyle,
    },
  },
  Flash: {
    styleOverrides: {
      FlashContainer: ComponentStyle,
    },
  },
  FullscreenModal: {
    styleOverrides: {
      FullscreenModalRoot: ComponentStyle,
    },
  },
  Header: {
    styleOverrides: {
      HeaderRoot: ComponentStyle,
    },
  },
  MenuItem: {
    theme: ComponentThemeData<{
      color: string,
      activeBackgroundColor: string,
    }>
  },
  ModalContent: {
    styleOverrides: {
      ModalContentRoot: ComponentStyle,
    },
  },
  ModalHeader: {
    theme: ComponentThemeData<{
      backgroundColor: string,
      textColor: string,
      borderColor: string,
    }>,
  },
  MoodCard: {
    styleOverrides: {
      MoodCardRoot: ComponentStyle<{ state: 'tab-item' | 'list-item' }>,
    },
  },
  NewVideoCard: {
    styleOverrides: {
      NewVideoCardRoot: ComponentStyle,
    },
  },
  NextPageButton: {
    styleOverrides: {
      NextPageButtonContent: ComponentStyle,
    },
  },
  OrderCanvasContent: {
    theme: ComponentThemeData<{
      backgroundColor: string,
      textColor: string,
      borderColor: string,
    }>,
  },
  PreviewModal: {
    styleOverrides: {
      PreviewModalCloseButton: ComponentStyle,
    },
  },
  RangeInput: {
    theme: ComponentThemeData<{
      trackColor: string,
      trackBgColor: string,
      trackHeight: string,
      thumbColor: string,
      thumbSize: string,
    }>,
  },
  RotorLoadingIcon: {
    defaultProps: Partial<RotorLoadingIconStyleProps>,
  },
  SelectedClipCard: {
    styleOverrides: {
      SelectedClipCardRoot: ComponentStyle,
      SelectedClipCardOverlay: ComponentStyle,
      SelectedClipCardFooter: ComponentStyle
    },
  },
  SelectedClipsList: {
    styleOverrides: {
      SelectedClipsListRoot: ComponentStyle,
    },
  },

  Slider: {
    theme: ComponentThemeData<{
      navigationSize: string,
      navigationColor: string,
      paginationSize: string,
      paginationColor: string,
    }>,
  },
  StyleCard: {
    styleOverrides: {
      StyleCardTitle: ComponentStyle,
      StyleCardThumb: ComponentStyle,
    },
  },
  StyleGroupTabs: {
    styleOverrides: {
      StyleGroupTabsItem: ComponentStyle<{ active: boolean }>,
    },
  },
  ToggleClipSelectionButton: {
    theme: ComponentThemeData<{
      color: string,
    }>,
  },
  UploadsPage: {
    styleOverrides: {
      UploadsPageContent: ComponentStyle,
    },
  },
  VideoCard: {
    theme: ComponentThemeData<{
      backgroundColor: string,
      textColor: string,
    }>,
  },
  VideoCardActions: {
    defaultProps: {
      color: ButtonColor,
      variant: ButtonVariant,
    },
  },
  VideoCardCartActionButton: {
    defaultProps: {
      color: ButtonColor,
      variant: ButtonVariant,
    },
  },
  VideoCardDownloadButton: {
    defaultProps: {
      color: ButtonColor,
    },
  },
  VideoPlayerControls: {
    styleOverrides: {
      VideoPlayerControlsRoot: ComponentStyle,
    },
  },
  WizardAsset: {
    styleOverrides: {
      WizardAssetTitle: ComponentStyle,
    },
  },
  WizardStep: {
    styleOverrides: {
      WizardStepIcon: ComponentStyle<{ expanded: boolean }>,
      WizardStepTitle: ComponentStyle,
      WizardStepToggleTitle: ComponentStyle<{ expanded: boolean }>,
      WizardStepMeta: ComponentStyle,
    },
  },
}
```

The `components` property of the theme object is a record of components that can be styled. Each component can have the following properties:

- `theme`: This property is used to define the theme-specific styles for the component. If it's a function, it can use the current theme to compute the styles.
- `defaultProps`: This property is used to define and override the default props for the component.
- `styleOverrides`: This property is used to define and override the styles for the children styled components.
