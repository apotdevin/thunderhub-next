import React from 'react';
import { NetworkInfo } from '../../views/home/networkInfo/NetworkInfo';
import { AccountInfo } from '../../views/home/account/AccountInfo';
import { QuickActions } from '../../views/home/quickActions/QuickActions';
import { FlowBox } from '../../views/home/reports/flow';
import { ForwardBox } from '../../views/home/reports/forwardReport';
import { LiquidReport } from '../../views/home/reports/liquidReport/LiquidReport';
import { ConnectCard } from '../../views/home/connect/Connect';
import { NodeBar } from '../../src/components/nodeInfo/NodeBar';

const HomeView = () => {
    return (
        <>
            <AccountInfo />
            <NodeBar />
            <ConnectCard />
            <QuickActions />
            <FlowBox />
            <LiquidReport />
            <ForwardBox />
            <NetworkInfo />
        </>
    );
};

export default HomeView;
