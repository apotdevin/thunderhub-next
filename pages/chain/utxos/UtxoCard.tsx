import React from 'react';
import { Separation, SubCard } from '../../../src/components/generic/Styled';
import { MainInfo } from '../../channels/Channels.style';
import { renderLine } from '../../../src/components/generic/Helpers';
import { getPrice } from '../../../src/components/price/Price';
import { useSettings } from '../../../src/context/SettingsContext';
import { usePriceState } from '../../../src/context/PriceContext';

interface TransactionsCardProps {
    utxo: any;
    index: number;
    setIndexOpen: (index: number) => void;
    indexOpen: number;
}

export const UtxoCard = ({
    utxo,
    index,
    setIndexOpen,
    indexOpen,
}: TransactionsCardProps) => {
    const { currency } = useSettings();
    const priceContext = usePriceState();
    const format = getPrice(currency, priceContext);

    const {
        address,
        address_format,
        confirmation_count,
        output_script,
        tokens,
        transaction_id,
        transaction_vout,
    } = utxo;

    const formatAmount = format({ amount: tokens });

    const handleClick = () => {
        if (indexOpen === index) {
            setIndexOpen(0);
        } else {
            setIndexOpen(index);
        }
    };

    const renderDetails = () => {
        return (
            <>
                <Separation />
                {renderLine('Address Format:', address_format)}
                {renderLine('Confirmations: ', confirmation_count)}
                {renderLine('Output Script: ', output_script)}
                {renderLine('Transaction Id: ', transaction_id)}
                {renderLine('Transaction Vout: ', transaction_vout)}
            </>
        );
    };

    return (
        <SubCard key={index}>
            <MainInfo onClick={() => handleClick()}>
                {renderLine('Address', address)}
                {renderLine('Amount', formatAmount)}
            </MainInfo>
            {index === indexOpen && renderDetails()}
        </SubCard>
    );
};
