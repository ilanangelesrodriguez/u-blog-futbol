import { Box, IconButton, Text } from '@chakra-ui/react';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import React, { ReactElement } from 'react';
import Card from './Card';

type SocialMedia = 'facebook' | 'twitter' | 'linkedin';

type SocialMediaItem = {
    platform: SocialMedia;
    icon: ReactElement;
};

const socialMedias: SocialMediaItem[] = [
    {
        platform: 'facebook',
        icon: <FaFacebook />,
    },
    {
        platform: 'twitter',
        icon: <FaTwitter />,
    },
    {
        platform: 'linkedin',
        icon: <FaLinkedin />,
    },
];

interface Props {
    title: string;
    facebook?: boolean;
    linkedin?: boolean;
    twitter?: boolean;
    onClick: (platform: SocialMedia) => void;
}

const SocialCard = ({ title, onClick, ...props }: Props) => {
    return (
        <Card flex="1" textAlign="center">
            <Text color="primary" fontWeight="bold" marginBottom="1rem">
                {title}
            </Text>
            <Box display="flex" flexWrap="wrap" justifyContent="space-around" paddingBottom={'.3rem'}>
                {socialMedias.map(({ platform, icon }) => {
                    if (!props[platform]) return null;
                    return (
                        <IconButton
                            key={platform}
                            colorScheme={platform}
                            aria-label={platform}
                            icon={icon}
                            onClick={() => onClick(platform)}
                        />
                    );
                })}
            </Box>
        </Card>
    );
};

export default SocialCard;
