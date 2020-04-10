import React from 'react';
import { DarkSubTitle } from '../../../../src/components/generic/Styled';
import { useSettings } from '../../../../src/context/SettingsContext';
import { VictoryPie } from 'victory';
import { chartAxisColor } from '../../../../src/styles/Themes';
import { Row, Col, PieRow } from '../flow';

interface Props {
    invoicePie: { x: string; y: string }[];
}

export const InvoicePie = ({ invoicePie }: Props) => {
    const { theme } = useSettings();

    return (
        <Row>
            <Col>
                <PieRow>
                    <DarkSubTitle>Confirmed:</DarkSubTitle>
                    {invoicePie[0].y}
                </PieRow>
                <PieRow>
                    <DarkSubTitle>Unconfirmed:</DarkSubTitle>
                    {invoicePie[1].y}
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
                data={invoicePie}
                style={{
                    labels: { fontSize: 24, fill: chartAxisColor[theme] },
                }}
            />
        </Row>
    );
};
