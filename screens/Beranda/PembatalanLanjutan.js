import React, { useState } from "react";
import {
    Text,
    View,
    ScrollView,
    Image,
    Modal,
    Pressable,
    TouchableOpacity
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import styles from '../../assets/Styles/Style'
import iconBeranda from '../../assets/icon/beranda.png'
import iconPesananSaya from '../../assets/icon/pesananSaya.png'
import iconPembatalan from '../../assets/icon/pembatalan.png'
import iconLainnya from '../../assets/icon/lainnya.png'
import { FontAwesome, MaterialCommunityIcons, Feather, Fontisto, MaterialIcons, FontAwesome5, EvilIcons, Entypo, Foundation } from '@expo/vector-icons';


const PembatalanLanjutan = ({navigation}) => {
    const route = useRoute();
    const [showLainnya, SetShowLainnya] = React.useState(false);
    const Batal = () => {
        navigation.navigate('Pembatalan')
    }
    const NextHomeLanjutan = () => {
        navigation.navigate('HomeLanjutan',{
            Awal : route.params.Awal,
            Tujuan : route.params.Tujuan,
            Kelas : route.params.Kelas,
            Tanggal : route.params.Tanggal,
            Jam : route.params.Jam,
        })
    }
    const NextPesananSayaLanjutan = () => {
        navigation.navigate('PesananSayaLanjutan',{
            Awal : route.params.Awal,
            Tujuan : route.params.Tujuan,
            Kelas : route.params.Kelas,
            Tanggal : route.params.Tanggal,
            Jam : route.params.Jam,
        })
    }
    return (
        <View style={{backgroundColor: '#F2F2F2', flex: 1,}}>
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
                <Text style={styles.formatTeksJudul}>Daftar Pembatalan</Text>
            </View>
            <ScrollView>
                <View style={styles.templateBoxBatal}>
                    <View style={styles.row}>
                        <View style={styles.tempMidPerjalanan}>
                            <Text style={styles.teksPerjalanan}>{route.params.Awal}</Text>
                            <Text style={styles.teksPerjalanan}>     ->     </Text>
                            <Text style={styles.teksPerjalanan}>{route.params.Tujuan}</Text>
                        </View>
                    </View>
                    <Text style={{fontSize: 17, fontWeight: 'bold'}}>Jadwal Masuk Pelabuhan</Text>
                    <Text style={styles.teksBoksKonfirmasi}>{route.params.Tanggal}</Text>
                    <Text style={styles.teksBoksKonfirmasi}>{route.params.Jam}</Text>
                    <Text style={{fontSize: 17, fontWeight: 'bold', marginTop: 15}}>Layanan</Text>
                    <Text style={styles.teksBoksKonfirmasi}>{route.params.Kelas}</Text>
                    <View style={styles.boksJumlahPesanan}>
                        <Text style={styles.teksBoksKonfirmasi}>Dewasa x1</Text>
                        <Text style={styles.teksBoksKonfirmasi}>Rp 65.000,00</Text>
                    </View>
                    <View style={styles.posisiButtonBatal}>
                        <TouchableOpacity style={styles.buttonBatal} onPress={()=> Batal()}>
                            <Text style={styles.formatTeksButtonBatal}>BATALKAN</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.rowBawah}>
                    <TouchableOpacity style={styles.rowIconBawah}onPress={ () => NextHomeLanjutan()}>
                        <View style={styles.IconBawah}>
                            <FontAwesome name="home" size={50} color="#0d5794" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.rowIconBawah} onPress={ () => NextPesananSayaLanjutan()}>
                        <View style={styles.IconBawah}>
                        <FontAwesome name="book" size={50} color="#0d5794" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.rowIconBawah}>
                        <View style={styles.IconBawah}>
                            <MaterialCommunityIcons name="file-cancel" size={50} color="#0d5794" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.rowIconBawah} onPress={ () => SetShowLainnya(true)}>
                        <View style={styles.IconBawah}>
                            <Feather name="menu" size={45} color="#0d5794" /> 
                        </View>
                    </TouchableOpacity>
            </View>
        </View>
    )
}

export default PembatalanLanjutan;