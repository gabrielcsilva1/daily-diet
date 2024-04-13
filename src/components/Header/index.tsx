import { ArrowIcon } from '../ArrowIcon';
import { BackButton, Container, Subtitle } from'./style';

type HeaderComponentProps = {
    subtitle ?: string
}

export function Header({subtitle = ''}: HeaderComponentProps) {
    return (
       <Container>
            <BackButton>
                <ArrowIcon name="arrow-left"/>
            </BackButton>

            {subtitle && <Subtitle>{subtitle}</Subtitle>}
        </Container>
    )
}