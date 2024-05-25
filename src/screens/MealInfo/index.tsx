import { Header } from "@/components/Header";
import { Container, Description, InfoContainer, Title } from "./style";
import { MealFormSheet } from "@/components/MealFormSheet";
import { Tag } from "@/components/Tag";
import { Button, ButtonIcon, ButtonLabel } from "@/components/Button";

export function MealInfo() {
    return (
        <Container>
            <Header subtitle="Refeição"/>
            <MealFormSheet>
                <InfoContainer>
                    <Title>X-tudo</Title>
                    <Description>Xis completo da lancheria do bairro</Description>
                </InfoContainer>

                <InfoContainer>
                    <Title>Data e hora</Title>
                    <Description>12/08/2022 às 20:00</Description>
                </InfoContainer>

                <Tag $variant="SUCCESS"/>

                <Button style={{marginTop: 'auto', marginBottom: 8}}>
                    <ButtonIcon name="edit"/>
                    <ButtonLabel>Editar refeição</ButtonLabel>
                </Button>

                <Button $variant="SECONDARY">
                    <ButtonIcon name="trash"/>
                    <ButtonLabel>Excluir refeição</ButtonLabel>
                </Button>
            </MealFormSheet>
        </Container>
    )
}