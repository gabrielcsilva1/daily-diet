import { SectionList } from "react-native";
import { useTheme } from "styled-components/native";

import { Avatar, Container, DietStatus, DietStatusButton, HeaderContent, Label, Logo, Separator, TitleSectionList } from "./style";

import { data } from "@/utils/data";

import { Button } from "@/components/Button";
import { MealCard } from "@/components/MealCard";
import { Highlight } from "@/components/Highlight";
import { ArrowIcon } from "@/components/ArrowIcon";

import logoImg from '@/assets/logo.png';
import avatarImg from '@/assets/avatar.png';

export default function Home() {
    const {COLORS} = useTheme()
    return (
        <Container>
            <HeaderContent>
                <Logo source={logoImg}/>

                <Avatar source={avatarImg}/>
            </HeaderContent>

            <DietStatus type="PRIMARY">

                <Highlight title="90,86%" label="das refeições dentro da dieta"/>

                <DietStatusButton activeOpacity={0.7}>
                    <ArrowIcon name="arrow-up-right" color={COLORS.GREEN_DARK}/>
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