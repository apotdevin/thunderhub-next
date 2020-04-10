import React from 'react';
import { DarkSubTitle } from '../../../../src/components/generic/Styled';
import { useSettings } from '../../../../src/context/SettingsContext';
import { VictoryPie } from 'victory';
import { chartAxisColor } from '../../../../src/styles/Themes';
import { Row, Col, PieRow } from '../flow';
import { getPrice } from '../../../../src/components/price/Price';
import { usePriceState } from '../../../../src/context/PriceContext';

interface Props {
    flowPie: { x: string; y: number }[];
    isType: string;
}

export const FlowPie = ({ flowPie, isType }: Props) => {
    const { theme, currency } = useSettings();
    const priceContext = usePriceState();
    const format = getPrice(currency, priceContext);

    return (
        <Row>
            <Col>
                <PieRow>
                    <DarkSubTitle>{flowPie[0].x}</DarkSubTitle>
                    {isType === 'tokens'
                        ? format({ amount: flowPie[0].y })
                        : flowPie[0].y}
                </PieRow>
                <PieRow>
                    <DarkSubTitle>{flowPie[1].x}</DarkSubTitle>
                    {isType === 'tokens'
                        ? format({ amount: flowPie[1].y })
                        : flowPie[1].y}
                </PieRow>
            </Col>
            <VictoryPie
                padding={0}
                height={150}
                colorScale={['#FD5F00', '#ffd300']}
                labels={() => ''}
                padAngle={3}
                innerRadius={50}
                labelRadius={55}
                data={flowPie}
                style={{
                    labels: { fontSize: 24, fill: chartAxisColor[theme] },
                }}
            />
        </Row>
    );
};
