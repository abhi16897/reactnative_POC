import React, { useState, useEffect } from 'react';
import { View, Text,Image,StyleSheet,TextInput, Button } from "react-native"
import axios from 'axios';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
export default function HomeComponent({navigation}){
    const [products,setProducts]=useState([]);
    const [originalList,setOriginalList]=useState([]);
    const captureSearch=(value)=>{
        let filteredValues=originalList.filter((f)=>{
            return f.name.toLocaleLowerCase().includes(value.toLocaleLowerCase());
        })
        setProducts(filteredValues);
    }
    useEffect( ()=>{
        axios.get("http://localhost:3000/allProducts").then(res=>{
         //   console.log(res.data);
         setProducts(res.data);
         setOriginalList(res.data);
        })
    },[])
    const deleteItem=(id)=>{
        axios.delete("http://localhost:3000/allProducts/"+id).then(res=>{
            console.log(res.data)
        })
    }
    return(
       
         <ScrollView>
              <TextInput placeholder="Search the Product" style={mystyle.searchbar} onChangeText={captureSearch}></TextInput>
              <View  style={mystyle.addButton}>
              <Button title="ADD PRODUCT" onPress={()=>{navigation.navigate('ADD_PRODUCT')}}></Button>
              </View>
             
             {
                 products.map(prod=>{
                     return(
                        <View key={prod.id} style={mystyle.card}>
                                <TouchableOpacity onPress={()=>{navigation.navigate('PRODUCT',{item:prod})}}>
                                <Image source={require('../assets/images/'+prod.imageUrl)} style={{width: 270, height: 300}} /> 
                                <Text style={mystyle.textstyle}>{prod.name}</Text>
                         <Text>Category: {prod.category}</Text>
                           </TouchableOpacity> 
                           <View  style={mystyle.detebutton}>
                                <Button onPress={()=>{deleteItem(prod.id)} }  color="#ff0000" title="Delete"></Button>     
                            </View>
                            <View style={mystyle.updatebutton}>
                            <Button  onPress={()=>{navigation.navigate('UPDATE_PRODUCT',{item:prod})}} color="#00ff00" title="Update"></Button>
                            </View>
                              
                     </View>
                     
                     )
                 })
             }
         </ScrollView>
    )
}
const mystyle=StyleSheet.create({
    detebutton:{
        backgroundColor:'red',
        width:250 ,
        height:35,
        marginTop:10,
        marginLeft:15,
    },
    updatebutton:{
        backgroundColor:'red',
        width:250 ,
        height:35,
        marginTop:10,
        marginLeft:15,
    },
    card:{
        flex:1,
        marginLeft:50,
        marginTop:10,
        marginRight:50,
        marginBottom:10,
        width:300,
        height:400,
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
      shadowRadius: 3,
      shadowOffset: {
    }
    },
    textstyle:{
        fontSize:20,
        textAlign:'center',
        fontWeight:'bold'
    },
    searchbar:{
        width:250,
        textAlignVertical:'center',
        marginLeft:59,
        marginTop:10,
        borderBottomColor:'black',
        borderBottomWidth:1.5
    },
    addButton:{
        width:250,
        marginLeft:55,
    marginTop:11
    }
})
