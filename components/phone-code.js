import { useState, useEffect } from 'react';
import { Dropdown, Input, message, Menu, Modal } from 'antd';
import { t } from '@/utils/translate';
import { countDownSeconds } from '@/utils/common';
import { requestApi } from '@/utils/common';
import { useGlobalState } from '@/hooks/global';
import { userApi } from '@/requests/frontend';
import * as checker from '@/utils/checker';
import classNames from 'classnames';

const phonePrefixes = [
    // { label: '+ 84', value: '84', icon: 'icon-vi' },
    { label: '+ 86', value: '86', icon: 'icon-zh' },
    // { label: '+ 63', value: '63', icon: 'icon-ph' },
];

export default function PhoneCode({ onRef }) {
    const [, dispatch] = useGlobalState();

    const [params, setParams] = useState({
        icon: 'icon-vi',
        prefix: '84',
        phoneno: '',
        verifycode: '',
    });
    const [placeHolder, setPlaceHolder] = useState({
        phoneNumber: '',
        verifyCode: '',
    });
    const [count, setCount] = useState(0);
    const [otpChooserOpen, setOtpChooserOpen] = useState(false);
    const [otpMethod, setOtpMethod] = useState('1');

    useEffect(() => {
        onRef.values = {
            ...params,
            phoneno: Number(params.phoneno),
        };
    });

    useEffect(() => {
        setPlaceHolder({
            phoneNumber: t('phoneNumber', 'field'),
            verifyCode: t('verifyCode', 'field'),
        });
    }, []);

    return (
        <div>
            <div className="flex py-2">
                <Dropdown
                    trigger="click"
                    overlay={
                        <Menu>
                            {phonePrefixes.map((item) => (
                                <Menu.Item
                                    key={item.value}
                                    icon={<div className={item.icon}></div>}
                                    onClick={() => {
                                        setParams({
                                            ...params,
                                            prefix: item.value,
                                            icon: item.icon,
                                        });
                                    }}
                                >
                                    <span className="ml-2">{item.label}</span>
                                </Menu.Item>
                            ))}
                        </Menu>
                    }
                >
                    <div className="btn-icon-text bgWhite2 bdWhite6 rounded-full py-2 px-4 cursor-pointer">
                        <div style={{ minWidth: 100 }}>
                            <i className={`icon ${params.icon}`}></i>
                            <span className="text icon-text16 mx-2 clWhite">
                                + {params.prefix}
                            </span>
                            <i className="icon icon-dropdown"></i>
                        </div>
                    </div>
                </Dropdown>
                <div className="flex-auto ml-2">
                    <Input
                        value={params.phoneno}
                        onChange={(e) => {
                            setParams({
                                ...params,
                                phoneno: e.target.value,
                            });
                        }}
                        className="roundInput px-4"
                        placeholder={placeHolder.phoneNumber}
                    />
                </div>
            </div>
            <div className="flex items-center">
                <Input
                    value={params.verifycode}
                    onChange={(e) => {
                        setParams({
                            ...params,
                            verifycode: e.target.value,
                        });
                    }}
                    placeholder={placeHolder.verifyCode}
                    suffix={
                        <div
                            className="ml-2 btnText w-10"
                            style={{ color: '#E29455' }}
                            onClick={async () => {
                                requestApi(
                                    dispatch,
                                    async () => {
                                        const { prefix, phoneno } = params;
                                        checker.isMobileNumber(phoneno);

                                        if (!count) {
                                            await userApi.getVerifycode({
                                                type: otpMethod,
                                                phoneno:
                                                    prefix + Number(phoneno),
                                            });
                                            countDownSeconds(120, (second) => {
                                                if (second != 0) {
                                                    setCount(second);
                                                } else {
                                                    setCount(0);
                                                }
                                            });
                                        }
                                    },
                                    () => {
                                        message.info(
                                            t('verifyCodeSent', 'msg')
                                        );
                                    }
                                );
                            }}
                        >
                            {count ? count + 'S' : t('send')}
                        </div>
                    }
                    className="roundInput my-2 px-4"
                />
            </div>
            <div
                className="clWhite30 text-xs text-right mt-2 mr-2 hoverMainColor"
                onClick={() => setOtpChooserOpen(true)}
            >
                {t('chooseOtpMethodLabel')}
            </div>
            <OtpMethodChooserModal
                current={otpMethod}
                open={otpChooserOpen}
                onClose={(method) => {
                    setOtpChooserOpen(false);
                    if (method) setOtpMethod(method);
                }}
            />
        </div>
    );
}

const OtpMethodChooserModal = ({ current, open, onClose }) => {
    const methods = [
        { key: '2', label: t('otpBySms'), icon: 'icon-sms' },
        { key: '1', label: t('otpByCall'), icon: 'icon-call' },
    ];

    // build otp method options
    const options = methods.map(({ key, label, icon }) => (
        <button
            key={key}
            onClick={() => onClose(key)}
            className={classNames(
                'clWhite70 rounded-lg px-4 py-3 text-base flex items-center space-x-3 transition active-main-bg',
                current === key
                    ? 'main-active-bg'
                    : 'bgWhite6 border border-white/5'
            )}
        >
            <span className={icon} />
            <span>{label}</span>
        </button>
    ));

    // allow user to close the modal by pressing esc key
    useEffect(() => {
        const handler = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keyup', handler);
        return () => window.removeEventListener('keyup', handler);
    }, []);

    return (
        <Modal open={open} closable={false} footer={null} centered={true}>
            <div className="p-4">
                <h3 className="clWhite text-base">
                    {t('chooseOtpMethodTitle')}
                </h3>
                <div className="mt-6 flex flex-col items-stretch space-y-3">
                    {options}
                </div>
            </div>
        </Modal>
    );
};
