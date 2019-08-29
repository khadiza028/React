import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { colors } from '../theme';

export default ({ message }) => (
    <View style={styles.container}>
        <Text style={styles.text}>{message}</Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderBottomWidth: 2,
        borderBottomColor: colors.primary
    }
})