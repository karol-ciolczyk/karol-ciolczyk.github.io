import { getCollection } from "./getCollectionFirestore.js";

export const removeDocument = (id)=>{
    getCollection('tasks').doc(id).delete();
};