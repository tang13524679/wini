import { useState } from 'react';
import Link from 'next/link';
import { t } from '@/utils/translate';
import { Modal } from 'antd';
import { useGlobalState } from '@/hooks/global';
import UserTermsEN from '@/components/terms/en/user-terms';
import ResponsibleEN from '@/components/terms/en/responsible-gaming';
import PrivacyPolicyEN from '@/components/terms/en/privacy-policy';
import UserTermsZH from '@/components/terms/zh/user-terms';
import ResponsibleZH from '@/components/terms/zh/responsible-gaming';
import PrivacyPolicyZH from '@/components/terms/zh/privacy-policy';
import UserTermsVI from '@/components/terms/vi/user-terms';
import ResponsibleVI from '@/components/terms/vi/responsible-gaming';
import PrivacyPolicyVI from '@/components/terms/vi/privacy-policy';

export default function TermsBtns() {
    const [{ lang }] = useGlobalState();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [content, setContent] = useState(null);

    function getTerms() {
        if (lang === 'zh') return <UserTermsZH />;
        if (lang === 'vi') return <UserTermsVI />;
        return <UserTermsEN />;
    }
    function getResponsible() {
        if (lang === 'zh') return <ResponsibleZH />;
        if (lang === 'vi') return <ResponsibleVI />;
        return <ResponsibleEN />;
    }
    function getPolicy() {
        if (lang === 'zh') return <PrivacyPolicyZH />;
        if (lang === 'vi') return <PrivacyPolicyVI />;
        return <PrivacyPolicyEN />;
    }
    function showModal(type) {
        switch (type) {
            case 'tc':
                setContent(getTerms());
                break;
            case 'rg':
                setContent(getResponsible());
                break;
            case 'pp':
                setContent(getPolicy());
                break;
        }
        setIsModalVisible(true);
    }
    return (
        <>
            <Modal
                open={isModalVisible}
                closable={false}
                footer={null}
                centered={true}
                width={1200}
            >
                <div>{content}</div>
                <div className="flex justify-center my-6">
                    <div
                        className="px-5 py-1.5 rounded-full btnYellow"
                        style={{ width: 250 }}
                        onClick={() => {
                            setIsModalVisible(false);
                        }}
                    >
                        {t('agree')}
                    </div>
                </div>
            </Modal>
            <div className="flex flex-wrap justify-center gap-4 text-xs capitalize clWhite30">
                <div
                    className="underline cursor-pointer hoverMainColor"
                    onClick={() => {
                        showModal('tc');
                    }}
                >
                    {t('tc')}
                </div>
                <div
                    className="underline cursor-pointer hoverMainColor"
                    onClick={() => {
                        showModal('rg');
                    }}
                >
                    {t('rg')}
                </div>
                <div
                    className="underline cursor-pointer hoverMainColor"
                    onClick={() => {
                        showModal('pp');
                    }}
                >
                    {t('pp')}
                </div>
                <Link href="/about">
                    <a className="underline hoverMainColor hover:underline">
                        {t('about')}
                    </a>
                </Link>
                <Link href="/contact">
                    <a className="underline hoverMainColor hover:underline">
                        {t('contact')}
                    </a>
                </Link>
            </div>
        </>
    );
}
