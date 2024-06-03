import { Box, ChakraProvider } from "@chakra-ui/react"
import { Header } from "./Header/Header"

export const Layout = ({ children }: any) => {
    return (
        <ChakraProvider>
            <Box minHeight='100vh' backgroundImage="url('/body-lg.svg')" >
                <Header />
                {children}
            </Box>
        </ChakraProvider>
    )
}