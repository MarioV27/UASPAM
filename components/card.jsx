import { StyleSheet, Text, Image, View, TouchableOpacity} from 'react-native';

const Card = ( props ) => {


  return (
    
    <View style={styles.container} 
    >
      <View style={styles.wrap}>
        <View style={styles.top}>
          <Image source={{ uri: props.image }} style={styles.cardIMage}/>
        </View>
        
        <View style={styles.bottom}>
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Nama Barang</Text>
            <Text  style={styles.cardDesc}>{props.nama}</Text>
            <Text style={styles.cardTitle}>Harga</Text>
            <Text  style={styles.cardDesc}>$ {props.harga}</Text>
            <Text style={styles.cardTitle}>Rating</Text>
            <Text  style={styles.cardDesc}>{props.rating}</Text>
          </View>
        </View>
      </View>
      <View style={styles.wrap}>
        <View style={styles.top2}>
        <Text style={styles.cardTitle}>Deskripsi Barang</Text>
            <Text  style={styles.cardDesc}>{props.description}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      borderWidth: 2,
      borderRadius: 10,
      backgroundColor: '#d1dce2',
      borderColor: 'white',
      marginVertical: 10,
      height: 350,
      width: "100%",
      alignSelf:'center',
    },

    wrap:{
      display:'flex',
      flexDirection:'row',
    },

    cardIMage: {
      height:150,
      width: 150,
      borderRadius:10,
    },

    bottom: {
      paddingRight: 20,
      marginRight : 20,
      paddingVertical: 20,
      width : "50%"
    },
    top: {
        marginLeft: 20,
        paddingVertical: 20,
        width : "50%"
      },
      top2: {
        marginLeft: 20,
        paddingVertical: 20,
        width : "90%"
      },
    cardContent: {
      marginVertical: 10,
   
    },

    cardTitle: {
      fontWeight: 'bold',
      marginBottom: 1,
      fontSize: 17,
      color: '#000000',
    },
    cardDesc: {
      fontSize: 14,
      color: '#303030'
    },
  });

export default Card