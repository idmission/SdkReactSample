import React from 'react'
import { View, TouchableOpacity, Text, Image, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import * as constant from '../Constant'
import styles from '../Styles'


export default class ResultScreen extends React.Component {

    constructor(props){
        super(props)
        this.state={
            data:'P',
            longitude:'',
            latitude:''
        }
    }
    componentDidMount=()=>{
        console.log("event:"+this.props.route.params.eventResponse);

        if(this.props.route.params.eventName=="Data"){
            var data1 = JSON.stringify(this.props.route.params.eventResponse);
            this.setState({data:data1})
        }
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }} edges={['bottom', 'left', 'right']}>
                <SafeAreaView edges={['top']} style={{ backgroundColor: constant.baseColor }}>
                    <View style={{ height: 56, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10 }}>
                        <TouchableOpacity onPress={()=>this.props.navigation.goBack()} style={{ padding: 8 }}>
                            <Text style={styles.mainText}>Back</Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
                <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
                    {
                        (this.props.route.params.eventName=="Data")?
                        (
                            <View style={{ flex: 1 }}>
                            <Text style={styles.mainText}>Response :{this.state.data}</Text>
                            </View>
                        ):
                        null
                    }
                    {
                        (this.props.route.params.eventName=="Image")?
                        (
                            <View>
                            <Image source={{ uri: "data:image/png;base64," + this.props.route.params.eventResponse }}
                                style={styles.imageStyle}
                                resizeMode="contain"
                            ></Image>
                        </View>
                        ):
                        null
                    }
                </ScrollView>
            </SafeAreaView>

        )
    }
}
