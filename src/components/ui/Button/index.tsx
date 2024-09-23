import { Feather } from '@expo/vector-icons';
import { TextProps, TouchableOpacityProps } from 'react-native';
import { Container, ButtonIcon, ButtonVariantsProps, ButtonLabel } from "./style";
import { createContext, useContext } from 'react';


type ButtonComponentProps = TouchableOpacityProps & {
    $variant?: ButtonVariantsProps
}

type ButtonIconComponentProps = TouchableOpacityProps & {
    name: keyof typeof Feather.glyphMap
}

const ButtonContext = createContext({} as {
    $variant: ButtonVariantsProps
})

function Root({$variant = "PRIMARY", children, ...rest}: ButtonComponentProps){
    return (
        <Container $variant={$variant} {...rest} activeOpacity={0.7}>
            <ButtonContext.Provider value={{$variant}}>
                {children}
            </ButtonContext.Provider>
        </Container>
    )
}

function Icon({ name }: ButtonIconComponentProps){
    const { $variant } = useContext(ButtonContext)

    return (
        <ButtonIcon $variant={$variant} name={name}/>
    )
}

function Label({...rest}: TextProps){
    const { $variant } = useContext(ButtonContext)

    return (
        <ButtonLabel $variant={$variant} {...rest}/>
    )
}

export const Button = {Root, Label, Icon}