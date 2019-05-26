import React, { Component } from 'react';
import api from '../services/api';

import { View, Text } from 'react-native';

export default class Main extends Component {

    static navigationOptions = {
        title: 'JSHunt - Teste'
    };

    state = {
        docs: [],
    };

    ComponentDidMount() {
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get('/products');
        const { docs } = response.data;
        this.setState({ docs });
    }

    render() {
        return(
            <View>
                <Text>Página Main:</Text>
            </View>
        );
    }
}