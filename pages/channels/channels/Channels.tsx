import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_CHANNELS } from '../../../src/graphql/query';
import { Card } from '../../../src/components/generic/Styled';
import { ChannelCard } from './ChannelCard';
import { useAccount } from '../../../src/context/AccountContext';
import { toast } from 'react-toastify';
import { getErrorContent } from '../../../src/utils/error';
import { LoadingCard } from '../../../src/components/loading/LoadingCard';

export const Channels = () => {
    const [indexOpen, setIndexOpen] = useState(0);

    const { host, viewOnly, cert, sessionAdmin } = useAccount();
    const auth = {
        host,
        macaroon: viewOnly !== '' ? viewOnly : sessionAdmin,
        cert,
    };

    const { loading, data } = useQuery(GET_CHANNELS, {
        variables: { auth },
        onError: (error) => toast.error(getErrorContent(error)),
    });

    if (loading || !data || !data.getChannels) {
        return <LoadingCard noTitle={true} />;
    }

    return (
        <Card>
            {data.getChannels.map((channel: any, index: number) => (
                <ChannelCard
                    channelInfo={channel}
                    index={index + 1}
                    setIndexOpen={setIndexOpen}
                    indexOpen={indexOpen}
                    key={`${index}-${channel.id}`}
                />
            ))}
        </Card>
    );
};
