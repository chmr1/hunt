import React, { Component } from 'react';
import { View, Text } from 'react-native';

//import api from '../services/api';
import axios from 'axios'
import styles from "./style";

export default class Main extends Component {

    static navigationOptions = {
        title: 'JSHunt'
    };

    state = {
        docs: []
    };

    //componentDidMount() {
        //this.loadProducts();
        //console.log('teste')
    //}

    loadProducts = async () => {

        const productUrl = 'https://rocketseat-node.herokuapp.com/api/products';

        //const response = await api.get('/products');
        //const { docs } = response.data;
        //this.setState({ docs });

        //axios.get('https://rocketseat-node.herokuapp.com/api/products')
        //const { docs } = response.data;
        //this.setState({ docs });

        // fetch(productUrl).then(res => res.json())
        //     .then((data) => {
        //         this.setState({ docs: data })
        //         console.log(this.state.todos)
        // }).catch(console.log)

    }

    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.welcome}>Página Main: Teste</Text>
            </View>
        );
    }
}