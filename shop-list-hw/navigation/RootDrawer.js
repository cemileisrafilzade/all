import React from 'react';
import {createDrawerNavigator,DrawerItem, DrawerContentScrollView} from '@react-navigation/drawer';
import {NavigationContainer}from '@react-navigation/native';

import { EditSingle, HomeScreen, UserSettings, AddList, RegularList,AddNewList } from '../screens';
import { CustomDrawer } from '../components';

const {Navigator,Screen} =  createDrawerNavigator();
export const RootDrawer = () =>{
    return(
        <NavigationContainer>
            <Navigator
             drawerContent={(props) =>
                <CustomDrawer {...props} />
             }
             > 
             <Screen  name={'ONE TIME LIST'} component={HomeScreen}/>
                  <Screen  name={'ADD LIST'}  component={AddList}/>
                <Screen  name={'ADD NEW LIST'}  component={AddNewList}/>
                <Screen  name={'REGULAR LISTS'} component={ RegularList}/>
                <Screen  name={'USER SETTINGS'} component={UserSettings}/>
                {/* <Screen  name={'ROOT DRAWER'}  component={CustomDrawer}/> */}

            </Navigator>
        </NavigationContainer>
    )
}