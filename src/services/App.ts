import Environment from "../environment";
import Http from "./Http";

export async function listCollection(collection: string, query: any) {
    return Http.get(Environment.BASE_URL + '/' + collection, query);
}

export async function getCollection(collection: string, id: any) {
    return Http.get(Environment.BASE_URL + '/' + collection + '/' + id, {});
}
