import { Navigation } from 'react-native-navigation';
import HomeScreen from './screens/home-screen';
import ListScreen from './screens/list-screen';
import DetailsScreen from './screens/details-screen';

export function registerScreens() {
    Navigation.registerComponent('HomeScreen', () => HomeScreen);
    Navigation.registerComponent('ListScreen', () => ListScreen);
    Navigation.registerComponent('DetailsScreen', () => DetailsScreen);
}