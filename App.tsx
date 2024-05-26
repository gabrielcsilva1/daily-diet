import { ThemeProvider } from 'styled-components/native';
import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans';

import  theme  from '@/theme';

import { Routes } from '@/routes';

import { Loading } from '@/components/Loading';
import { StatusBar } from 'react-native';

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold
  });

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <Routes/> : <Loading/>}
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent"/>
    </ThemeProvider>
  );
}


