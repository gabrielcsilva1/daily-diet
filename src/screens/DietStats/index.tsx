import { CardsContainer, Container, GeneralStatsContainer, Subtitle } from "./style";

import { Card } from "@/components/Card";
import { Header } from "@/components/Header";
import { Highlight } from "@/components/Highlight";
import { DietStatusVariantsProps } from "../Home/style";


export function DietStats(){
    const status: DietStatusVariantsProps = 2 > 1 ? 'SUCCESS' : 'DANGER'

    return (
        <Container>
            <Header $variant={status}/>
            <Highlight title="90,86%" label="das refeições dentro da dieta"/>

            <GeneralStatsContainer>
                <Subtitle>Estatísticas gerais</Subtitle>

                <CardsContainer>
                    <Card value="22" description="melhor sequência de pratos"/>
                    <Card value="22" description="refeições registradas"/>
                    <CardsContainer isHorizontal>
                        <Card value="22" description="Refeições dentro da dieta" $variant="SUCCESS"/>
                        <Card value="22" description="Refeições fora da dieta" $variant="DANGER"/>
                    </CardsContainer>
                </CardsContainer>
            </GeneralStatsContainer>
        </Container>
    )
}