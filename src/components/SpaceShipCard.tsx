import { View, Text, Image, ImageSourcePropType, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


type Props = {
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: string;
    hyperdrive_rating: string;
};

export default function SpaceShipCard(props: Props) {
    const source = useImage(props.name);
    const navigation = useNavigation();

    return (
        <View className="bg-black mx-4 rounded-md">
            <TouchableOpacity 
                onPress={() => 
                    navigation.navigate('StarshipDetails', 
                        {
                        name: props.name,
                        model: props.model,
                        manufacturer: props.manufacturer,
                        cost_in_credits: props.cost_in_credits,
                        hyperdrive_rating: props.hyperdrive_rating,
                        })
                }
            >
            <Image source={source} className="w-full rounded-t-md" />
            <View className="p-4">
                <Text className="text-xl text-white mb-4">{props.name}</Text>
                <Text className="text-white mb-2">Model : {props.model}</Text>
                <Text className="text-white mb-2">
                    Manufacturer : {props.manufacturer}
                </Text>
                <Text className="text-white mb-2">
                    Cost in credits : {props.cost_in_credits}
                </Text>
                <Text className="text-white mb-2">
                    Hyperdrive rating : {props.hyperdrive_rating}
                </Text>
            </View>
            </TouchableOpacity>
        </View>
    );
}

const useImage = (title: string) => {
    const imageName = `${title.toLowerCase().replace(' ', '')}`;

    let source;
    switch (imageName) {
        case 'cr90corvette':
            source = require('../../assets/starships/CR90corvette.jpg');
            break;
        case 'stardestroyer':
            source = require('../../assets/starships/stardestroyer.jpg');
            break;
        case 'sentinel-classlanding craft':
            source = require('../../assets/starships/sentinel-classlandingcraft.jpg');
            break;
        case 'deathstar':
            source = require('../../assets/starships/deathstar.jpg');
            break;
        case 'millenniumfalcon':
            source = require('../../assets/starships/millenniumfalcon.jpg');
            break;
        case 'y-wing':
            source = require('../../assets/starships/y-wing.jpg');
            break;
        case 'x-wing':
            source = require('../../assets/starships/x-wing.jpg');
            break;
        case 'tieadvanced x1':
            source = require('../../assets/starships/tieadvancedx1.jpg');
            break;
        case 'executor':
            source = require('../../assets/starships/executor.jpg');
            break;
        case 'rebeltransport':
            source = require('../../assets/starships/rebeltransport.jpg');
            break;
    }
    return source;
};
