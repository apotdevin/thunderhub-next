import { ApolloServer } from 'apollo-server-micro';
import { thunderHubSchema } from '../../src/graphql/schemas';
import { getIp } from '../../src/graphql/helpers/helpers';
import Cors from 'micro-cors';

const cors = Cors({
    origin: true,
});

const apolloServer = new ApolloServer({
    schema: thunderHubSchema,
    context: async ({ req }: any) => {
        const ip = getIp(req);
        return { ip };
    },
});

const handler = apolloServer.createHandler({ path: '/api/v1' });

export const config = {
    api: {
        bodyParser: false,
    },
};

export default cors(handler);
