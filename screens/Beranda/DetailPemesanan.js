import React, { useState } from "react";
import {
    Text,
    View,
    TouchableOpacity,
    Alert,
    Modal,
    StyleSheet,
    TextInput,
    Image,
    ScrollView,
    Pressable,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import styles from '../../assets/Styles/Style'
import iconBeranda from '../../assets/icon/beranda.png'
import iconPesananSaya from '../../assets/icon/pesananSaya.png'
import iconPembatalan from '../../assets/icon/pembatalan.png'
import iconLainnya from '../../assets/icon/lainnya.png'
import { FontAwesome, MaterialCommunityIcons, Feather, Fontisto, MaterialIcons, FontAwesome5, EvilIcons, Entypo, Foundation } from '@expo/vector-icons';



const DetailPemesanan = ({navigation}) => {
    const route = useRoute();
    const [nama, onChangeNama] = React.useState('');
    const [Identitas, onChangeIdentitas] = React.useState('');
    const [umur, onChangeUmur] = React.useState('');
    const [showLainnya, SetShowLainnya] = React.useState(false);
    const [showTransfer, SetShowTransfer] = React.useState(false);
    const Submit = () => {
        if( nama === "" && Identitas === "" && umur === "") {
            alert("Silahkan Lengkapi Identitas Anda")
        } else {
            SetShowTransfer(false);
            navigation.navigate('PesananSayaLanjutan',{
                Awal : route.params.Awal,
                Tujuan : route.params.Tujuan,
                Kelas : route.params.Kelas,
                Tanggal : route.params.Tanggal,
                Jam : route.params.Jam,
                })
        }
    }
    return (
        <View style={styles.bGround}>
            <ScrollView>
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
                                <Entypo name="circle-with-cross" size={35} color="#0080ff"/>
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
                <View style={styles.boxMid}>

                    <Modal visible={showTransfer}
                        transparent
                        onRequestClose={() => 
                        SetShowTransfer(false)
                    }>
                        <View style={{flex: 1,justifyContent: 'center',alignItems: 'center',backgroundColor: '#00000099',}}>
                            <View style={{textAlign: 'center', backgroundColor: 'white', height: '25%', width: '50%', borderRadius: 15}}>
                                <View style={{height: '20%',justifyContent: 'center',alignItems: 'center',backgroundColor: '#ED9D54', borderTopRadius: 15}}>
                                    <Text style={{fontWeight: 'bold', fontSize: 18, color: 'white', fontWeight: 'bold'}}>PEMBAYARAN</Text>
                                </View>
                                <View style={{height: '60%',justifyContent: 'center',alignItems: 'center'}}>
                                    <Text style={{textAlign: 'center',margin: 15, fontWeight: 'bold', fontSize: 15}}>TRANSFER KE NOMOR REKENING 119140128</Text>
                                    <Text style={{textAlign: 'center',margin: 15, fontWeight: 'bold', fontSize: 15}}>BANK HATI KAMU</Text>
                                </View>
                                <View style={{height: '20%',justifyContent: 'center',alignItems: 'center'}}>
                                    <Pressable
                                    onPress={() => Submit()}
                                    style={{backgroundColor: '#ED9D54',borderRadius: 5,alignItems: 'center',justifyContent: 'center',height: '80%', width: '70%'}}
                                        android_ripple={{color:'#ED9D54'}}>
                                        <Text style={{fontWeight: 'bold', color: 'white', fontWeight: 'bold' , fontSize: 18}}>Selesai</Text>
                                    </Pressable>
                                </View>
                            </View> 
                        </View>
                    </Modal>

                    <Text style={styles.tittle}>Kapalzy</Text>
                    <View style={styles.tempDetail}>
                    <Text style={{fontSize: 17, fontWeight: 'bold'}}>Informasi Pemesanan</Text>
                    <View style={styles.templateBoxKonfirmasi}>
                            <View style={styles.rowPerjalananDetail}>
                                <View style={styles.tempMidDetail}>
                                    <Text style={styles.teksPerjalananDetial}>{route.params.Awal}</Text>
                                    <Text style={styles.teksPerjalananDetial}>     ->     </Text>
                                    <Text style={styles.teksPerjalananDetial}>{route.params.Tujuan}</Text>
                                </View>
                            </View>
                            <Text style={{fontSize: 16, fontWeight: 'bold'}}>Jadwal Masuk Pelabuhan</Text>
                            <Text style={styles.teksBoksDetail}>{route.params.Tanggal}</Text>
                            <Text style={styles.teksBoksDetail}>{route.params.Jam}</Text>
                            <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 10}}>Layanan</Text>
                            <Text style={styles.teksBoksDetail}>{route.params.Kelas}</Text>
                            <View style={styles.boksJumlahPesanan}>
                                <Text style={styles.teksBoksDetail}>Dewasa x1</Text>
                                <Text style={styles.teksBoksDetail}>Rp 65.000,00</Text>
                            </View>
                        </View>
                        <Text style={{fontSize: 18, marginTop: 5}}>Data Pemesanan</Text>
                        <View style={styles.rowDetail}>
                            <Text style={{fontSize: 14}}>Nama Lengkap</Text>
                            <TextInput style={styles.borderDetail}
                            onChangeText={(text) => onChangeNama(text)}value={nama}></TextInput>
                        </View> 
                        <View style={styles.rowDetail}>
                            <Text style={{fontSize: 14}}>Identitas</Text>
                            <TextInput style={styles.borderDetail}
                            onChangeText={(text) => onChangeIdentitas(text)}value={Identitas}></TextInput>
                        </View> 
                        <View style={styles.rowDetail}>
                            <Text style={{fontSize: 14}}>Umur</Text>
                            <TextInput style={styles.borderDetail}
                            onChangeText={(text) => onChangeUmur(text)}value={umur}></TextInput>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.buttonDetail} onPress={ () => Submit()}>
                                <Text style={styles.buttonText} >             Submit</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.rowBawah}>
                    <TouchableOpacity style={styles.rowIconBawah} onPress={ () => navigation.navigate('Home')}>
                        <View style={styles.IconBawah}>
                            <FontAwesome name="home" size={50} color="#0d5794" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.rowIconBawah} onPress={ () => navigation.navigate('PesananSaya')}>
                        <View style={styles.IconBawah}>
                        <FontAwesome name="book" size={50} color="#0d5794" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.rowIconBawah} onPress={ () => navigation.navigate('Pembatalan')}>
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

export default DetailPemesanan;