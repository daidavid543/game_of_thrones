import axios from 'axios';
import store from '../redux/Store';

const headers = () => {
    const user = store.getState().Auth.user;
    return {
        'AccessToken': (user?.accessToken || ''),
    };
};

export default class Http {
    static get(url: string, params: any = {}): Promise<any> {
        return new Promise((resolve, reject) => {
            axios.get(url, {
                headers: headers(),
                params,
            }).then(value => {
                resolve(value.data);
            }).catch(error => {
                resolve(null);
            });
        });
    }

    static post(url: string, data: any): Promise<any> {
        return new Promise((resolve, reject) => {
            axios.post(url, data, {
                headers: headers(),
            }).then(value => {
                resolve(value.data);
            }).catch(error => {
                resolve(null);
            });
        });
    }

    static put(url: string, data: any, _id: string): Promise<any> {
        return new Promise((resolve, reject) => {
            axios.post(url + '/' + _id, data, {
                headers: headers(),
            }).then(value => {
                resolve(value.data);
            }).catch(error => {
                resolve(null);
            });
        });
    }

    static delete(url: string, _id: string): Promise<any> {
        return new Promise((resolve, reject) => {
            axios.delete(url + '/' + _id, {
                headers: headers(),
            }).then(value => {
                resolve(value.data);
            }).catch(error => {
                resolve(null);
            });
        });
    }
}
