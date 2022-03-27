import React, { useState } from "react";
import {
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Image,
    Modal,
    Pressable,
} from 'react-native';
import styles from '../assets/Styles/Style'
import iconBeranda from '../assets/icon/beranda.png'
import iconPesananSaya from '../assets/icon/pesananSaya.png'
import iconPembatalan from '../assets/icon/pembatalan.png'
import iconLainnya from '../assets/icon/lainnya.png'
import { useRoute } from '@react-navigation/native';
import { FontAwesome, MaterialCommunityIcons, Feather, Fontisto, MaterialIcons, FontAwesome5, EvilIcons, Entypo, Foundation } from '@expo/vector-icons';

const PesananSaya = ({navigation}) => {
    const [showLainnya, SetShowLainnya] = React.useState(false);
    return (
        <View style={styles.bGround}>
            <Modal visible={showLainnya}
                    transparent
                    onRequestClose={() => 
                    SetShowLainnya(false)
                    }>
                    <View style={styles.backgroundPopUp}
                    onPress={() => SetShowLainnya(false)}>
                        <View style={styles.backgroundKotak}>
                            <Pressable style={styles.backgroundButtonX}
                            onPress={() => SetShowLainnya(false)}>
                                <Entypo name="circle-with-cross" size={17} color="#0080ff"/>
                            </Pressable>
                            <View style={styles.rowTempPopUp}>
                                <View style={styles.backgroundJudulPopUp}>
                                    <Text style={styles.textJudulPopUp}>MENU</Text>
                                </View>
                            </View>
                            <View style={styles.barisPopUp}>
                                <View style={styles.kolomPopUp}>
                                    <Entypo name={"magnifying-glass"} size={100} color={"gray"} />
                                </View>
                                <View style={styles.kolomPopUp}>
                                    <MaterialIcons name={"people-alt"} size={100} color={"green"} />
                                </View>
                            </View>
                            <View style={styles.barisPopUp}>
                                <View style={styles.kolomPopUp}>
                                    <Foundation name={"telephone"} size={100} color={"red"}/>
                                </View>
                                <View style={styles.kolomPopUp}>
                                    <FontAwesome5 name={"history"} size={80} color={"yellow"}/>
                                </View>
                            </View>
                        </View> 
                    </View>
                </Modal>
            <View style={styles.borderJudul}>
                <Text style={styles.formatTeksJudul}>Daftar Pesanan</Text>
            </View>
            <View style={{height: '80%', justifyContent: 'center', alignItems: 'center'}}>
                <MaterialCommunityIcons name={"message-alert"} size={100} color="#0d5794" />
                <Text style={styles.formattekstidakada}>Tidak Ada Pesanan</Text>
            </View>
            <View style={styles.rowBawah}>
                    <TouchableOpacity style={styles.rowIconBawah} onPress={ () => navigation.navigate('Home')}>
                        <View style={styles.IconBawah}>
                            <FontAwesome name="home" size={50} color="#0d5794" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.rowIconBawah}>
                        <View style={styles.IconBawah}>
                        <FontAwesome name="book" size={50} color="#0d5794" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.rowIconBawah} onPress={ () => navigation.navigate('Pembatalan')}>
                        <View style={styles.IconBawah}>
                            <MaterialCommunityIcons name="file-cancel" size={50} color="#0d5794" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.rowIconBawah}onPress={ () => SetShowLainnya(true)}>
                        <View style={styles.IconBawah}>
                            <Feather name="menu" size={45} color="#0d5794" /> 
                        </View>
                    </TouchableOpacity>
            </View>
        </View>
    )
}

export default PesananSaya;