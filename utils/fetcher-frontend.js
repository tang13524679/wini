import qs from 'query-string';
import { toBigLanguage, cleanUserStore } from '@/utils/common';
import store from 'store';
import { message } from 'antd';

export default function fetchFrontend(
    url,
    params,
    method = 'GET',
    headers = {}
) {
    let body = '';
    let options = {
        method: method.toUpperCase(),
        headers: {
            'Content-Type': 'application/json',
            lang: toBigLanguage(),
            token: store.get('token') || '',
            ...headers,
        },
    };

    if (params) {
        if (options.method === 'GET') {
            if (typeof params === 'string') {
                url = `${url}?${params}`;
            } else {
                url = `${url}?${qs.stringify(params)}`;
            }
        } else {
            if (typeof params === 'string') {
                body = params;
            } else {
                body = JSON.stringify(params);
            }
            options.body = body;
        }
    }

    // eslint-disable-next-line no-undef
    return new Promise((resolve, reject) => {
        fetch(url, options)
            .then(async (res) => {
                let json = await res.json();
                if (json.code !== '1') {
                    if (json.code === '401') {
                        cleanUserStore();
                        message.info(json.info);
                        // location.href = '/sign-in';
                    } else {
                        throw Error(json.info);
                    }
                }
                resolve(json);
            })
            .catch((e) => {
                reject(e.message);
            });
    });
}
