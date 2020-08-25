import React from 'react';
import { View, Text, StyleSheet,Image } from "react-native"
import { ScrollView } from 'react-native-gesture-handler';

export default function ProductDetailComponent(props){
    const product=props.route.params.item
    return(
        <ScrollView>
            
        <View style={mystyle.card}>
        <Image source={require('../assets/images/'+product.imageUrl)} style={{width: 230, height: 230}} /> 
        <Text style={mystyle.textstyle}>{product.name}</Text>
         <Text style={mystyle.detailText}>Price:{product.price}</Text>
          <Text style={mystyle.detailText}>Category: {product.category}</Text> 
         <Text style={mystyle.detailText}>Stock :{product.stock}</Text>
         <Text style={mystyle.detailText}>Description:{product.description}</Text>
          </View>
        </ScrollView>
     
    )
}
const mystyle=StyleSheet.create({
    card:{
        flex:1,
        marginLeft:50,
        marginTop:10,
        marginRight:50,
        width:'200',
        height:'250',
        padding:'10px', 
        borderTopColor:'black',
        borderTopWidth:2,
        justifyContent:'center',
        borderBottomColor:'black',
        borderBottomWidth:2,
        borderLeftColor:'black',
        borderLeftWidth:2,
        borderRightColor:'black',
        borderRightWidth:2,
      borderTopRightRadius:20,
      borderTopLeftRadius:20,
      borderBottomLeftRadius:20,
      borderBottomRightRadius:20,
      shadowColor:"#000000",
      shadowOpacity: 0.8,
      shadowRadius: 2,
      shadowOffset: {
      height: 1,
      width: 1,
    }
    },
    textstyle:{
        fontSize:20,
        textAlign:'center',
        fontWeight:'bold'
    },
    detailText:{
        fontSize:20
    }
})