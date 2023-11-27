import Head from 'next/head';
import InnerPageLayout from '@/layouts/inner-page';
import InnerPageTitle from '@/components/inner-page-title';
import { useAuth } from '@/hooks/user';
import { t } from '@/utils/translate';
import { Form, Input, Select, message, Modal } from 'antd';
import { useGlobalState } from '@/hooks/global';
import { useRouter } from 'next/router';
import { useBanks } from '@/hooks/fund';
import { userApi } from '@/requests/frontend';
import { requestApi } from '@/utils/common';
import PageLoading from '@/components/page-loading';
import store from 'store';
import * as checker from '@/utils/checker';

let openningbank = '';

export default function BankCardPage() {
    useAuth('/user/add-bank-card');
    const [{ lang }, dispatch] = useGlobalState();
    const [form] = Form.useForm();
    const banks = useBanks();
    const router = useRouter();

    return (
        <InnerPageLayout>
            <Head>
                <title>Add Bank Card - WIN</title>
            </Head>
            <div className="sm:px-4">
                <div className="bgInnerPage">
                    <InnerPageTitle title={t('addBankCard', 'nav')} />
                    {!banks ? (
                        <PageLoading />
                    ) : (
                        <>
                            <div
                                className="mx-auto pb-10"
                                style={{ maxWidth: 440 }}
                            >
                                <Form
                                    form={form}
                                    layout="vertical"
                                    onFinish={async (values) => {
                                        requestApi(
                                            dispatch,
                                            async () => {
                                                console.log(values);
                                                values.openningbank =
                                                    openningbank;
                                                checker.isNumber(
                                                    values.paymentaccount
                                                );
                                                if (lang !== 'zh') {
                                                    checker.isSpaceName(
                                                        values.accountname
                                                    );
                                                }
                                                await userApi.addUBankCard(
                                                    values
                                                );
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
                                                message.success(
                                                    t('success', 'msg')
                                                );
                                                router.back();
                                            }
                                        );
                                    }}
                                >
                                    <Form.Item
                                        name="bankcode"
                                        label={t('bankName', 'field')}
                                        rules={[{ required: true }]}
                                        className="!mt-4"
                                    >
                                        <Select
                                            options={banks}
                                            placeholder={t('pleaseSelect')}
                                            onChange={(v, option) => {
                                                openningbank = option.label;
                                            }}
                                            suffixIcon={
                                                <div className="icon-dropdown"></div>
                                            }
                                        ></Select>
                                    </Form.Item>
                                    <Form.Item
                                        name="accountname"
                                        label={t('accountName', 'field')}
                                        rules={[{ required: true }]}
                                        className="!mt-4"
                                    >
                                        <Input
                                            placeholder={t(
                                                'accountName',
                                                'field'
                                            )}
                                            className="normalInput"
                                        />
                                    </Form.Item>
                                    <Form.Item
                                        name="paymentaccount"
                                        label={t('accountNo', 'field')}
                                        rules={[{ required: true }]}
                                        className="!mt-4"
                                    >
                                        <Input
                                            placeholder={t(
                                                'accountNo',
                                                'field'
                                            )}
                                            className="normalInput"
                                        />
                                    </Form.Item>
                                </Form>
                                <div className="clWhite70 bgTips p-4 rounded-md mt-3 text-xs breakWord">
                                    {t('addCardsFirst', 'msg')}
                                </div>
                                <div
                                    className="py-2 mt-5 rounded-full btnYellow"
                                    onClick={() => {
                                        Modal.confirm({
                                            centered: true,
                                            title: t('tips'),
                                            content: t('addBankCard', 'msg'),
                                            onOk: async () => {
                                                form.submit();
                                            },
                                        });
                                    }}
                                >
                                    {t('confirm')}
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </InnerPageLayout>
    );
}
