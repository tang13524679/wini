import qs from 'query-string';

export default function fetchBackend(
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

    return new Promise((resolve, reject) => {
        fetch(url, options)
            .then(async (res) => {
                let json = await res.json();
                resolve(json);
            })
            .catch((e) => {
                reject(e.message);
            });
    });
}
