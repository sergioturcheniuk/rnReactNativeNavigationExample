import { Navigation } from 'react-native-navigation';
import { registerScreens } from './App';

registerScreens();

Navigation.startTabBasedApp({
    tabs: [
        {
            label: 'Home',
            screen: 'HomeScreen',
            title: 'Home'
        },
        {
            label: 'List',
            screen: 'ListScreen',
            title: 'List'
        }
    ]
});