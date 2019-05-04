/*

Tailwind - The Utility-First CSS Framework

A project by Adam Wathan (@adamwathan), Jonathan Reinink (@reinink),
David Hemphill (@davidhemphill) and Steve Schoger (@steveschoger).

|-------------------------------------------------------------------------------
| The default config
|-------------------------------------------------------------------------------
|
| This variable contains the default Tailwind config. You don't have
| to use it, but it can sometimes be helpful to have available. For
| example, you may choose to merge your custom configuration
| values with some of the Tailwind defaults.
|
*/

let defaultConfig = require('tailwindcss/defaultConfig')();

/*
|-------------------------------------------------------------------------------
| Colors                                    https://tailwindcss.com/docs/colors
|-------------------------------------------------------------------------------
|
*/

let colors = {
  transparent: 'transparent',

  black: '#2D2D2D',
  'grey-darkest': '#3d4852',
  'grey-darker': '#606f7b',
  'grey-dark': '#8795a1',
  grey: '#b8c2cc',
  'grey-light': '#dae1e7',
  'grey-lighter': '#f1f5f8',
  'grey-lightest': '#f8fafc',
  white: '#ffffff',

  'teal-100': '#E8FFFE',
  'teal-200': '#A0F0ED',
  'teal-300': '#64D5CA',
  teal: '#4DC0B5',
  'teal-600': '#38A89D',
  'teal-700': '#20504F',
  'teal-800': '#0D3331',

  'blue-800': '#12283a',
  'blue-700': '#1c3d5a',
  'blue-600': '#2779bd',
  blue: '#3490dc',
  'blue-400': '#6cb2eb',
  'blue-300': '#bcdefa',
  'blue-100': '#eff8ff'
};

module.exports = {
  /*
  |-----------------------------------------------------------------------------
  | Colors                                  https://tailwindcss.com/docs/colors
  |-----------------------------------------------------------------------------
  |
  | The color palette defined above is also assigned to the "colors" key of
  | your Tailwind config. This makes it easy to access them in your CSS
  | using Tailwind's config helper. For example:
  |
  | .error { color: config('colors.red') }
  |
  */

  colors: colors,

  /*
  |-----------------------------------------------------------------------------
  | Screens                      https://tailwindcss.com/docs/responsive-design
  |-----------------------------------------------------------------------------
  |
  | By default Tailwind takes a "mobile first" approach, where each screen size
  | represents a minimum viewport width.
  |
  | Tailwind also allows for more complex screen definitions, which can be
  | useful in certain situations. Be sure to see the full responsive
  | documentation for a complete list of options.
  |
  | Class name: .{screen}:{utility}
  |
  */

  screens: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  },

  /*
  |-----------------------------------------------------------------------------
  | Fonts                                    https://tailwindcss.com/docs/fonts
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your project's font stack, or font families.
  | Keep in mind that Tailwind doesn't actually load any fonts for you.
  | If you're using custom fonts you'll need to import them prior to
  | defining them here.
  |
  | By default we provide a native font stack that works remarkably well on
  | any device or OS you're using, since it just uses the default fonts
  | provided by the platform.
  |
  | Class name: .font-{name}
  | CSS property: font-family
  |
  */

  fonts: {
    sans: [
      'Lato',
      'system-ui',
      'BlinkMacSystemFont',
      '-apple-system',
      'Segoe UI',
      'Roboto',
      'Fira Sans',
      'Droid Sans',
      'Helvetica Neue',
      'sans-serif'
    ],
    serif: [
      'Playfair Display',
      'Lucida Bright',
      'Lucidabright',
      'Lucida Serif',
      'Lucida',
      'DejaVu Serif',
      'Bitstream Vera Serif',
      'Liberation Serif',
      'Georgia',
      'serif'
    ]
  },

  /*
  |-----------------------------------------------------------------------------
  | Text sizes                         https://tailwindcss.com/docs/text-sizing
  |-----------------------------------------------------------------------------
  | Class name: .text-{size}
  | CSS property: font-size
  |
  */

  textSizes: {
    sm: '.875rem', // 14px
    base: '1rem', // 16px
    lg: '1.125rem', // 18px
    xl: '1.25rem', // 20px
    '2xl': '1.5rem', // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem' // 48px
  },

  /*
  |-----------------------------------------------------------------------------
  | Font weights                       https://tailwindcss.com/docs/font-weight
  |-----------------------------------------------------------------------------
  | Class name: .font-{weight}
  | CSS property: font-weight
  |
  */

  fontWeights: {
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900
  },

  /*
  |-----------------------------------------------------------------------------
  | Leading (line height)              https://tailwindcss.com/docs/line-height
  |-----------------------------------------------------------------------------
  | Class name: .leading-{size}
  | CSS property: line-height
  |
  */

  leading: {
    none: 1,
    tight: 1.25,
    normal: 1.5,
    loose: 2
  },

  /*
  |-----------------------------------------------------------------------------
  | Tracking (letter spacing)       https://tailwindcss.com/docs/letter-spacing
  |-----------------------------------------------------------------------------
  | Class name: .tracking-{size}
  | CSS property: letter-spacing
  |
  */

  tracking: {
    tight: '-0.05em',
    normal: '0',
    wide: '0.05em'
  },

  /*
  |-----------------------------------------------------------------------------
  | Text colors                         https://tailwindcss.com/docs/text-color
  |-----------------------------------------------------------------------------
  | Class name: .text-{color}
  | CSS property: color
  |
  */

  textColors: {
    black: '#2D2D2D',
    'grey-darkest': '#3d4852',
    'grey-darker': '#606f7b',
    'grey-dark': '#8795a1',
    grey: '#b8c2cc',
    'grey-light': '#dae1e7',
    'grey-lighter': '#f1f5f8',
    'grey-lightest': '#f8fafc',
    white: '#ffffff'
  },

  /*
  |-----------------------------------------------------------------------------
  | Background colors             https://tailwindcss.com/docs/background-color
  |-----------------------------------------------------------------------------
  | Class name: .bg-{color}
  | CSS property: background-color
  |
  */

  backgroundColors: colors,

  /*
  |-----------------------------------------------------------------------------
  | Background sizes               https://tailwindcss.com/docs/background-size
  |-----------------------------------------------------------------------------
  | Class name: .bg-{size}
  | CSS property: background-size
  |
  */

  backgroundSize: {
    auto: 'auto',
    cover: 'cover',
    contain: 'contain'
  },

  /*
  |-----------------------------------------------------------------------------
  | Border widths                     https://tailwindcss.com/docs/border-width
  |-----------------------------------------------------------------------------
  | Class name: .border{-side?}{-width?}
  | CSS property: border-width
  |
  */

  borderWidths: {
    default: '1px',
    '0': '0',
    '2': '2px',
    '4': '4px',
    '8': '8px'
  },

  /*
  |-----------------------------------------------------------------------------
  | Border colors                     https://tailwindcss.com/docs/border-color
  |-----------------------------------------------------------------------------
  | Class name: .border-{color}
  | CSS property: border-color
  |
  */

  borderColors: global.Object.assign({ default: colors['grey-light'] }, colors),

  /*
  |-----------------------------------------------------------------------------
  | Border radius                    https://tailwindcss.com/docs/border-radius
  |-----------------------------------------------------------------------------
  | Class name: .rounded{-side?}{-size?}
  | CSS property: border-radius
  |
  */

  borderRadius: {
    none: '0',
    sm: '.125rem',
    default: '.25rem',
    lg: '.5rem',
    full: '9999px'
  },

  /*
  |-----------------------------------------------------------------------------
  | Width                                    https://tailwindcss.com/docs/width
  |-----------------------------------------------------------------------------
  | Class name: .w-{size}
  | CSS property: width
  |
  */

  width: {
    auto: 'auto',
    px: '1px',
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '0.75rem',
    '4': '1rem',
    '5': '1.25rem',
    '6': '1.5rem',
    '8': '2rem',
    '10': '2.5rem',
    '12': '3rem',
    '16': '4rem',
    '24': '6rem',
    '32': '8rem',
    '48': '12rem',
    '64': '16rem',
    '1/2': '50%',
    '1/3': '33.33333%',
    '2/3': '66.66667%',
    '1/4': '25%',
    '3/4': '75%',
    '1/5': '20%',
    '2/5': '40%',
    '3/5': '60%',
    '4/5': '80%',
    '1/6': '16.66667%',
    '5/6': '83.33333%',
    full: '100%',
    screen: '100vw'
  },

  /*
  |-----------------------------------------------------------------------------
  | Height                                  https://tailwindcss.com/docs/height
  |-----------------------------------------------------------------------------
  | Class name: .h-{size}
  | CSS property: height
  |
  */

  height: {
    auto: 'auto',
    px: '1px',
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '0.75rem',
    '4': '1rem',
    '5': '1.25rem',
    '6': '1.5rem',
    '8': '2rem',
    '10': '2.5rem',
    '12': '3rem',
    '16': '4rem',
    '24': '6rem',
    '32': '8rem',
    '48': '12rem',
    '64': '16rem',
    full: '100%',
    screen: '100vh'
  },

  /*
  |-----------------------------------------------------------------------------
  | Minimum width                        https://tailwindcss.com/docs/min-width
  |-----------------------------------------------------------------------------
  | Class name: .min-w-{size}
  | CSS property: min-width
  |
  */

  minWidth: {
    '0': '0',
    '768': '768',
    '992': '992',
    full: '100%'
  },

  /*
  |-----------------------------------------------------------------------------
  | Minimum height                      https://tailwindcss.com/docs/min-height
  |-----------------------------------------------------------------------------
  | Class name: .min-h-{size}
  | CSS property: min-height
  |
  */

  minHeight: {
    '0': '0',
    '552': '552',
    full: '100%',
    screen: '100vh'
  },

  /*
  |-----------------------------------------------------------------------------
  | Maximum width                        https://tailwindcss.com/docs/max-width
  |-----------------------------------------------------------------------------
  | Class name: .max-w-{size}
  | CSS property: max-width
  |
  */

  maxWidth: {
    xs: '20rem',
    sm: '30rem',
    md: '40rem',
    lg: '50rem',
    xl: '60rem',
    '2xl': '70rem',
    '3xl': '80rem',
    '4xl': '90rem',
    '5xl': '100rem',
    full: '100%'
  },

  /*
  |-----------------------------------------------------------------------------
  | Maximum height                      https://tailwindcss.com/docs/max-height
  |-----------------------------------------------------------------------------
  | Class name: .max-h-{size}
  | CSS property: max-height
  |
  */

  maxHeight: {
    full: '100%',
    screen: '100vh'
  },

  /*
  |-----------------------------------------------------------------------------
  | Padding                                https://tailwindcss.com/docs/padding
  |-----------------------------------------------------------------------------
  | Class name: .p{side?}-{size}
  | CSS property: padding
  |
  */

  padding: {
    px: '1px',
    '0': '0',
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '0.75rem',
    '4': '1rem',
    '5': '1.25rem',
    '6': '1.5rem',
    '8': '2rem',
    '10': '2.5rem',
    '12': '3rem',
    '16': '4rem',
    '20': '5rem',
    '24': '6rem',
    '32': '8rem'
  },

  /*
  |-----------------------------------------------------------------------------
  | Margin                                  https://tailwindcss.com/docs/margin
  |-----------------------------------------------------------------------------
  | Class name: .m{side?}-{size}
  | CSS property: margin
  |
  */

  margin: {
    auto: 'auto',
    px: '1px',
    '0': '0',
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '0.75rem',
    '4': '1rem',
    '5': '1.25rem',
    '6': '1.5rem',
    '8': '2rem',
    '10': '2.5rem',
    '12': '3rem',
    '16': '4rem',
    '20': '5rem',
    '24': '6rem',
    '32': '8rem'
  },

  /*
  |-----------------------------------------------------------------------------
  | Negative margin                https://tailwindcss.com/docs/negative-margin
  |-----------------------------------------------------------------------------
  | Class name: .-m{side?}-{size}
  | CSS property: margin
  |
  */

  negativeMargin: {
    px: '1px',
    '0': '0',
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '0.75rem',
    '4': '1rem',
    '5': '1.25rem',
    '6': '1.5rem',
    '8': '2rem',
    '10': '2.5rem',
    '12': '3rem',
    '16': '4rem',
    '20': '5rem',
    '24': '6rem',
    '32': '8rem'
  },

  /*
  |-----------------------------------------------------------------------------
  | Shadows                                https://tailwindcss.com/docs/shadows
  |-----------------------------------------------------------------------------
  | If a `default` shadow is provided, it will be made available as the non-
  | suffixed `.shadow` utility.
  |
  | Class name: .shadow-{size?}
  | CSS property: box-shadow
  |
  */

  shadows: {
    default: '0 2px 4px 0 rgba(0,0,0,0.10)',
    md: '0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08)',
    lg: '0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)',
    inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
    outline: '0 0 0 3px rgba(52,144,220,0.5)',
    none: 'none'
  },

  /*
  |-----------------------------------------------------------------------------
  | Z-index                                https://tailwindcss.com/docs/z-index
  |-----------------------------------------------------------------------------
  | Class name: .z-{index}
  | CSS property: z-index
  |
  */

  zIndex: {
    auto: 'auto',
    '0': 0,
    '10': 10,
    '20': 20,
    '30': 30,
    '40': 40,
    '50': 50
  },

  /*
  |-----------------------------------------------------------------------------
  | Opacity                                https://tailwindcss.com/docs/opacity
  |-----------------------------------------------------------------------------
  | Class name: .opacity-{name}
  | CSS property: opacity
  |
  */

  opacity: {
    '0': '0',
    '25': '.25',
    '50': '.5',
    '75': '.75',
    '100': '1'
  },

  /*
  |-----------------------------------------------------------------------------
  | SVG fill                                   https://tailwindcss.com/docs/svg
  |-----------------------------------------------------------------------------
  | Class name: .fill-{name}
  | CSS property: fill
  |
  */

  svgFill: {
    current: 'currentColor'
  },

  /*
  |-----------------------------------------------------------------------------
  | SVG stroke                                 https://tailwindcss.com/docs/svg
  |-----------------------------------------------------------------------------
  | Class name: .stroke-{name}
  | CSS property: stroke
  |
  */

  svgStroke: {
    current: 'currentColor'
  },

  /*
  |-----------------------------------------------------------------------------
  | Modules                  https://tailwindcss.com/docs/configuration#modules
  |-----------------------------------------------------------------------------
  |
  | Here is where you control which modules are generated and what variants are
  | generated for each of those modules.
  |
  | Currently supported variants:
  |   - responsive
  |   - hover
  |   - focus
  |   - focus-within
  |   - active
  |   - group-hover
  |
  | To disable a module completely, use `false` instead of an array.
  |
  */

  modules: {
    appearance: ['responsive'],
    backgroundAttachment: ['responsive'],
    backgroundColors: ['responsive', 'hover', 'focus'],
    backgroundPosition: ['responsive'],
    backgroundRepeat: ['responsive'],
    backgroundSize: ['responsive'],
    borderCollapse: [],
    borderColors: ['responsive', 'hover', 'focus'],
    borderRadius: ['responsive'],
    borderStyle: ['responsive'],
    borderWidths: ['responsive'],
    cursor: ['responsive'],
    display: ['responsive'],
    flexbox: ['responsive'],
    float: false,
    fonts: ['responsive'],
    fontWeights: ['responsive', 'hover', 'focus'],
    height: ['responsive'],
    leading: ['responsive'],
    lists: ['responsive'],
    margin: ['responsive'],
    maxHeight: ['responsive'],
    maxWidth: ['responsive'],
    minHeight: ['responsive'],
    minWidth: ['responsive'],
    negativeMargin: ['responsive'],
    objectFit: false,
    objectPosition: false,
    opacity: ['responsive'],
    outline: ['focus'],
    overflow: ['responsive'],
    padding: ['responsive'],
    pointerEvents: ['responsive'],
    position: ['responsive'],
    resize: false,
    shadows: ['responsive', 'hover', 'focus'],
    svgFill: [],
    svgStroke: [],
    tableLayout: ['responsive'],
    textAlign: ['responsive'],
    textColors: ['responsive', 'hover', 'focus'],
    textSizes: ['responsive'],
    textStyle: ['responsive', 'hover', 'focus'],
    tracking: ['responsive'],
    userSelect: ['responsive'],
    verticalAlign: ['responsive'],
    visibility: ['responsive'],
    whitespace: ['responsive'],
    width: ['responsive'],
    zIndex: ['responsive']
  },

  /*
  |-----------------------------------------------------------------------------
  | Plugins                                https://tailwindcss.com/docs/plugins
  |-----------------------------------------------------------------------------
  |
  | Here is where you can register any plugins you'd like to use in your
  | project. Tailwind's built-in `container` plugin is enabled by default to
  | give you a Bootstrap-style responsive container component out of the box.
  |
  | Be sure to view the complete plugin documentation to learn more about how
  | the plugin system works.
  |
  */

  plugins: [
    require('tailwindcss/plugins/container')({
      // center: true,
      // padding: '1rem',
    })
  ],

  /*
  |-----------------------------------------------------------------------------
  | Advanced Options         https://tailwindcss.com/docs/configuration#options
  |-----------------------------------------------------------------------------
  |
  | Here is where you can tweak advanced configuration options. We recommend
  | leaving these options alone unless you absolutely need to change them.
  |
  */

  options: {
    prefix: '',
    important: false,
    separator: ':'
  }
};
