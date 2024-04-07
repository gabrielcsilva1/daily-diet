import  theme  from '@/theme';
import 'styled-components/native';

declare module 'styled-components/native' {
    type ITheme = typeof theme;

    export interface DefaultTheme extends ITheme {}
}