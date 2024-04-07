import { SectionList, Text } from "react-native";
import { Container, DietStatus, DietStatusButton, DietStatusLabel, DietStatusTitle, Label, Separator, TitleSectionList } from "./style";

import { data } from "@/utils/data";

import { Header } from "@/components/Header";
import { Button } from "@/components/Button";
import { MealCard } from "@/components/MealCard";
import { ArrowIcon } from "@/components/ArrowIcon";

export default function Home() {
    return (
        <Container>
            <Header/>

            <DietStatus type="PRIMARY">

                <DietStatusTitle>90,86%</DietStatusTitle>
                <DietStatusLabel>das refeições dentro da dieta</DietStatusLabel>

                <DietStatusButton activeOpacity={0.7}>
                    <ArrowIcon name="arrow-up-right"/>
                </DietStatusButton>
            </DietStatus>

            <Label>Refeições</Label>
            <Button label="Nova refeição" iconName="plus"/>

            <SectionList 
                sections={data}
                keyExtractor={(item) => item.hour}
                style={{marginTop: 32}}

                renderItem={({item}) => <MealCard hour={item.hour} label={item.meal} style={item.style}/>}
                renderSectionHeader={({section}) => <TitleSectionList>{section.title}</TitleSectionList>}
                contentContainerStyle={{gap: 8, paddingBottom:80}}
                renderSectionFooter={() => <Separator/>}

                showsVerticalScrollIndicator={false}
            />
        </Container>
    )
}