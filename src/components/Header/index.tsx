import { Container, Logo, Avatar } from'./style';
import logoImg from '@/assets/logo.png';
import avatarImg from '@/assets/avatar.png';

export function Header() {
    return (
       <Container>
            <Logo source={logoImg}/>

            <Avatar source={avatarImg}/>
        </Container>
    )
}