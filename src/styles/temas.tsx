import { extendTheme } from 'native-base';

export const TEMAS = extendTheme({
    fontSizes: {
        xs: 12,
        sm: 14,
        md: 16,
        lg: 20,
        xl: 24
    },
    colors: {
        gray: '#272643',
        white: '#ffffff',
        blue: {
            100: '#54d2d2',
            200: '#072448'
        },
        red: '#ff0000',
        green: '#61ed6c'
    }
})
