import { transferToGoldenApi } from '@/requests/backend';
import { t } from '@/utils/translate';

export default async function handler(req, res) {
    const { lang } = req.headers;
    try {
        const rst = await transferToGoldenApi(req);
        res.send(rst);
    } catch (err) {
        console.error(err);
        res.send({
            code: '0',
            info:
                err?.message ||
                err ||
                t('noResponse', 'msg', lang.substr(0, 2)),
        });
    }
}
