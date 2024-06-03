import { Box, Center, Input } from "@chakra-ui/react";
import { CommumButton } from "./CommumButton";
import { login } from "../services/login";
import { useState } from "react";

export const LoginCard = () => { 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
      login(email, password);
  }


    return (
        <Box width="40%" backgroundColor='#ffffff' borderRadius='25px' padding='15px'>
        <Center margin={2}>
          <h1>Faça o login</h1>
        </Center>
        <Input placeholder='Email' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input placeholder='Senha' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <Center>
          <CommumButton description='Login' event={handleLogin} />
        </Center>
      </Box>
    );
}