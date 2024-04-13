import { Card } from "@/components/Card";
import { CardsContainer, Container, GeneralStatsContainer, Title } from "./style";
import { Highlight } from "@/components/Highlight";

import * as MyCard from '@/components/Card/style';
import { useTheme } from "styled-components/native";
import { Header } from "@/components/Header";


export default function Stats(){
    const {COLORS} = useTheme();
    return (
        <Container>
            <Header/>
            <Highlight title="90,86%" label="das refeições dentro da dieta"/>

            <GeneralStatsContainer>
                <Title>Estatísticas gerais</Title>

                <CardsContainer>
                    <Card title="22" label="melhor sequência de pratos"/>
                    <Card title="22" label="refeições registradas"/>
                    <CardsContainer isHorizontal>
                        <Card title="22" label="Refeições dentro da dieta" color={COLORS.GREEN_LIGHT}/>
                        <Card title="22" label="Refeições fora da dieta" color={COLORS.RED_LIGHT}/>
                    </CardsContainer>
                </CardsContainer>
            </GeneralStatsContainer>
        </Container>
    )
}