import * as admin from 'firebase-admin';
import {
    User,
    Ingredient,
    Recipe,
    IUser,
    IIngredient,
    IRecipe
} from '../generated/generated-resolvers';

const serviceAccount = require('../../../serviceAccount.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

type TDocType = User | Ingredient | Recipe;
type TDataInputType = IUser | IIngredient | IRecipe;

export enum ECollectionType {
    USER = 'user',
    INGREDIENT = 'ingredient',
    RECIPE = 'recipe',
};

/**
 * 
 * @returns timestamp @type {string} - 
 */
const timestamp = () => FirebaseFirestore.Timestamp.now().valueOf();

/**
 * Get a document from collection collectionType where T is the object return type.
 * @param args @type {id: string} - Should contain the id of the item to get.
 * @param collectionType @type {ECollectionType} - Enum type representing collection to retrieve from.
 * @returns T @type {TDocType}
 */
export async function getItem<T extends TDocType>(
    id: string,
    collectionType: ECollectionType
) {
    return admin
        .firestore()
        .collection(collectionType)
        .doc(id)
        .get()
        .then((res) => {
            return res.data() as T;
        });
}

/**
 * Gets items from collectionType where T is the object return type
 * @param args @type {ids: string[]} - Should contain the ids of the item to get.
 * @param collectionType @type {ECollectionType} - Enum type representing collection to retrieve from.
 * @returns T @type {TDocType}
 */
export async function listItems<T extends TDocType>(
    ids: string[],
    collectionType: ECollectionType
) {
    return admin
        .firestore()
        .collection(collectionType)
        .where('id', 'in', ids)
        .get()
        .then((res) => {
            return res.docs.map((doc) => doc.data() as T);
        });
}

export async function addItem<D extends TDataInputType>(
    item: D,
    collectionType: ECollectionType
) {
    const ts = timestamp();
    const data = {
        id: '',
        ...item,
        created: ts,
        updated: ts,
    };
    const res = {
        count: 0,
        data: new Array(),
        error: null,
    };

    return admin
        .firestore()
        .collection(collectionType)
        .add(data)
        .then((docRef) => {
            data.id = docRef.id;
            res.count = 1;
            res.data.push(data);
            return res;
        }).catch((e) => {
            res.count = -1;
            res.error = e;
            return res;
        });
}

export async function deleteItem(
    id: string,
    collectionType: ECollectionType
) {
    const res = {
        count: 0,
        data: [{ id: id }],
        error: null,
    };

    return admin
        .firestore()
        .collection(collectionType)
        .doc(id)
        .delete()
        .then(() => {
            res.count = 1;
            return res;
        }).catch((e) => {
            res.count = -1;
            res.error = e;
            return res;
        });
}