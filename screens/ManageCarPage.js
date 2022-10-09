import { View, StyleSheet } from 'react-native'
import { React, useEffect, useState} from 'react'
import { Button, Center, Image, Input, NativeBaseProvider, Stack, TextArea } from 'native-base';

export default function ManageCarPage({navigation,route}) {

    const [phote,setPhote] = useState("");
    const [name,setName] = useState("");
    const [type,setType] = useState("");
    const [number,setNumber] = useState("");
    const [price,setPrice] = useState("");

    const printStates=()=>{
        console.log(phote);
        console.log(name);
        console.log(type);
        console.log(number);
        console.log(price);
    }

    useEffect(()=>{
        setPhote(route.params.object.car)
        setName(route.params.object.name)
        setType(route.params.object.type)
        setNumber(route.params.object.number)
        setPrice(route.params.object.price+'')

        console.log(phote);
        console.log(name);
        console.log(type);
        console.log(number);
        console.log(price);
    })

  return (
    <NativeBaseProvider>
        <Center>
        <Image style={styles.Image} shadow={5} 
            source={{uri: phote}} 
            alt="Car" 
            size="xl" 
            width={330}
            height={150}
            borderRadius={10}
            backgroundColor={'blue.100'}
            margin={3}
        />

        <Stack space={4} w="94%" maxW="330px" mx="auto">
        <Button style={styles.upload} size="lg" variant="outline" colorScheme="secondary" onPress={() => console.log(price)}>
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
        <Input 
            variant="rounded" 
            placeholder="Price" 
            value={price}
            onChangeText={(e)=>{setPrice(e)}}
            
        />

        <Button style={styles.update} size="lg" onPress={() => navigation.navigate('Cars')}>
            Update
        </Button>
        <Button style={styles.delete} size="lg" colorScheme="secondary" onPress={() => navigation.navigate('Cars')}>
            Delete
        </Button>
        </Stack>
        </Center>
    </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({
    update: {
        borderRadius: 20,
        marginTop: 0
      },
    delete: {
        borderRadius: 20,
        marginTop: -10
      },
    upload: {
        borderRadius: 20
    }
  });