import { Feather } from '@expo/vector-icons';
import { TextProps, TouchableOpacityProps } from 'react-native';
import { Container, Icon, ButtonVariantsProps, Label } from "./style";
import { ReactNode, createContext, useContext } from 'react';

// type ButtonComponentProps = {
//     label: string,
//     type?: ButtonVariantsProps,
//     iconName?: keyof typeof Feather.glyphMap

// } & TouchableOpacityProps;

type ButtonComponentProps = TouchableOpacityProps & {
    $variant?: ButtonVariantsProps
}

type ButtonIconComponentProps = TouchableOpacityProps & {
    name: keyof typeof Feather.glyphMap
}

const ButtonContext = createContext({} as {
    $variant: ButtonVariantsProps
})

export function Button({$variant = "PRIMARY", children, ...rest}: ButtonComponentProps){
    return (
        <Container $variant={$variant} {...rest} activeOpacity={0.7}>
            <ButtonContext.Provider value={{$variant}}>
                {children}
            </ButtonContext.Provider>
        </Container>
    )
}

export function ButtonIcon({ name }: ButtonIconComponentProps){
    const { $variant } = useContext(ButtonContext)

    return (
        <Icon $variant={$variant} name={name}/>
    )
}

export function ButtonLabel({...rest}: TextProps){
    const { $variant } = useContext(ButtonContext)

    return (
        <Label $variant={$variant} {...rest}/>
    )
}

// export function Button({label, type = 'PRIMARY', iconName,  ...rest} : ButtonComponentProps){
//     return(
//         <Container type={type} activeOpacity={0.7} {...rest}>
//             {iconName && <ButtonIcon type={type} name={iconName}/>}

//             <Label type={type}>{label}</Label>
//         </Container>
//     )
// }