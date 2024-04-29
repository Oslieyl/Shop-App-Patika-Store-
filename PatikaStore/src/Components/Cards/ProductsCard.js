import React from "react";
import { Button, Image, Text, View } from "react-native";
import styles from "./Card.style";

const ProductsCard = ({ products }) => {
    return (
        <View style={styles.container}>
            <View></View>
            <Image style={styles.image} source={{ uri: products.imgURL }} />
            <View>
                <Text style={styles.title}>{products.title}</Text>
                <Text style={styles.price}>{products.price}</Text>
                <Text style={styles.inStock} >{products.inStock ? "" : "STOKTA YOK"}</Text>
                
            </View>
        </View>
    )
}

export default ProductsCard;