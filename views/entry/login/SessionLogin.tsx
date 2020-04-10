import React, { useState } from 'react';
import { useAccount } from '../../../src/context/AccountContext';
import {
    SingleLine,
    Sub4Title,
    CardWithTitle,
    Card,
    SubTitle,
} from '../../../src/components/generic/Styled';
import CryptoJS from 'crypto-js';
import { toast } from 'react-toastify';
import { saveSessionAuth } from '../../../src/utils/auth';
import { ColorButton } from '../../../src/components/buttons/colorButton/ColorButton';
import { Input } from '../../../src/components/input/Input';
import { Section } from '../../../src/components/section/Section';

export const SessionLogin = () => {
    const { name, admin, refreshAccount } = useAccount();
    const [pass, setPass] = useState('');

    const handleClick = () => {
        try {
            const bytes = CryptoJS.AES.decrypt(admin, pass);
            const decrypted = bytes.toString(CryptoJS.enc.Utf8);

            saveSessionAuth(decrypted);
            refreshAccount();
        } catch (error) {
            toast.error('Wrong Password');
        }
    };

    return (
        <Section>
            <CardWithTitle>
                <SubTitle>{`Please Login (${name}):`}</SubTitle>
                <Card>
                    <SingleLine>
                        <Sub4Title>Password:</Sub4Title>
                        <Input
                            type={'password'}
                            withMargin={'0 0 0 16px'}
                            onChange={(e) => setPass(e.target.value)}
                        />
                    </SingleLine>
                    {pass !== '' && (
                        <ColorButton
                            disabled={pass === ''}
                            onClick={handleClick}
                            withMargin={'16px 0 0'}
                            fullWidth={true}
                            arrow={true}
                        >
                            Connect
                        </ColorButton>
                    )}
                </Card>
            </CardWithTitle>
        </Section>
    );
};
