import { createServer } from '@graphql-yoga/node';
import { typeDefs } from '../../utils/graphql/generated/generated-typedefs';
import { resolvers } from '../../utils/graphql/resolvers/index';

const server = createServer({
    schema: {
        typeDefs: typeDefs,
        resolvers: resolvers,
    },
    endpoint: '/api/graphql',
    // graphiql: false, // uncomment to disable
});

export default server;
