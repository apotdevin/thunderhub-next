import React from 'react';

import { ChainTransactions } from './transactions/ChainTransactions';
import { ChainUtxos } from './utxos/ChainUtxos';

const ChainView = () => {
    return (
        <>
            <ChainUtxos />
            <ChainTransactions />
        </>
    );
};

export default ChainView;
