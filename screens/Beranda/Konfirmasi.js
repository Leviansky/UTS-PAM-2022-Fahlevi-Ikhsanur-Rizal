import React from 'react';
import { useRoute } from '@react-navigation/native';
import {
    Text,
    View,
    TouchableOpacity,
    FlatList,
    Modal,
    Pressable,
} from 'react-native';
import styles from '../../assets/Styles/Style'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home'
import PesananSaya from '../PesananSaya';
import Pembatalan from '../Pembatalan';
import Lainnya from '../Lainnya';
import FontAweasome5 from 'react-native-vector-icons/FontAwesome5'
import iconBeranda from '../../assets/icon/beranda.png'
import iconPesananSaya from '../../assets/icon/pesananSaya.png'
import iconPembatalan from '../../assets/icon/pembatalan.png'
import iconLainnya from '../../assets/icon/lainnya.png'
import { FontAwesome, MaterialCommunityIcons, Feather, Fontisto, MaterialIcons, FontAwesome5, EvilIcons, Entypo, Foundation } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { JADWAL, JAM } from '../../assets/jadwal/jadwal';


const Konfirmasi = ({navigation}) => {
    const route = useRoute();
    const [showLainnya, SetShowLainnya] = React.useState(false);
    const Lanjutkan = () => {
        navigation.navigate('DetailPemesanan',{
            Awal : route.params.Awal,
            Tujuan : route.params.Tujuan,
            Kelas : route.params.Kelas,
            Tanggal : route.params.Tanggal,
            Jam : route.params.Jam,
            })
    }
    return (
        <View style={styles.bGround}>
            <View style={styles.borderJudul}>
                <Text style={styles.formatTeksJudul}>Daftar Jadwal yang tersedia</Text>
            </View>
            <ScrollView style={{flex: 1, backgroundColor: '#F2F2F2', marginHorizontal: 25,}}>
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
                <SearchData/>
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
    function SearchData(){
            const HasilFinal = JADWAL.filter(temp => temp.awal_nama === route.params.Awal && temp.tujuan_nama === route.params.Tujuan && temp.tanggal === route.params.Tanggal && temp.kelas === route.params.Kelas);
            let findAll = (HasilFinal.length >= 1) ? DataGet(HasilFinal) : UnvalidData() ;
    
            return findAll;
        }
    function DataGet (hasil){
        return (
            <FlatList
                data = {hasil}
                renderItem={(item) => (
                    <TouchableOpacity style={{borderWidth: 1, height: 200, marginTop: 30, paddingHorizontal: 10,  borderColor: '#9D9D9D', borderRadius: 5}}
                    onPress={() => Lanjutkan()}>
                        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
                            <Text style={styles.teksPerjalanan}>{JADWAL.find(temp => temp.Awal === item.awal_nama ).awal_nama}</Text>
                            <Text style={styles.teksPerjalanan}>     ->     </Text>
                            <Text style={styles.teksPerjalanan}>{JADWAL.find(temp => temp.Tujuan === item.tujuan_nama ).tujuan_nama}</Text>
                        </View>
                        <Text style={{fontSize: 17, fontWeight: 'bold', marginTop: 15}}>Jadwal Masuk Pelabuhan</Text>
                        <Text style={styles.teksBoksKonfirmasi}>{JADWAL.find(temp => temp.Tanggal === item.tanggal ).tanggal}</Text>
                        <Text style={styles.teksBoksKonfirmasi}>{JAM.find(temp => temp.Jam_id === item.jam_id ).jam_output}</Text>
                        <Text style={{fontSize: 17, fontWeight: 'bold', marginTop: 10}}>Layanan</Text>
                        <Text style={styles.teksBoksKonfirmasi}>{JADWAL.find(temp => temp.Kelas === item.kelas ).kelas}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.jam_id}
            />
        );
    };
    function UnvalidData() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', paddingTop: 200}}>
                <MaterialCommunityIcons name={"message-alert"} size={100} color="red" />
                <Text style={{color: "red",fontSize: 20,fontWeight: "bold", textAlign: 'center'}}>Maaf Hasil Pencarian Tidak Ditemukan</Text> 
            </View>
        );
      }
}

export default Konfirmasi;