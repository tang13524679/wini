import Head from 'next/head';
import InnerPageLayout from '@/layouts/inner-page';
import InnerPageTitle from '@/components/inner-page-title';
import { useAuth } from '@/hooks/user';
import { Form, Input, message } from 'antd';
import { t } from '@/utils/translate';
import { userApi } from '@/requests/frontend';
import { useRouter } from 'next/router';
import { useGlobalState } from '@/hooks/global';
import { requestApi } from '@/utils/common';

export default function ChangePasswordPage() {
    useAuth('/user/change-password');
    const [{ user }, dispatch] = useGlobalState();
    const [form] = Form.useForm();
    const router = useRouter();
    return (
        <InnerPageLayout>
            <Head>
                <title>Change Password - WIN</title>
            </Head>
            <div className="sm:px-4">
                <div className="bgInnerPage">
                    <InnerPageTitle title={t('changePassword', 'nav')} />
                    <div className="mx-auto pb-10" style={{ maxWidth: 440 }}>
                        <Form
                            form={form}
                            onFinish={async (values) => {
                                requestApi(
                                    dispatch,
                                    async () => {
                                        const {
                                            oldloginpassword,
                                            newloginpassword,
                                            newloginpassword1,
                                        } = values;

                                        if (
                                            !oldloginpassword ||
                                            !newloginpassword ||
                                            !newloginpassword1
                                        )
                                            throw t('required', 'msg');

                                        if (
                                            newloginpassword !==
                                            newloginpassword1
                                        )
                                            throw t('passwordAgain', 'msg');

                                        delete values.newloginpassword1;
                                        await userApi.updatepwd(values);
                                    },
                                    () => {
                                        message.success(t('success', 'msg'));
                                        router.back();
                                    }
                                );
                            }}
                        >
                            <Form.Item name="oldloginpassword">
                                <Input
                                    allowClear
                                    type="password"
                                    placeholder={t('oldPassword', 'field')}
                                    className="roundInput mt-4 px-4"
                                />
                            </Form.Item>
                            <Form.Item name="newloginpassword">
                                <Input
                                    allowClear
                                    type="password"
                                    placeholder={t('newPassword', 'field')}
                                    className="roundInput mt-4 px-4"
                                />
                            </Form.Item>
                            <Form.Item name="newloginpassword1">
                                <Input
                                    allowClear
                                    type="password"
                                    placeholder={t('passwordAgain', 'field')}
                                    className="roundInput mt-4 px-4"
                                />
                            </Form.Item>
                        </Form>
                        <div className="text-xs clWhite30 mt-4">
                            {t('passwordRule', 'msg')}
                        </div>
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
