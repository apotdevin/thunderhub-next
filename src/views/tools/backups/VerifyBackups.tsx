import React, { useState, useEffect } from 'react';
import { useAccount } from '../../../src/context/AccountContext';
import { useLazyQuery } from '@apollo/react-hooks';
import { VERIFY_BACKUPS } from '../../../src/graphql/query';
import { toast } from 'react-toastify';
import { getErrorContent } from '../../../src/utils/error';
import {
    SingleLine,
    DarkSubTitle,
    Separation,
} from '../../../src/components/generic/Styled';
import { XSvg } from '../../../src/components/generic/Icons';
import { ColorButton } from '../../../src/components/buttons/colorButton/ColorButton';
import { Input } from '../../../src/components/input/Input';
import { NoWrap } from '../Tools.styled';

export const VerifyBackups = () => {
    const [backupString, setBackupString] = useState<string>('');
    const [isPasting, setIsPasting] = useState<boolean>(false);

    const { host, viewOnly, cert, sessionAdmin } = useAccount();
    const auth = {
        host,
        macaroon: viewOnly !== '' ? viewOnly : sessionAdmin,
        cert,
    };

    const [verifyBackup, { data, loading }] = useLazyQuery(VERIFY_BACKUPS, {
        onError: (error) => toast.error(getErrorContent(error)),
    });

    useEffect(() => {
        if (!loading && data && data.verifyBackups) {
            toast.success(`Valid Backup String`);
        }
        if (!loading && data && !data.verifyBackups) {
            toast.error(`Invalid Backup String`);
        }
    }, [data, loading]);

    const renderInput = () => (
        <>
            <SingleLine>
                <NoWrap>
                    <DarkSubTitle>Backup String: </DarkSubTitle>
                </NoWrap>
                <Input
                    withMargin={'8px 0 0'}
                    onChange={(e) => setBackupString(e.target.value)}
                />
            </SingleLine>
            <ColorButton
                fullWidth={true}
                withMargin={'8px 0 4px'}
                disabled={backupString === ''}
                loading={loading}
                onClick={() =>
                    verifyBackup({
                        variables: { auth, backup: backupString },
                    })
                }
            >
                Verify
            </ColorButton>
            <Separation />
        </>
    );

    return (
        <>
            <SingleLine>
                <DarkSubTitle>Verify Channels Backup</DarkSubTitle>
                <ColorButton
                    withMargin={'4px 0'}
                    disabled={loading}
                    arrow={!isPasting}
                    onClick={() => setIsPasting((prev) => !prev)}
                >
                    {isPasting ? <XSvg /> : 'Verify'}
                </ColorButton>
            </SingleLine>
            {isPasting && renderInput()}
        </>
    );
};
