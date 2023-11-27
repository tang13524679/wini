import { useState } from 'react';
import Head from 'next/head';
import InnerPageLayout from '@/layouts/inner-page';
import InnerPageTitle from '@/components/inner-page-title';
import { useAuth } from '@/hooks/user';
import { useRouter } from 'next/router';
import { t } from '@/utils/translate';
import { useBanks } from '@/hooks/fund';
import { Form, Select, Input, Upload, Modal, message } from 'antd';
import { useGlobalState } from '@/hooks/global';
import { requestApi, formatMoney } from '@/utils/common';
import { uploadFile } from '@/utils/firebase';
import { PlusOutlined } from '@ant-design/icons';
import { fundApi } from '@/requests/frontend';
import PageLoading from '@/components/page-loading';

let bankName = '';

const uploadButton = (
    <div>
        <PlusOutlined />
        <div style={{ marginTop: 8 }}>{t('upload')}</div>
    </div>
);

export default function UploadSlipPage() {
    useAuth('/fund/upload-slip');
    const [, dispatch] = useGlobalState();
    const [preview, setPreview] = useState({});
    const [fileList, setFileList] = useState([]);
    const [form] = Form.useForm();
    const router = useRouter();
    const { query } = router;
    const banks = useBanks();

    const handleCancel = () => setPreview({ previewVisible: false });

    const handlePreview = async (file) => {
        setPreview({
            previewImage: file.response,
            previewVisible: true,
        });
    };

    const handleChange = ({ fileList }) => setFileList(fileList);

    return (
        <InnerPageLayout>
            <Head>
                <title>Upload Slip - WIN</title>
            </Head>
            <div className="sm:px-4">
                <div className="bgInnerPage">
                    <InnerPageTitle title={t('uploadSlip', 'nav')} />
                    {!banks ? (
                        <PageLoading />
                    ) : (
                        <>
                            <div
                                className="mx-auto mt-4  pb-24"
                                style={{ maxWidth: 440 }}
                            >
                                <Form
                                    form={form}
                                    layout="vertical"
                                    initialValues={{
                                        orderamount: formatMoney(
                                            query.orderamount
                                        ),
                                    }}
                                    onFinish={async (values) => {
                                        requestApi(
                                            dispatch,
                                            async () => {
                                                if (!fileList.length)
                                                    throw t(
                                                        'uploadSlipNeeded',
                                                        'msg'
                                                    );
                                                let filesPath = fileList.map(
                                                    (item) => item.response
                                                );
                                                let ordercomment =
                                                    filesPath.join('|');
                                                values.bankName = bankName;
                                                values.ordercomment =
                                                    ordercomment;

                                                return fundApi.saving({
                                                    ...values,
                                                    ...query,
                                                });
                                            },
                                            () => {
                                                router.push(
                                                    '/fund/transaction-result'
                                                );
                                            }
                                        );
                                    }}
                                >
                                    <Form.Item
                                        name="employeepaymentbank"
                                        label={t('bankName', 'field')}
                                        rules={[{ required: true }]}
                                        className="!mt-4"
                                    >
                                        <Select
                                            options={banks}
                                            placeholder={t('pleaseSelect')}
                                            onChange={(v, option) => {
                                                bankName = option.label;
                                            }}
                                            suffixIcon={
                                                <div className="icon-dropdown"></div>
                                            }
                                        ></Select>
                                    </Form.Item>
                                    <Form.Item
                                        name="employeepaymentname"
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
                                        name="employeepaymentaccount"
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
                                    <Form.Item
                                        name="orderamount"
                                        label={t('amount', 'field')}
                                        className="!mt-4"
                                    >
                                        <Input
                                            disabled
                                            placeholder={t(
                                                'accountNo',
                                                'field'
                                            )}
                                            className="normalInput"
                                        />
                                    </Form.Item>
                                </Form>
                                <div className="my-4">
                                    {t('uploadSlip', 'nav')}
                                </div>

                                <Upload
                                    listType="picture-card"
                                    fileList={fileList}
                                    onPreview={handlePreview}
                                    onChange={handleChange}
                                    customRequest={async ({
                                        file,
                                        onSuccess,
                                    }) => {
                                        try {
                                            const url = await uploadFile(file);
                                            onSuccess(url);
                                        } catch (err) {
                                            message.error(err.message);
                                        }
                                    }}
                                >
                                    {fileList.length >= 3 ? null : uploadButton}
                                </Upload>
                                <Modal
                                    closable={false}
                                    title={null}
                                    open={preview.previewVisible}
                                    footer={null}
                                    onCancel={handleCancel}
                                >
                                    <img src={preview.previewImage} />
                                </Modal>
                                <div
                                    className="py-2 mt-5 rounded-full btnYellow"
                                    onClick={() => {
                                        form.submit();
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
