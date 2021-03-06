import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen15166914Navigator from '../features/BlankScreen15166914/navigator';
import SignUp216165790Navigator from '../features/SignUp216165790/navigator';
import Settings165789Navigator from '../features/Settings165789/navigator';
import UserProfile165782Navigator from '../features/UserProfile165782/navigator';
import Settings165781Navigator from '../features/Settings165781/navigator';
import Settings165779Navigator from '../features/Settings165779/navigator';
import SignIn2165777Navigator from '../features/SignIn2165777/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen15166914: { screen: BlankScreen15166914Navigator },
SignUp216165790: { screen: SignUp216165790Navigator },
Settings165789: { screen: Settings165789Navigator },
UserProfile165782: { screen: UserProfile165782Navigator },
Settings165781: { screen: Settings165781Navigator },
Settings165779: { screen: Settings165779Navigator },
SignIn2165777: { screen: SignIn2165777Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
