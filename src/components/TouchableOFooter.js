import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors } from '@utils'

const TouchableFooter = (props) => {
    return (
        <TouchableOpacity style={styles.button} onPress={props.onPress}>
            <Text style={styles.text}> AGENDAR </Text>
        </TouchableOpacity>
    );
};

const styles =  StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        height: 40,
        width: '90%',
        marginTop: 'auto',
        marginBottom: 10,
        borderRadius: 20,
        borderStyle: 'solid',
        borderWidth: 1.5,
        borderColor: colors.primary,
        backgroundColor: colors.blackWithTransparency
    },
    text: {
        color: colors.primary,
        fontSize: 18,
        alignSelf: 'center',
        fontWeight: 'bold',
    },
})

export default TouchableFooter;