import React, { useState } from "react";
import {
    Text,
    View,
} from 'react-native';
import styles from '../assets/Styles/Style'
import { Fontisto, MaterialIcons, Ionicons, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';

const Lainnya = ({navigation}) => {
    return (
        <View style={styles.bGround}>
            <View style={{height: '90%', backgroundColor: '#00ffff'}}>
            </View>
            <View style={{height: '10%', backgroundColor: '#00ffff', justifyContent: 'center', flexDirection: 'row'}}>
                <View style={{height: '100%', width: '25%', backgroundColor: '#00ffff'}}>
                    <View style={{flex: 1, borderTopLeftRadius: 50, borderTopRightRadius: 50,backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}
                    onPress = {() => navigation.navigate('layarHome')}>
                        <Ionicons name={"home"} size={50} color={'#311b92'}/>
                    </View>
                </View>
                <View style={{height: '100%', width: '25%', backgroundColor: '#00ffff'}}>
                    <TouchableOpacity style={{flex: 1, borderTopLeftRadius: 50, borderTopRightRadius: 50,backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}
                    onPress = {() => navigation.navigate('layarPesananSaya')}>
                        <Entypo name={"open-book"} size={50} color={'#311b92'}/>
                    </TouchableOpacity>
                </View>
                <View style={{height: '100%', width: '25%', backgroundColor: '#00ffff'}}>
                    <TouchableOpacity style={{flex: 1, borderTopLeftRadius: 50, borderTopRightRadius: 50,backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}
                    onPress = {() => navigation.navigate('layarPembatalan')}>
                        <MaterialCommunityIcons name={"book-remove-multiple-outline"} size={50} color={'#311b92'}/>
                    </TouchableOpacity>
                </View>
                <View style={{height: '100%', width: '25%', backgroundColor: '#00ffff'}}>
                    <TouchableOpacity style={{flex: 1, borderTopLeftRadius: 50, borderTopRightRadius: 50,backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
                        <Ionicons name={"menu-outline"} size={50} color={'#311b92'}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Lainnya;