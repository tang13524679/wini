import { useEffect } from 'react';
import useSWR from 'swr';
import qs from 'query-string';
import { useGlobalState } from '@/hooks/global';
import { ENTERPRISE_CODE } from '@/utils/const';
import store from 'store';

export function useBalance() {
    const [{ user }] = useGlobalState();
    const { data } = useSWR(user && '/api/v1/Game/balances');
    useEffect(() => {
        if (data?.info) store.set('balance', data?.info);
    });
    return data?.info;
}

export function useBanks() {
    const { data } = useSWR([
        '/api/v1/Funds/Banks',
        qs.stringify({ noCrypto: true }),
    ]);
    const result = data?.info.map((item) => {
        return {
            label: item.bankname,
            value: item.bankcode,
        };
    });
    return result;
}

export function useReceiveBanks() {
    const { data } = useSWR([
        '/api/v1/Funds/EBankCards',
        qs.stringify({ enterprisecode: ENTERPRISE_CODE }),
    ]);
    return data?.info;
}

export function useUserBanks() {
    const [{ user }] = useGlobalState();
    const { data } = useSWR(user && '/api/v1/User/UBankCards');
    return data?.info;
}

export function useEThirdParty() {
    const [{ user }] = useGlobalState();
    const { data } = useSWR(
        user && [
            '/api/v1/TPayment/EThirdpartys',
            qs.stringify({ enterprisecode: ENTERPRISE_CODE }),
        ]
    );
    return data?.info;
}
