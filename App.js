import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { StatusBar,StyleSheet, Text, View,SafeAreaView,Platform } from 'react-native';

const STATUSBAR_HEIGHT = Platform.OS === 'android' ? 30 : StatusBarManager.HEIGHT;
export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, marginTop: STATUSBAR_HEIGHT }}>
    <View style={styles.container}>
      <Text>Search</Text>
      <Text>Lets Start</Text>
      <StatusBar style="auto" />
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F6C2FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
