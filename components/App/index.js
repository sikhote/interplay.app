import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import Settings from 'pages/index';

import useCachedResources from 'lib/hooks/useCachedResources';
import BottomTabNavigator from 'navigation/BottomTabNavigator';
import LinkingConfiguration from 'navigation/LinkingConfiguration';

const Stack = createStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const App = () => {
  const isLoadingComplete = useCachedResources();

  if (isLoadingComplete) {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
        {/* <Page {...{Component: Settings, }} /> */}
        <NavigationContainer linking={LinkingConfiguration}>
          <Stack.Navigator>
            <Stack.Screen name="Root" component={BottomTabNavigator} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }

  return null;
};

registerRootComponent(App);
