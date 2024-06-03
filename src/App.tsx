import {
  ChakraProvider,
  Box,
  Flex,
} from '@chakra-ui/react';
import { Layout } from './components/Layout';
import { LoginCard } from './components/LoginCard';

function App() {
  return (
    <Layout>
    <ChakraProvider>

        <Flex justifyContent="space-between"> 
        <Box width="30%"></Box>
        <LoginCard/>
        <Box width="30%"></Box>
        </Flex>
    </ChakraProvider>
    </Layout>
  );
}

export default App;
