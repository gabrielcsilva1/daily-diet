import { Container, RowContainer } from "./style";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { View } from "react-native";

import { Header } from "@/components/Header";
import { FormInput } from "@/components/FormInput";
import { Label } from "@/components/FormInput/style";
import { OptionButton } from "@/components/OptionButton";
import { Button, ButtonLabel } from "@/components/Button";
import { MealFormSheet } from "@/components/MealFormSheet";

export default function CreateMeal(){

    return (
        <Container>
            <Header subtitle="Nova refeição"/>
            <MealFormSheet>
                <KeyboardAwareScrollView 
                    style={{marginBottom: 16}} 
                    contentContainerStyle={{ gap: 24, marginBottom: 40}}
                    showsVerticalScrollIndicator={false}
                >
                    <FormInput label="Nome"/>
                    <FormInput label="Descrição" numberOfLines={5}/>

                    <RowContainer style={{gap: 20}}>
                        <FormInput label="Data"/>
                        <FormInput label="Hora"/>
                    </RowContainer>

                    <View>
                        <Label>Está dentro da dieta?</Label>
                        <RowContainer style={{gap: 8}}>
                            <OptionButton title="Sim" variant="PRIMARY"/>
                            <OptionButton title="Não" variant="SECONDARY"/>
                        </RowContainer>
                    </View>
                </KeyboardAwareScrollView>

                <Button>
                    <ButtonLabel>Cadastrar refeição</ButtonLabel>
                </Button>
            </MealFormSheet>
        </Container>
    )
}