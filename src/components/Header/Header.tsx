import { Box, Center, Heading, Highlight } from "@chakra-ui/react"

export const Header = () => {
    return (
        <Box padding={3}>
            <Center>
            <Heading lineHeight='tall' textColor={'white'}>
                <Highlight
                    query='bank'
                    styles={{ px: '2', py: '1', rounded: 'full', bg: '#932ed1', textColor: 'white'}}
                    >
                    dio bank 🚀
                </Highlight>
            </Heading>
        </Center>
        </Box>
    )
}