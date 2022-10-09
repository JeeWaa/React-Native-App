import { Text, StyleSheet } from 'react-native'
import { React, useState } from 'react'
import { NativeBaseProvider, Center, Stack, Input, Button, AspectRatio, Image } from 'native-base'

export default function SignInPage({navigation}) {

    const [name,setName] = useState("");
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [email,setEmail] = useState("");

    const printStates=()=>{
        console.log(name);
        console.log(username);
        console.log(password);
        console.log(email);
    }

  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Stack space={4} w="85%" maxW="300px" mx="auto">
          <Center>
            {/* <Text style={styles.text}>Login</Text> */}
            <AspectRatio ratio={{base: 3 / 4,md: 9 / 10
              }} height={{base: 200,md: 400
            }}>
              <Image resizeMode="cover" source={{
                uri: "https://www.origastock.com/images/3d-characters/download3/16.png"
              }} alt="Picture of a Flower" />
            </AspectRatio>
          </Center>

          <Input 
            variant="rounded" 
            placeholder="Name" 
            value={name}
            onChangeText={(e)=>{setName(e)}}
          />
          <Input 
            variant="rounded" 
            placeholder="Username" 
            value={username}
            onChangeText={(e)=>{setUsername(e)}}
          />
          <Input 
            variant="rounded" 
            placeholder="Password" 
            type='password' 
            value={password}
            onChangeText={(e)=>{setPassword(e)}}
          />
          <Input 
            variant="rounded" 
            placeholder="Email"
            value={email}
            onChangeText={(e)=>{setEmail(e)}}
          />
          <Button style={styles.button} size="lg" colorScheme="blue" onPress={() => navigation.navigate('AddCarPage')}>
            Sign In
          </Button>

          <Center>
            <Text style={styles.login} onPress={() => navigation.navigate('LoginPage')}>Login</Text>
          </Center>
          
        </Stack>
      </Center>
    </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({
    // text: {
    //     color: 'blue',
    //     fontSize: 40,
    //     paddingBottom: 20
    // },
    login: {
      color: 'blue',
        fontSize: 12,
        paddingTop: 10,
        paddingBottom: 30
    },
    button: {
      borderRadius: 20,
      marginTop: 20
    }
  });