import React from 'react';
import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";

const styles = StyleSheet.create({
    parent:{
        flexDirection: 'column',
        // justifyContent: 'space-around',
        flex: 1,
        backgroundColor: '#CFEBDF',
    },
    child:{
        textAlign: 'center',
        // textAlignVertical: 'center',
        borderWidth: 1,
        borderColor: '#FFA9B6',
        alignItems: 'center',
        backgroundColor: '#CFEBDF',
        padding: 5,
    }
})

const Boat = ({title, description, icon_name, poster, titleStyle})=> {
    return (
        <View>
            <Text>
                <Icon name={icon_name} size={33} color={"#01295F"} />
                <Text style={titleStyle}>{title}</Text>
                {"\n"}{description}
            </Text>
            <Image source={poster} style={{width:400, height:350}}/>
        </View>
    );
};

const AllBoats =() => {
    return (
        <ScrollView style={styles.parent}>
            <Text style={{ marginTop: 20, fontSize: 24, color: '#CFEBDF', textAlign: 'center', marginBottom: 20, backgroundColor:'#01295F', padding: 5}}>
                Get A Boat - For Sale
            </Text>

            <View style={styles.child}>
                <Boat icon_name={"sailboat"}
                      title="Sea Ray 500 Sundancer"
                      titleStyle={{ fontSize: 30, color: '#51291E'}}
                      description="Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away."
                      poster={require("../img/sea_ray.jpg")}
                />
            </View>

            <View style={styles.child}>
                <Boat icon_name={"sailboat"}
                      title="Four Winns Horizon 180"
                      titleStyle={{ fontSize: 30, color: '#51291E' }}
                      description="A sporty look and refined details truly set the Horizon 180 above all others."
                      poster={require("../img/four_winns.jpg")}
                />
            </View>

            <View style={styles.child}>
                <Boat icon_name={"sailboat"}
                      title="Flipper 640 ST"
                      titleStyle={{ fontSize: 30, color: '#51291E' }}
                      description="A modern take on the classic, traditional hardtop and perfect for a family picnic."
                      poster={require("../img/flipper.jpg")}
                />
            </View>

            <View style={styles.child}>
                <Boat icon_name={"sailboat"}
                      title="Princess V48"
                      titleStyle={{ fontSize: 30, color: '#51291E' }}
                      description="There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior."
                      poster={require("../img/princess.jpg")}
                />
            </View>

            <View style={styles.child}>
                <Boat icon_name={"sailboat"}
                      title="Bayliner 175 Bowrider"
                      titleStyle={{ fontSize: 30, color: '#51291E', alignItems: 'center' }}
                      description="Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance."
                      poster={require("../img/bayliner.jpg")}
                />
            </View>

            <View style={styles.child}>
                <Boat icon_name={"sailboat"}
                      title="Fairline Targa 47"
                      titleStyle={{ fontSize: 30, color: '#51291E' }}
                      description="Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit."
                      poster={require("../img/fairline.jpg")}
                />
            </View>

        </ScrollView>
    )
}

export default AllBoats;
