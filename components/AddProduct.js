import React, { useState } from 'react';
import { View,Text,StyleSheet, Picker, Button } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import axios from 'axios';
export default function AddProductComponent({navigation}){
    const [productName,setProductName]=useState([]);
    const [price,setPrice]=useState([]);
    const [stock,setStock]=useState([]);
    const [description,setDescription]=useState([]);
    const [picker,setPicker]=useState([]);
    const [image,setImage]=useState([]);
   const captureProductName=(value)=>{
       setProductName(value);
   }
   const captureProductPrice=(value)=>{
setPrice(value);
   }
   const captureProductStock=(value)=>{
setStock(value)
   }
   const captureProductDescription=(value)=>{
setDescription(value)
   }
   const capturePicker=(value)=>{
       setPicker(value);
   }
   const captureImage=(value)=>{
       setImage(value);
   }
   const postThing=()=>{
       const json_object={
           "name":productName,
           "price":price,
           "description":description,
           "stock":stock,
           "category":picker,
           "imageUrl":image
       }
      axios.post("http://localhost:3000/allProducts",json_object).then(res=>{
          console.log(res.data);
      }) 
      navigation.navigate('Home');
   }
    return(
       <ScrollView>
           <TextInput placeholder="Enter the ProductName" style={mystyle.searchbar} onChangeText={captureProductName}></TextInput>
           <TextInput placeholder="Enter the ProductPrice" style={mystyle.searchbar} keyboardType={'number-pad'} onChangeText={captureProductPrice}></TextInput>
           <TextInput placeholder="Enter the ProductStock" style={mystyle.searchbar} keyboardType={'number-pad'} onChangeText={captureProductStock}></TextInput>
           <TextInput placeholder="Enter the ProductDescription" style={mystyle.searchbar} onChangeText={captureProductDescription}></TextInput>
           <Picker style={mystyle.searchbar} onValueChange={capturePicker}>
               <Picker.Item label="Select Item" value=''></Picker.Item>
               <Picker.Item label="Electonics" value="Electronics"></Picker.Item>
               <Picker.Item label="Groceries" value="Groceries"></Picker.Item>
               <Picker.Item label="Vegitables" value="Vegitables"></Picker.Item>
               <Picker.Item label="Fruits" value="Fruits"></Picker.Item>
           </Picker>
           <TextInput placeholder="Enter the Image Name withExtension" style={mystyle.searchbar} onChangeText={captureImage}></TextInput>
           <Button title="Add" onPress={postThing}></Button>
       </ScrollView>
    )
}
const mystyle=StyleSheet.create({
 searchbar:{
    width:250,
    textAlignVertical:'center',
    marginLeft:59,
    marginTop:10,
    borderBottomColor:'black',
    borderBottomWidth:1.5,
    marginBottom:5
}
})