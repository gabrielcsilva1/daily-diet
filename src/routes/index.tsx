import Home from "@/screens/Home";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "styled-components/native";

export function Routes() {
    const { COLORS } = useTheme();

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.GRAY_600}}>
            <Home/>
        </SafeAreaView>
    )
}