import { NativeWindStyleSheet } from "nativewind";
import StackNavigator from './StackNavigator';
import { NavigationContainer } from '@react-navigation/native';

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}


