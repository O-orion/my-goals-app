import { ScrollView, Text, View, Image, Box, Button, Icon, Checkbox } from "native-base";
import { TEMAS } from "../styles/temas";
import { Ionicons } from '@expo/vector-icons';

export function Home() {
    const imagem = require('../assets/eu.jpeg')
    return (
        <ScrollView flex={1} bg={TEMAS.colors.gray} p={5} >
            <View borderRadius={10} p={2} bg={TEMAS.colors.white} display='flex'  flexDir='row' alignContent='center' alignItems='center'  >
                <Image source={imagem} resizeMode="contain" w={20} h={20} bg={TEMAS.colors.blue[100]} borderRadius={50} ></Image>
                <View ml={2}>
                    <Text fontWeight='bold' fontSize={TEMAS.fontSizes.md} color={TEMAS.colors.gray}>Bem-Vindo, Lucas!</Text>
                    <Text textAlign='center' fontSize={TEMAS.fontSizes.sm} color={TEMAS.colors.gray}>Suas Metas</Text>
            </View>
                </View>
                <View>
                    <Box h={20} w={'100%'} mb={2} flexDir='row' justifyContent='space-between' alignItems='center'>
                        <Text mt={2}  fontWeight='bold' color={TEMAS.colors.white} fontSize={TEMAS.fontSizes.lg}>
                            Tarefas Para Hoje
                        </Text>
                        <Button borderBottomRadius={5} background={TEMAS.colors.green} w={10} h={10}>
                            <Icon size={5} color={TEMAS.colors.white} as={<Ionicons name="add-outline" />} />
                        </Button>
                    </Box>

                    <Box mt={2} borderRadius={10} w={'100%'} p={2} bg={TEMAS.colors.white} justifyContent='space-between' alignItems='center' flexDir='row'>
                        <Text color={TEMAS.colors.gray} fontWeight={800} fontSize={TEMAS.fontSizes.lg}>Titulo</Text>
                        <Checkbox value="test" accessibilityLabel="This is a dummy checkbox" />
                    </Box>

                    <Box mt={2} borderRadius={10} w={'100%'} p={2} bg={TEMAS.colors.white} justifyContent='space-between' alignItems='center' flexDir='row'>
                        <Text color={TEMAS.colors.gray} fontWeight={800} fontSize={TEMAS.fontSizes.lg}>Titulo</Text>
                        <Checkbox value="test" accessibilityLabel="This is a dummy checkbox" />
                    </Box>

                    <Box mt={2} borderRadius={10} w={'100%'} p={2} bg={TEMAS.colors.white} justifyContent='space-between' alignItems='center' flexDir='row'>
                        <Text color={TEMAS.colors.gray} fontWeight={800} fontSize={TEMAS.fontSizes.lg}>Titulo</Text>
                        <Checkbox value="test" accessibilityLabel="This is a dummy checkbox" />
                    </Box>
                    
                </View>
        </ScrollView>
    )
}