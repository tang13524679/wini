import Head from 'next/head';
import InnerPageLayout from '@/layouts/inner-page';
import InnerPageTitle from '@/components/inner-page-title';
import { useAuth } from '@/hooks/user';
import { Form, Input, message } from 'antd';
import { useGlobalState } from '@/hooks/global';
import { userApi } from '@/requests/frontend';
import { useRouter } from 'next/router';
import { requestApi } from '@/utils/common';
import * as checker from '@/utils/checker';
import store from 'store';
import { t } from '@/utils/translate';

export default function SetEmailPage() {
    useAuth('/user/set-email');
    const [{ user }, dispatch] = useGlobalState();
    const [form] = Form.useForm();
    const router = useRouter();
    return (
        <InnerPageLayout>
            <Head>
                <title>Set Email - WIN</title>
            </Head>
            <div className="sm:px-4">
                <div className="bgInnerPage">
                    <InnerPageTitle title={t('setEmail', 'nav')} />
                    <div className="mx-auto pb-10" style={{ maxWidth: 440 }}>
                        <Form
                            form={form}
                            onFinish={async (values) => {
                                requestApi(
                                    dispatch,
                                    async () => {
                                        const { email } = values;

                                        if (!email) throw t('required', 'msg');

                                        checker.isEmail(email);

                                        await userApi.updateInfo(values);
                                        const rst =
                                            await userApi.takeEmployee();
                                        if (rst?.info) {
                                            store.set('user', rst.info);
                                            dispatch({
                                                type: 'set_user',
                                                payload: rst.info,
                                            });
                                        }
                                    },
                                    () => {
                                        message.success(t('success', 'msg'));
                                        router.back();
                                    }
                                );
                            }}
                        >
                            <Form.Item name="email">
                                <Input
                                    defaultValue={user?.email}
                                    allowClear
                                    placeholder={t('email', 'field')}
                                    className="roundInput mt-4"
                                />
                            </Form.Item>
                        </Form>
                        <div
                            className="py-2 mt-5 rounded-full btnYellow"
                            onClick={() => {
                                form.submit();
                            }}
                        >
                            {t('confirm')}
                        </div>
                    </div>
                </div>
            </div>
        </InnerPageLayout>
    );
}
