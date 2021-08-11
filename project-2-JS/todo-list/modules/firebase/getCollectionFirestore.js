export const getCollection = (name)=>{
    return firebase.firestore().collection(`${name}`);
}