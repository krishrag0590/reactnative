import { View, Text } from "react-native";
import Names from "./Names";

export default function Box({children, style}) {
    return(
        <View>
            <Text style={style}>{children}</Text>
            {/* <Names name={children}/> */}
        </View>
    )
}