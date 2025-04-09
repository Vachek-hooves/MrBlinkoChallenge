import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {StoreProvider} from './store/context';
import {
  TabUserProfile,
  TabChooseQuiz,
  TabSpinnerQuiz,
  TabTrueGame,
  TabScoreScreen,
} from './screen/tabScreens';
import {
  StackWelcomeScreen,
  StackChallengeChoose,
  StackQuizScreen,
  StackTrueGame,
} from './screen/stackScreens';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 100,
          position: 'absolute',
          bottom: 16,
          right: 16,
          left: 16,
          borderRadius: 15,
          backgroundColor: '#1a2a6c',
          borderTopWidth: 0,
          elevation: 8,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 4},
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          // paddingBottom: 10,
        },
        tabBarItemStyle: {
          marginTop: 10,
          // marginBottom: 5,
        },
        tabBarActiveTintColor: '#fdbb2d',
        tabBarInactiveTintColor: 'rgba(255, 255, 255, 0.6)',
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: '500',
          paddingTop: 15,
        },
      }}>
      <Tab.Screen
        name="TabUserProfile"
        component={TabUserProfile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size, focused}) => (
            <View
              style={{
                justifyContent: 'center',
                width: 50,
                height: 50,
                // padding: 4,
                borderRadius: 20,
                backgroundColor: focused
                  ? 'rgba(253, 187, 45, 0.2)'
                  : 'transparent',
                alignItems: 'center',
              }}>
              <Icon name="account" size={40} color={color} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="TabSpinnerQuiz"
        component={TabSpinnerQuiz}
        options={{
          tabBarLabel: 'Quiz',
          tabBarIcon: ({color, size, focused}) => (
            <View
              style={{
                justifyContent: 'center',
                width: 50,
                height: 50,
                // padding: 4,
                borderRadius: 20,
                backgroundColor: focused
                  ? 'rgba(253, 187, 45, 0.2)'
                  : 'transparent',
                alignItems: 'center',
              }}>
              <Icon name="rotate-3d-variant" size={40} color={color} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="TabTrueGame"
        component={TabTrueGame}
        options={{
          tabBarLabel: 'True/False',
          tabBarIcon: ({color, size, focused}) => (
            <View
              style={{
                justifyContent: 'center',
                width: 50,
                height: 50,
                // padding: 4,
                borderRadius: 20,
                backgroundColor: focused
                  ? 'rgba(253, 187, 45, 0.2)'
                  : 'transparent',
                alignItems: 'center',
              }}>
              <Icon name="check-circle-outline" size={40} color={color} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="TabScoreScreen"
        component={TabScoreScreen}
        options={{
          tabBarLabel: 'Scores',
          tabBarIcon: ({color, size, focused}) => (
            <View
              style={{
                justifyContent: 'center',
                width: 50,
                height: 50,
                // padding: 4,
                borderRadius: 20,
                backgroundColor: focused
                  ? 'rgba(253, 187, 45, 0.2)'
                  : 'transparent',
                alignItems: 'center',
              }}>
              <Icon name="trophy" size={40} color={color} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

function App() {
  return (
    <StoreProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            animation: 'fade_from_bottom',
            animationDuration: 1000,
          }}>
          <Stack.Screen
            name="StackWelcomeScreen"
            component={StackWelcomeScreen}
          />
          <Stack.Screen name="TabNavigator" component={TabNavigator} />
          <Stack.Screen
            name="StackChallengeChoose"
            component={StackChallengeChoose}
          />
          <Stack.Screen name="StackQuizScreen" component={StackQuizScreen} />
          <Stack.Screen name="StackTrueGame" component={StackTrueGame} />
        </Stack.Navigator>
      </NavigationContainer>
    </StoreProvider>
  );
}

export default App;
