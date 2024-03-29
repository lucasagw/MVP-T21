import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Screens
import Faq from '../features/info/Faq';
import theme from '../theme/theme';
import Courses from '../features/course/courses';
// Components
import { CustomHeader, CustomTabBar } from '../common';

const Tab = createBottomTabNavigator();

const AppRoutes = () => {
  return (
    <Tab.Navigator
      initialRouteName="Courses"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme.color.primary,
        tabBarStyle: {
          backgroundColor: theme.color.whiteAlt,
          borderTopWidth: 0,
        },
        header: (props) => <CustomHeader {...props} />,
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen
        name="Courses"
        component={Courses}
        options={{
          tabBarIcon: 'home',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={() => <></>}
        options={{
          tabBarIcon: 'person',
        }}
      />
      <Tab.Screen
        name="Store"
        component={() => <></>}
        options={{
          tabBarIcon: 'storefront',
        }}
      />
      <Tab.Screen
        name="Info"
        component={Faq}
        options={{
          tabBarIcon: 'info',
        }}
      />
    </Tab.Navigator>
  );
};

export default AppRoutes;
