import { Feather } from '@expo/vector-icons';
import { TouchableOpacityProps } from 'react-native';
import { Container, ButtonIcon, ButtonStyleTypeProps, Label } from "./style";

type ButtonComponentProps = {
    label: string,
    type?: ButtonStyleTypeProps,
    iconName?: keyof typeof Feather.glyphMap

} & TouchableOpacityProps;

export function Button({label, type = 'PRIMARY', iconName,  ...rest} : ButtonComponentProps){
    return(
        <Container type={type} activeOpacity={0.7} {...rest}>
            {iconName && <ButtonIcon type={type} name={iconName}/>}

            <Label type={type}>{label}</Label>
        </Container>
    )
}