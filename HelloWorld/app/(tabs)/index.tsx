import { useState } from "react";
import { View, Text, Image, ImageBackground, ScrollView, Button, 
    Pressable, Modal, StatusBar, ActivityIndicator, Alert } from "react-native";
const logoImg = require("../../assets/images/adaptive-icon.png");

export default function App(){
    const [isModalVisible, setIsModalVisible] = useState(false);
    return <View style={{ flex: 1, backgroundColor: "plum", padding:60}}>
        <ScrollView>
        <Text>
        <Text style={{color: "white"}}>Hello </Text> Kent!!!</Text>
        <StatusBar backgroundColor={"lightgreen"} barStyle={"light-content"} /*hidden*/ />
        <Button title="Press" onPress={()=> setIsModalVisible(true)} color={"midnightblue"} /*disabled*/ />

        <Button 
        title="Alert Btn 1"
        onPress={()=> Alert.alert("Invalid Data!")}/>
        <Button 
        title="Alert Btn 2"
        onPress={()=> Alert.alert("Invalid Data!", "DOB is incorrect")}/>
        <Button 
        title="Alert Btn 3"
        onPress={()=> Alert.alert("Invalid Data!", "DOB is incorrect",
        [{
            text: "Cancel",
            onPress: ()=> console.log("Alert Cancel pressed")
        },
        {
            text: "Ok",
            onPress: ()=> console.log("Ok Pressed")
        }])}/>

        {/* <ActivityIndicator/>
        <ActivityIndicator size={"large"}/>
        <ActivityIndicator size={"large"} color={"midnightblue"}/>
        <ActivityIndicator size={"large"} color={"midnightblue"} animating={false}/> */}



        {/* <Modal 
        visible={isModalVisible} 
        onRequestClose={()=> setIsModalVisible(false)}
        animationType="slide"
        presentationStyle="pageSheet">
            <View style={{ flex: 1, backgroundColor: "lightblue", padding:60}}>
                <Text>Modal Content</Text>
                <Button
                title="close"
                color="midnightblue"
                onPress={()=> setIsModalVisible(false)}
                />
            </View>
        </Modal> */}
        {/* <Pressable onPress={()=> console.log('Pressable on Image')}>
            <Image source={logoImg} style={{width: 300, height: 300}}/>
        </Pressable>
        <Pressable onPress={()=> console.log('Pressable on Text')}>
        <Text>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </Text>
        </Pressable>
        <Image source={logoImg} style={{width: 300, height: 300}}/> */}
        {/* <Image source={{uri: 'https://picsum.photos/300'}} style={{width: 300, height: 300}}/> */}
        {/* <ImageBackground source={logoImg} style={{flex:1}}>
        <Text>Image Text</Text>
        </ImageBackground> */}
        </ScrollView>
    </View>
}