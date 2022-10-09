import { View, StyleSheet } from 'react-native'
import { React, useState} from 'react'
import { Button, Center, Image, Input, NativeBaseProvider, Stack } from 'native-base';


export default function AddCarPage() {

    const [phote,setPhote] = useState("");
    const [name,setName] = useState("");
    const [type,setType] = useState("");
    const [number,setNumber] = useState("");

    const printStates=()=>{
        console.log(phote);
        console.log(name);
        console.log(type);
        console.log(number);
    }

  return (
    <NativeBaseProvider>
        <Center>
        <Image style={styles.Image} shadow={5} 
            source={{uri: 'https://web2.wheelz.me/wp-content/uploads/2021/03/Patrick-Patrikios-Lotus-Evija-and-Lotus-Type-429.jpg'}} 
            alt="Car" 
            size="xl" 
            width={330}
            height={200}
            borderRadius={10}
            backgroundColor={'blue.100'}
            margin={3}
        />

        <Stack space={4} w="94%" maxW="330px" mx="auto">
        <Button style={styles.upload} size="lg" colorScheme="blue" variant="outline" colorScheme="secondary" onPress={''}>
            Upload Photo
        </Button>
        <Input 
            variant="rounded" 
            placeholder="Car Name"
            value={name}
            onChangeText={(e)=>{setName(e)}}
        />
        <Input 
            variant="rounded" 
            placeholder="Type" 
            value={type}
            onChangeText={(e)=>{setType(e)}}
        />
        <Input 
            variant="rounded" 
            placeholder="Car Number" 
            value={number}
            onChangeText={(e)=>{setNumber(e)}}
        />

        <Button style={styles.button} size="lg" colorScheme="secondary" onPress={printStates}>
            Save
        </Button>
        </Stack>
        </Center>
    </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 20,
        marginTop: 40
      },
    upload: {
        borderRadius: 20
    }
  });