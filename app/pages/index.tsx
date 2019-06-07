import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {
  MenuProvider,
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger
} from 'react-native-popup-menu'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  text: {
    alignItems: 'center',
    fontSize: 24
  }
})

const Index = (): JSX.Element => {
  return (
    <MenuProvider>
      <View>
        <Text>Hello world!</Text>
        <Menu>
          <MenuTrigger text="Select action" />
          <MenuOptions>
            <MenuOption onSelect={() => alert(`Save`)} text="Save" />
            <MenuOption onSelect={() => alert(`Delete`)}>
              <Text style={{ color: 'red' }}>Delete</Text>
            </MenuOption>
            <MenuOption
              onSelect={() => alert(`Not called`)}
              disabled={true}
              text="Disabled"
            />
          </MenuOptions>
        </Menu>
      </View>
    </MenuProvider>
  )
}

export default Index
