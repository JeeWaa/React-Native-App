import { Text, StyleSheet } from 'react-native'
import { React, useState } from 'react'
import { NativeBaseProvider, Center, Stack, Input, Button } from 'native-base'

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
            <Text style={styles.text}>Login</Text>
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
          <Button style={styles.button} size="lg" colorScheme="blue" onPress={printStates}>
            Login
          </Button>

          <Center>
            <Text style={styles.sign} onPress={() => navigation.navigate('')}>Sign In</Text>
          </Center>
          
        </Stack>
      </Center>
    </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({
    text: {
        color: 'blue',
        fontSize: 40,
        paddingBottom: 80
    },
    sign: {
      color: 'blue',
        fontSize: 12,
        paddingTop: 40
    },
    button: {
      borderRadius: 20,
      marginTop: 40
    }
  });