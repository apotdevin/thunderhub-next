import React, { useState, useEffect } from 'react';
import {
    CardWithTitle,
    CardTitle,
    SubTitle,
    Card,
    Separation,
    Sub4Title,
    ResponsiveLine,
    DarkSubTitle,
} from '../../../src/components/generic/Styled';
import { DownloadBackups } from './DownloadBackups';
import { VerifyBackups } from './VerifyBackups';
import { RecoverFunds } from './RecoverFunds';
import { AdminSwitch } from '../../../src/components/adminSwitch/AdminSwitch';
import {
    getDateDif,
    getFormatDate,
} from '../../../src/components/generic/Helpers';

export const BackupsView = () => {
    const [lastDate, setLastDate] = useState('');

    useEffect(() => {
        const date = localStorage.getItem('lastBackup');
        setLastDate(date);
    }, []);

    const getDate = () => {
        if (lastDate) {
            return `${getDateDif(lastDate)} ago (${getFormatDate(lastDate)})`;
        }
        return 'Has not been backed up!';
    };

    return (
        <CardWithTitle>
            <CardTitle>
                <SubTitle>Backups</SubTitle>
            </CardTitle>
            <Card>
                <ResponsiveLine>
                    <DarkSubTitle>Last Backup Date:</DarkSubTitle>
                    <Sub4Title>{getDate()}</Sub4Title>
                </ResponsiveLine>
                <Separation />
                <DownloadBackups />
                <VerifyBackups />
                <AdminSwitch>
                    <RecoverFunds />
                </AdminSwitch>
            </Card>
        </CardWithTitle>
    );
};
