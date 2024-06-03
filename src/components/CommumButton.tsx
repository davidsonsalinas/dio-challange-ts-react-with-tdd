import { Button } from "@chakra-ui/react";

interface IButton {
    description: string;
    event: () => void;
}

export const CommumButton = ({description ,event }:IButton) => {
    return (
        <Button onClick={event} colorScheme='teal' size='md'  margin={2} >{description}</Button>
    );
}