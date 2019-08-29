import React from 'react';
import {createStackNavigator, createBottomTabNavigator, createAppContainer} from 'react-navigation';

import AddCity from './AddCity/AddCity';
import Cities from './Cities/Cities';
import City from './Cities/City';
import {colors} from './theme';


const CitiesNav = createStackNavigator(
    {
        Cities: {screen: Cities},
        City: {screen:City}
    }, 
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: colors.primary
            },
            headerTintColor: '#fff'
        }
    }
    );


const Tabs = createBottomTabNavigator({
    Cities: {screen: CitiesNav},
    AddCity: {screen: AddCity}
})


export default createAppContainer(Tabs);



