import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: "hotpink",
        margin: 10,
        borderRadius: 10,
        padding: 10,
        width:180
    },
 
    image: {
        height: Dimensions.get("window").height / 4, borderTopLeftRadius: 10, borderTopRightRadius: 10,
        width:Dimensions.get("window").width /2.5 },
   
    title: {
        fontWeight: 'bold',
        textAlign:"center",
        margin:10
        
    },
    price: {
        color: 'red',
        fontWeight: 'bold',
        textAlign:"center",
        marginTop:10,
    },
    inStock: {
        fontWeight: 'bold',
        fontSize: 12,
        color: "black",
        textAlign:"left",
        margin:20
    },
    btn:{
        textAlign:"center"
    }
})