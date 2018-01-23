import React from 'react';
import {
    Text,
    View,
    Image
} from 'react-native';

const TabIcon = (props) => {
    return(
        <View style={{justifyContent:'center',alignItems:'center'}}>
            <Image
                source={!props.focused ? props.image : props.selectedImage}
                style={[{ height:27,width:27,marginTop:5,tintColor:props.tintColor ,}]}
            />
            <Text
                style={{paddingLeft:6,color:props.tintColor,marginTop:6,fontSize:FONT_SIZE(10)}}
            >
                {props.title}
            </Text>
        </View>
    )
};

export default TabIcon;
