import { useState, useEffect, useRef } from 'react';
import { Input } from 'antd';

export default function VerifyCodeInput({ onRef }) {
    const firstInputRef = useRef();
    const [value, setValue] = useState({
        A: '',
        B: '',
        C: '',
        D: '',
        E: '',
        F: '',
    });
    useEffect(() => {
        firstInputRef.current.focus();
    }, []);
    useEffect(() => {
        onRef.value = Object.values(value).join('');
    });
    return (
        <div className="flex justify-between">
            <Input
                ref={firstInputRef}
                type="text"
                className="verifyCodeInput"
                maxLength="1"
                value={value.A}
                onChange={(e) => {
                    setValue({
                        ...value,
                        A: e.target.value,
                    });
                    if (e.target.value) {
                        e.target.nextElementSibling.focus();
                    }
                }}
            />
            <Input
                type="text"
                className="verifyCodeInput"
                maxLength="1"
                value={value.B}
                onChange={(e) => {
                    setValue({
                        ...value,
                        B: e.target.value,
                    });
                    if (!e.target.value) {
                        e.target.previousElementSibling.focus();
                    } else {
                        e.target.nextElementSibling.focus();
                    }
                }}
            />
            <Input
                type="text"
                className="verifyCodeInput"
                maxLength="1"
                value={value.C}
                onChange={(e) => {
                    setValue({
                        ...value,
                        C: e.target.value,
                    });
                    if (!e.target.value) {
                        e.target.previousElementSibling.focus();
                    } else {
                        e.target.nextElementSibling.focus();
                    }
                }}
            />
            <Input
                type="text"
                className="verifyCodeInput"
                maxLength="1"
                value={value.D}
                onChange={(e) => {
                    setValue({
                        ...value,
                        D: e.target.value,
                    });
                    if (!e.target.value) {
                        e.target.previousElementSibling.focus();
                    } else {
                        e.target.nextElementSibling.focus();
                    }
                }}
            />
            <Input
                type="text"
                className="verifyCodeInput"
                maxLength="1"
                value={value.E}
                onChange={(e) => {
                    setValue({
                        ...value,
                        E: e.target.value,
                    });
                    if (!e.target.value) {
                        e.target.previousElementSibling.focus();
                    } else {
                        e.target.nextElementSibling.focus();
                    }
                }}
            />
            <Input
                type="text"
                className="verifyCodeInput"
                maxLength="1"
                value={value.F}
                onChange={(e) => {
                    setValue({
                        ...value,
                        F: e.target.value,
                    });
                    if (!e.target.value) {
                        e.target.previousElementSibling.focus();
                    }
                }}
            />
        </div>
    );
}
