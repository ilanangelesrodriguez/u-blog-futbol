import React, { ReactNode } from 'react';
import { ChakraProvider, cookieStorageManagerSSR, localStorageManager } from '@chakra-ui/react';
import { IncomingMessage } from 'http';

interface ChakraProps {
    cookies: string;
    children: ReactNode;
}

export function Chakra({ cookies, children }: ChakraProps) {
    const colorModeManager =
        typeof cookies === 'string'
            ? cookieStorageManagerSSR(cookies)
            : localStorageManager;

    return (
        <ChakraProvider colorModeManager={colorModeManager}>
            {children}
        </ChakraProvider>
    );
}

export function getServerSideProps({ req }: { req: IncomingMessage }) {
    return {
        props: {
            cookies: req.headers.cookie ?? '',
        },
    };
}

