import { t } from '@/utils/translate';

export default function SocialMedia() {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mt-4">
            <a
                href="https://www.facebook.com/G88-Golden-Gate-104313035665037"
                target="_blank"
                rel="noreferrer"
                className="flex bgPlaceholder rounded-md py-2 px-3"
            >
                <div className="icon-facebook"></div>
                <div className="p-1.5">Facebook</div>
            </a>
            <a
                href="https://www.instagram.com/GG8VIP/"
                target="_blank"
                rel="noreferrer"
                className="flex bgPlaceholder rounded-md py-2 px-3"
            >
                <div className="icon-instagram"></div>
                <div className="p-1.5">Instagram </div>
            </a>
            <a
                href="https://www.facebook.com/G88-Golden-Gate-104313035665037"
                target="_blank"
                rel="noreferrer"
                className="flex bgPlaceholder rounded-md py-2 px-3"
            >
                <div className="icon-messenger"></div>
                <div className="p-1.5">Messenger</div>
            </a>
            <a
                href="https://t.me/cskhgg8"
                target="_blank"
                rel="noreferrer"
                className="flex bgPlaceholder rounded-md py-2 px-3"
            >
                <div className="icon-telegram"></div>
                <div className="p-1.5">Telegram </div>
            </a>
            <a
                href="mailto:goldengateg8@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="flex bgPlaceholder rounded-md py-2 px-3"
            >
                <div className="icon-email-s"></div>
                <div className="p-1.5">Email </div>
            </a>
            <a
                href="https://zalo.me/639202107606"
                target="_blank"
                rel="noreferrer"
                className="flex bgPlaceholder rounded-md py-2 px-3"
            >
                <div className="icon-zalo"></div>
                <div className="p-1.5">Zalo</div>
            </a>
        </div>
    );
}
