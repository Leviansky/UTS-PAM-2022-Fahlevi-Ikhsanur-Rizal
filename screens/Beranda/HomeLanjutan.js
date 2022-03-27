import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image,
    Modal,
    Pressable,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';

import iconKapal from '../../assets/icon/kapal.png'
import iconPenumpang from '../../assets/icon/penumpang.png'
import iconKalender from '../../assets/icon/kalender.png'
import iconJam from '../../assets/icon/jam.png'
import iconSearch from '../../assets/icon/search.png'
import iconBeranda from '../../assets/icon/beranda.png'
import iconPesananSaya from '../../assets/icon/pesananSaya.png'
import iconPembatalan from '../../assets/icon/pembatalan.png'
import iconLainnya from '../../assets/icon/lainnya.png'
import styles from '../../assets/Styles/Style'
import { useRoute } from '@react-navigation/native';
import { FontAwesome, MaterialCommunityIcons, Feather, Fontisto, MaterialIcons, FontAwesome5, EvilIcons, Entypo, Foundation } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';


const HomeLanjutan = ({navigation}) => {
    const route = useRoute();
    const [awal, onChangeAwal] = React.useState('');
    const [tujuan, onChangeTujuan] = React.useState('');
    const [kelas, onChangeKelas] = React.useState('');
    const [tanggal, onChangeTanggal] = React.useState('');
    const [jam, onChangeJam] = React.useState('');
    const [showLainnya, SetShowLainnya] = React.useState(false);

    const NextPesananSayaLanjutan = () => {
        navigation.navigate('PesananSayaLanjutan',{
                Awal : route.params.Awal,
                Tujuan : route.params.Tujuan,
                Kelas : route.params.Kelas,
                Tanggal : route.params.Tanggal,
                Jam : route.params.Jam,
            })
    }
    const NextPembatalanLanjutan = () => {
        navigation.navigate('PembatalanLanjutan',{
                Awal : route.params.Awal,
                Tujuan : route.params.Tujuan,
                Kelas : route.params.Kelas,
                Tanggal : route.params.Tanggal,
                Jam : route.params.Jam,
            })
    }
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
            <ScrollView>

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
                                <Picker.Item label="21:00 WIB" value="21:00 WIB" />
                                <Picker.Item label="22:00 WIB" value="22:00 WIB" />
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
                    <TouchableOpacity style={styles.rowIconBawah} onPress={ () => NextPesananSayaLanjutan()}>
                        <View style={styles.IconBawah}>
                        <FontAwesome name="book" size={50} color="#0d5794" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.rowIconBawah} onPress={ () => NextPembatalanLanjutan()}>
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


export default HomeLanjutan;