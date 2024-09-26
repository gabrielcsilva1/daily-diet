import { Feather } from '@expo/vector-icons';
import { TextProps, TouchableOpacityProps } from 'react-native';
import { Container, ButtonIcon, ButtonVariantsProps, ButtonLabel } from "./style";
import { createContext, useContext } from 'react';
import { Loading } from '../Loading';
import { useTheme } from 'styled-components/native';


type ButtonComponentProps = TouchableOpacityProps & {
    $variant?: ButtonVariantsProps,
    isLoading?: boolean
}

type ButtonIconComponentProps = TouchableOpacityProps & {
    name: keyof typeof Feather.glyphMap
}

const ButtonContext = createContext({} as {
    $variant: ButtonVariantsProps
})

function Root({$variant = "PRIMARY", children, isLoading, ...rest}: ButtonComponentProps){
    const {COLORS} = useTheme()
    return (
        <Container 
        $variant={$variant} 
        activeOpacity={0.7} 
        style={{opacity: rest.disabled ? 0.7 : 1}} 
        {...rest}
        disabled={isLoading || rest.disabled}
        >
            <ButtonContext.Provider value={{$variant}}>
                {
                isLoading ? 
                <Loading color={$variant === 'PRIMARY' ?  COLORS.WHITE : COLORS.GRAY_200}/> : 
                children
                }
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