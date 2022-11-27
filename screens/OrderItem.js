import { Image, StatusBar, StyleSheet, Text, View, FlatList} from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/core";

function OrderItem({item, navigation}) {
    return (
        <TouchableOpacity
        onPress={() => navigation.navigate("OrderStatus", {id=item.id})}>
            <View style={styles.container}>
                <Image style={styles.image} source={{uri: image_url}}/>
                <View style={styles.infoContainer}>
                    <Text>Testi</Text>
                </View>
                </View>
                </TouchableOpacity>
    )
}