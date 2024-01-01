import {
    Text,
    View,
    StyleSheet
} from "react-native";
const UserData = (props) => {
    const item = props.item;
    return (
        <View style={style.box}>
            <Text style={style.item} >{item.name}</Text>
            <Text style={style.item} >{item.email}</Text>
        </View>
    )
}
// internal style
const style = StyleSheet.create({
    item: {
        color: 'orange',
        fontSize: 20,
        flex: 1,
        margin: 2,
        textAlign: 'center',

    },
    box: {
        flexDirection: 'row',
        borderColor: 'red',
        borderWidth: 2,
        marginBottom: 10
    }
});
export default UserData;