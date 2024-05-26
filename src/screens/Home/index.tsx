import { SectionList } from "react-native";

import { Avatar, Container, DietStatus, DietStatusButton, DietStatusVariantsProps, HomeHeader, Label, Logo, Separator, SectionHeaderText } from "./style";

import { data } from "@/utils/data";

import { Button, ButtonIcon, ButtonLabel } from "@/components/Button";
import { MealCard } from "@/components/MealCard";
import { Highlight } from "@/components/Highlight";
import { ArrowIcon } from "@/components/ArrowIcon";

import logoImg from '@/assets/logo.png';
import avatarImg from '@/assets/avatar.png';
import { useNavigation } from "@react-navigation/native";

export function Home() {
    const navigation = useNavigation()
    const dietStatus: DietStatusVariantsProps = 3 > 2 ? "SUCCESS" : "DANGER"
    
    function handleOpenDietStats(){
        navigation.navigate('diet-stats')
    }

    function handleOpenMealInfo(){
        navigation.navigate('info', {id: '1'})
    }

    function handleCreateNewMeal(){
        navigation.navigate('new')
    }

    return (
        <Container>
            <HomeHeader>
                <Logo source={logoImg}/>

                <Avatar source={avatarImg}/>
            </HomeHeader>

            <DietStatus $variant={dietStatus}>

                <Highlight title="90,86%" label="das refeições dentro da dieta"/>

                <DietStatusButton activeOpacity={0.7} onPress={handleOpenDietStats}>
                    <ArrowIcon name="arrow-up-right" $variant={dietStatus}/>
                </DietStatusButton>
            </DietStatus>

            <Label>Refeições</Label>
            <Button onPress={handleCreateNewMeal}>
                <ButtonIcon name="plus"/>
                <ButtonLabel>Nova refeição</ButtonLabel>
            </Button>

            <SectionList 
                sections={data}
                keyExtractor={(item) => item.hour}
                style={{marginTop: 32}}

                renderItem={({item}) => <MealCard onPress={() => handleOpenMealInfo()} hour={item.hour} label={item.meal} $variant={item.style}/>}
                renderSectionHeader={({section}) => <SectionHeaderText>{section.title}</SectionHeaderText>}
                contentContainerStyle={{gap: 8, paddingBottom:80}}
                renderSectionFooter={() => <Separator/>}

                showsVerticalScrollIndicator={false}
            />
        </Container>
    )
}