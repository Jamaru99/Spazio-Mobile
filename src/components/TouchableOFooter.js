import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import { InnerLoader } from './Loader'
import { colors, texts } from '@utils'

const TouchableFooter = (props) => {
    return (
        <TouchableOpacity style={styles.button} onPress={props.onPress}>
            {
                props.loading
                ? <InnerLoader color={colors.primary} />
                : <Text style={styles.text}>{props.text || texts["schedule"]}</Text>
            }
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
        marginTop: 5,
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