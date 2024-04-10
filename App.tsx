import { NativeBaseProvider, StatusBar } from 'native-base';
import { TEMAS } from './src/styles/temas';
import { Home } from './src/screens/Home';

export default function App() {
  return (
    <NativeBaseProvider theme={TEMAS}>
      <StatusBar backgroundColor={TEMAS.colors.gray}></StatusBar>
      <Home></Home>
    </NativeBaseProvider>
  );
}


