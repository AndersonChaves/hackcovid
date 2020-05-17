import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Colors from './components/Colors';
import Main from './pages/Main';
import Screening from './pages/Screening';

const Routes = createAppContainer(
  createStackNavigator({
    Main: {
      screen: Main,
      navigationOptions: {
        title: 'Hackcodiv'
      }, 
    },
    Screening: {
      screen: Screening,
      navigationOptions: {
        title: 'Triagem'
      },
    }
  }, {
    defaultNavigationOptions: {
      headerTintColor: '#FFF',
      headerBackTitleVisible: false,
      headerStyle: {
        backgroundColor: Colors.primary, 
      }
    },
  })
);

export default Routes;