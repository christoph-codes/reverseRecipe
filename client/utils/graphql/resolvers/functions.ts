import * as admin from 'firebase-admin';

const serviceAccount = require('../../../serviceAccount.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

export enum ECollectionType {
    USER = 'user',
    INGREDIENT = 'ingredient',
    RECIPE = 'recipe',
};

export async function getItem<T>(args: { id: string }, collectionType: ECollectionType) {
    const res = await admin
    .firestore()
    .collection(collectionType)
    .doc(args.id)
    .get();
    
    return res.data() as T;
}

export async function listItems<T>(args: { ids: string[] }, collectionType: ECollectionType) {
    const res = await admin
    .firestore()
    .collection(collectionType)
    .where('id', 'in', args.ids)
    .get();

    return res.docs.map((doc) => doc.data() as T);
}