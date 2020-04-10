// import App from 'next/app';
import React from 'react';
import { useAccount } from '../src/context/AccountContext';
import EntryView from '../views/entry/Entry';
import { SessionLogin } from '../views/entry/login/SessionLogin';
import { useRouter } from 'next/router';

const ContextApp: React.FC = () => {
    const { push } = useRouter();
    const { loggedIn, admin, viewOnly, sessionAdmin } = useAccount();

    if (loggedIn) {
        if (admin === '' || viewOnly !== '' || sessionAdmin !== '') {
            push('/home');
        }
    }

    return !loggedIn && admin === '' ? <EntryView /> : <SessionLogin />;
};

export default ContextApp;
