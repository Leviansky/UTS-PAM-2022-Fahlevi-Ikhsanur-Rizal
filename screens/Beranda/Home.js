import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image,
    Modal,
    Pressable,
    StatusBar,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import iconSearch from '../../assets/icon/search.png'
import styles from '../../assets/Styles/Style'
import { FontAwesome, MaterialCommunityIcons, Feather, Fontisto, MaterialIcons, FontAwesome5, Entypo, Foundation} from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

const Home = ({navigation}) => {
    const [awal, onChangeAwal] = React.useState('');
    const [tujuan, onChangeTujuan] = React.useState('');
    const [kelas, onChangeKelas] = React.useState('');
    const [tanggal, onChangeTanggal] = React.useState('');
    const [jam, onChangeJam] = React.useState('');

    const [showLainnya, SetShowLainnya] = React.useState(false);
    const simpanData = () => {
        if (awal === '' || tujuan === '' || kelas === '' || tanggal === '' || jam === '') {
            alert('Masukkan semua data yang dibutuhkan!')
        } else if (awal == tujuan) {
            alert('Pelabuhan awal dan tujuan tidak boleh sama!')
        } else {
            navigation.navigate('Konfirmasi',{
                Awal : awal,
                Tujuan : tujuan,
                Kelas : kelas,
                Tanggal : tanggal,
                Jam : jam,
            })
        }
    }
    return (
      
        <View style={styles.bGround}>  
            <StatusBar barStyle={'light-content'} />
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
                            <Entypo name="circle-with-cross" size={17} resizeMode="constain" color="#0080ff"/>
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

            {/* <Modal visible={showModal2}
            transparent
            onRequestClose={() => 
            SetShowModal2(false)
            }>
                <View style={styles.centermesej}>
                    <View style={styles.mesej}>
                        <View style={styles.mesejtitle}>
                            <Text style={styles.tekstitle}>Tidak dapat melanjutkan</Text>
                        </View>
                        <View style={styles.warnbod}>
                            <Text style={styles.teksmesej}>Data Keberangkatan dan tujuan tidak boleh sama</Text>
                        </View>
                        <Pressable
                        onPress={() => SetShowModal2(false)}
                        style={styles.warning_button}
                        android_ripple={{color:'#fff'}}>
                            <Text style={styles.tekstitle}>OK</Text>
                        </Pressable>
                    </View> 
                </View>
            </Modal> */}

              <View style={styles.boxMidBeranda}>
                <Text style={styles.tittle}>Kapalzy</Text>
                <View style={styles.temp}>
                    <View style={styles.row}>
                        <Text style={styles.formatText}>Pelabuhan Awal</Text>
                        <View style={styles.iconAndInput}>
                            <Fontisto name="ship" size={40} color="#9D9D9D" style={styles.icon}/>
                            <Picker style={styles.borderInput}
                            selectedValue={awal}
                            onValueChange={(itemValue) =>
                                onChangeAwal(itemValue)
                            }>
                                <Picker.Item label="Pilih Pelabuhan Awal" value="" />
                                <Picker.Item label="Bakauheni" value="Bakauheni" />
                                <Picker.Item label="Merak" value="Merak" />
                            </Picker>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.formatText}>Pelabuhan Tujuan</Text>
                        <View style={styles.iconAndInput}>
                            <Fontisto name="ship" size={40} color="#9D9D9D" style={styles.icon}/>
                            <Picker style={styles.borderInput}
                            selectedValue={tujuan}
                            onValueChange={(itemValue) =>
                                onChangeTujuan(itemValue)
                            }>
                                <Picker.Item label="Pilih Pelabuhan Akhir" value="" />
                                <Picker.Item label="Bakauheni" value="Bakauheni" />
                                <Picker.Item label="Merak" value="Merak" />
                            </Picker>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.formatText}>Kelas Layanan</Text>
                        <View style={styles.iconAndInput}>
                            <MaterialCommunityIcons name="chair-school" size={40} color="#9D9D9D" style={styles.icon}/>
                            <Picker style={styles.borderInput}
                            selectedValue={kelas}
                            onValueChange={(itemValue) =>
                                onChangeKelas(itemValue)
                            }>
                                <Picker.Item label="Pilih Layanan" value="" />
                                <Picker.Item label="Express" value="Express" />
                                <Picker.Item label="Ekonomi" value="Ekonomi" />
                            </Picker>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.formatText}>Tanggal Masuk Pelabuhan</Text>
                        <View style={styles.iconAndInput}>
                            <MaterialIcons name="date-range" size={40} color="#9D9D9D"  style={styles.icon}/>
                            <Picker style={styles.borderInput}
                            selectedValue={tanggal}
                            onValueChange={(itemValue) =>
                                onChangeTanggal(itemValue)
                            }>
                                <Picker.Item label="Pilih Tanggal" value="" />
                                <Picker.Item label="Rabu, 23 Maret 2022" value="Rabu, 23 Maret 2022" />
                                <Picker.Item label="Kamis, 24 Maret 2022" value="Kamis, 24 Maret 2022" />
                                <Picker.Item label="Jumat, 15 Maret 2022" value="Jumat, 25 Maret 2022" />
                            </Picker>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.formatText}>Jam Masuk Pelabuhan</Text>
                        <View style={styles.iconAndInput}>
                            <FontAwesome5 name="clock" size={40} color="#9D9D9D" style={styles.icon}/>
                            <Picker style={styles.borderInput}
                            selectedValue={jam}
                            onValueChange={(itemValue) =>
                                onChangeJam(itemValue)
                            }>
                                <Picker.Item label="Pilih Jadwal" value="" />
                                <Picker.Item label="07:00 WIB" value="07:00 WIB" />
                                <Picker.Item label="08:00 WIB" value="08:00 WIB" />
                                <Picker.Item label="09:00 WIB" value="09:00 WIB" />
                                <Picker.Item label="10:00 WIB" value="10:00 WIB" />
                                <Picker.Item label="11:00 WIB" value="11:00 WIB" />
                                <Picker.Item label="12:00 WIB" value="12:00 WIB" />
                            </Picker>
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.boxPassenger}>
                            <Text style={styles.formatText}>Dewasa</Text>
                            <Text style={styles.formatText}>1 Orang</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.button} onPress={()=> simpanData()}>
                            <Image source={iconSearch} style={styles.icon}/>
                            <Text style={styles.buttonText}>Buat Tiket</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            </ScrollView>
            <View style={styles.rowBawah}>
                    <TouchableOpacity style={styles.rowIconBawah}>
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


export default Home;