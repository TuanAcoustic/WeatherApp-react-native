import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Header = ({ timezone }) => {
    return (
        <View style={styles.viewContainer}>
            <Text style={styles.textHeader}>{timezone}</Text>
            <View style={styles.viewDrawer}>
                <View style={styles.viewLeftStyle}></View>
                <Icon
                    style={styles.icon}
                    name='dot-circle'
                    size={25}
                />
                <View style={styles.viewRightStyle}></View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    viewContainer: {
        height: 80,
    },

    textHeader: {
        fontSize: 25,
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        marginTop: 10,
    },

    viewDrawer: {
        marginHorizontal: 40,
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center'
    },

    viewLeftStyle: {
        flex: 1,
        backgroundColor: 'white',
        height: 2,
    },

    viewRightStyle: {
        flex: 1,
        backgroundColor: 'white',
        height: 2,
    },

    icon: {
        color: 'white',
        marginHorizontal: 15,
    },
});

export default Header;
