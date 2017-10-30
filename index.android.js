import { Navigation } from 'react-native-navigation';
import { registerScreens } from './App';

registerScreens();

Navigation.startTabBasedApp({
    tabs: [
        {
            label: 'Home',
            screen: 'HomeScreen',
            title: 'Home',
            icon: require('./img/home.png')
        },
        {
            label: 'List',
            screen: 'ListScreen',
            title: 'List',
            icon: require('./img/list.png')
        }
    ]
});