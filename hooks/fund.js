import { useEffect } from "react";
import useSWR from "swr";
import qs from "query-string";
import { useGlobalState } from "@/hooks/global";
import { ENTERPRISE_CODE } from "@/utils/const";
import store from "store";
import { encryptECB, encryptMD5 } from "@/utils/encrypt";

export function useBalance() {
  const [{ user }] = useGlobalState();
  const { data } = useSWR([
    user && "/ecrm-api/Game/balances",
    qs.stringify({
      enterprisecode: ENTERPRISE_CODE,
      params: encryptECB({ enterprisecode: ENTERPRISE_CODE }),
      signature: encryptMD5({ enterprisecode: ENTERPRISE_CODE }),
    }),
  ]);
  useEffect(() => {
    if (data?.info) store.set("balance", data?.info);
  });
  return data?.info;
}

export function useBanks() {
  const { data } = useSWR([
    "/ecrm-api/Funds/Banks",
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
    "/ecrm-api/Funds/EBankCards",
    qs.stringify({
      enterprisecode: ENTERPRISE_CODE,
      params: encryptECB({ enterprisecode: ENTERPRISE_CODE }),
      signature: encryptMD5({ enterprisecode: ENTERPRISE_CODE }),
    }),
  ]);
  return data?.info;
}

export function useUserBanks() {
  const [{ user }] = useGlobalState();
  const { data } = useSWR(user && "/ecrm-api/User/UBankCards");
  return data?.info;
}

export function useEThirdParty() {
  const [{ user }] = useGlobalState();
  const { data } = useSWR(
    user && [
      "/ecrm-api/TPayment/EThirdpartys",
      qs.stringify({ enterprisecode: ENTERPRISE_CODE }),
    ]
  );
  return data?.info;
}
