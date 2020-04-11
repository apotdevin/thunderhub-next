import React, { useState } from 'react';
import {
    SubTitle,
    Card,
    CardWithTitle,
} from '../../../src/components/generic/Styled';
import { useAccount } from '../../../src/context/AccountContext';
import { GET_CHAIN_TRANSACTIONS } from '../../../src/graphql/query';
import { useQuery } from '@apollo/react-hooks';
import { toast } from 'react-toastify';
import { getErrorContent } from '../../../src/utils/error';
import { LoadingCard } from '../../../src/components/loading/LoadingCard';
import { TransactionsCard } from './TransactionsCard';

export const ChainTransactions = () => {
    const [indexOpen, setIndexOpen] = useState(0);
    const { host, viewOnly, cert, sessionAdmin } = useAccount();
    const auth = {
        host,
        macaroon: viewOnly !== '' ? viewOnly : sessionAdmin,
        cert,
    };

    const { loading, data } = useQuery(GET_CHAIN_TRANSACTIONS, {
        variables: { auth },
        onError: (error) => toast.error(getErrorContent(error)),
    });

    if (loading || !data || !data.getChainTransactions) {
        return <LoadingCard title={'Chain Transactions'} />;
    }

    return (
        <CardWithTitle>
            <SubTitle>Chain Transactions</SubTitle>
            <Card>
                {data.getChainTransactions.map(
                    (transaction: any, index: number) => (
                        <TransactionsCard
                            transaction={transaction}
                            key={index}
                            index={index + 1}
                            setIndexOpen={setIndexOpen}
                            indexOpen={indexOpen}
                        />
                    )
                )}
            </Card>
        </CardWithTitle>
    );
};
