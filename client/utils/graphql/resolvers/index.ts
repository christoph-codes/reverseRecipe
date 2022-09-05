import * as admin from 'firebase-admin';
import { Resolvers } from '../generated/generated-resolvers';
import {
    User,
    Ingredient,
    Recipe
} from '../generated/generated-types';

const serviceAccount = require('../../../serviceAccount.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

async function user(args: { id: string }) {
    const res = await admin
    .firestore()
    .collection('reverseRecipe')
    .where('id', '==', args.id)
    .get();
    
    // TODO: Figure out how to convert firestore return type to graphql type in resolver
    return res.docs[0].data as unknown as User;
};

// TODO: define remaining resolvers

export const resolvers: Resolvers = {
    Query: {
        user: (parent, args, context, info) => {
            return user(args);
        },
        // TODO: define remaining resolvers
    }
};