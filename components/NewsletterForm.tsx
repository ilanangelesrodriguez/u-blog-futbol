import React from 'react';
import { Text, Input, Button, Link, BoxProps } from '@chakra-ui/react';
import Card from './cards/Card';
interface Props extends BoxProps {
    onSubmitForm: (email: string) => void;
}

const NewsletterForm = ({ onSubmitForm, ...props }: Props) => {
    return (
        <Card textAlign="center" {...props}>
            <Text color="primary" fontWeight="bold" margin=".5rem">
                Suscribete a nuestro newsletter
            </Text>
            <Input variant="outline" placeholder="Introduce tu correo eléctronico" borderRadius={'full'} margin=".5rem" />
            <Button bgColor="primary" color="light" borderRadius={'full'} width="100%" margin=".5rem">
                Suscribir
            </Button>
            <Text fontSize=".7rem" margin="3px">
                Para recibir las últimas noticias y actualizaciones, usted acepta nuestra{' '}
                <Link href="/privacy-policy" target="_blank" color="primary">
                    Politicas de privacidad
                </Link>
            </Text>
        </Card>
    );
};

export default NewsletterForm;
