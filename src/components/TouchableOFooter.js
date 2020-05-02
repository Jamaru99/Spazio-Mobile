import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Touchable = (props) => {
    return(
        <View style={Styles.footer}>
            <TouchableOpacity
                style={Styles.button}
                onPress={props.onPress}
            >
                <View style={Styles.touch_content}>

                    <Text style={Styles.text}> AGENDAR </Text>
                </View>
            </TouchableOpacity>

        </View>
    );
};

const Styles =  StyleSheet.create({
    footer: {
        flex: 0.05,
    },
    button: {
        alignItems: 'center',
        // backgroundColor: 'rgba(255, 255, 255, 1)',
        backgroundColor: '#FFFFFF0F',
        flex: 1,
    },
    touch_content:{
        alignContent: 'center' ,
        alignItems: 'center' ,
        textAlign: 'center',
    },
    text: {
        color: '#cc0308',
        marginTop: 4,
        fontSize: 18,
        alignSelf: 'center',
        fontWeight: 'bold',
    },
})

export default Touchable;