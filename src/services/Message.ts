import {notification} from 'antd';

export function ErrorMessage(text: string, title: string = 'Error') {
    return notification.error({description: text, message: title});
}

export function SuccessMessage(text: string, title: string = 'Success') {
    return notification.success({description: text, message: title});
}
