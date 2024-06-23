    import {View,Text,StyleSheet,Button} from 'react-native';
    import {ActivityIndicator} from 'react-native';
    import { useContext } from 'react';
    import { AuthContext } from '../context/AuthContext';



    const HomeScreen =  ()=>{
        const {userInfo,isLoading} = useContext(AuthContext);
        console.log("user info: ", userInfo)

        return(
            <View>
                {isLoading && <ActivityIndicator size="large" color="#2D96F3" />}

                <Text>Welcome {userInfo.user.names}</Text>
            </View>
        )
    }

    export default HomeScreen;
