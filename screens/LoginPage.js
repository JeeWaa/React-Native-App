import { Text, StyleSheet } from 'react-native'
import { React, useState } from 'react'
import { NativeBaseProvider, Center, Stack, Input, Button, AspectRatio, Image } from 'native-base'

export default function LoginPage({navigation}) {

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    const printStates=()=>{
        console.log(username);
        console.log(password);
    }

  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Stack space={4} w="85%" maxW="300px" mx="auto">
          <Center>
            <AspectRatio ratio={{base: 3 / 4,md: 9 / 10
              }} height={{base: 250,md: 400
            }}>
              <Image resizeMode="cover" source={{
                uri: "https://www.origastock.com/images/3d-characters/download3/6.png"
              }} alt="Picture of a Flower" />
            </AspectRatio>
          </Center>

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
          <Button style={styles.button} size="lg" colorScheme="blue" onPress={() => navigation.navigate('AddCarPage')}>
            Login
          </Button>

          <Center>
            <Text style={styles.sign} onPress={() => navigation.navigate('SignInPage')}>Sign In</Text>
          </Center>
          
        </Stack>
      </Center>
    </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({
    sign: {
      color: 'blue',
        fontSize: 12,
        paddingTop: 40,
        paddingBottom: 30
    },
    button: {
      borderRadius: 20,
      marginTop: 40
    }
  });