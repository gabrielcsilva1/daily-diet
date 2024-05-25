import { ArrowIcon, ArrowIconVariantProps } from '../ArrowIcon';
import { BackButton, Container, Subtitle } from'./style';

type HeaderComponentProps = {
    subtitle ?: string,
    $variant?: ArrowIconVariantProps
}

export function Header({subtitle = '', $variant = 'DEFAULT'}: HeaderComponentProps) {
    return (
       <Container>
            <BackButton>
                <ArrowIcon name="arrow-left" $variant={$variant}/>
            </BackButton>

            {subtitle && <Subtitle>{subtitle}</Subtitle>}
        </Container>
    )
}