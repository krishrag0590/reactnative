import { View, Text } from "react-native";

export default function Names({ name }) {
    return (
        <View>
            {/* {name} */}
            <Text>Name component {name}</Text>
        </View>
    )
}