import { useEffect } from "react";
import store from "store";
import { useRouter } from "next/router";
import { useGlobalState } from "@/hooks/global";
import { ENTERPRISE_CODE, EMPLOYEE_CODE } from "@/utils/const";
import useSWR from "swr";
import qs from "query-string";
import { encryptECB, encryptMD5 } from "@/utils/encrypt";

export function useAuth(from) {
  const router = useRouter();
  useEffect(() => {
    if (!store.get("user")) {
      router.push("/login");
    }
  }, []);
}

// export function useAuth(from) {
//   const router = useRouter();
//   useEffect(() => {
//     if (!store.get("user")) {
//       router.push(`/sign-in?from=${encodeURIComponent(from)}`);
//     }
//   }, []);
// }

export function useCollectedGames() {
  const [{ user }] = useGlobalState();
  const { data } = useSWR([
    user && "/ecrm-api/Post/postUserGameList",
    qs.stringify({
      enterprisecode: ENTERPRISE_CODE,
      params: encryptECB({
        enterprisecode: ENTERPRISE_CODE,
      }),
      signature: encryptMD5({
        enterprisecode: ENTERPRISE_CODE,
      }),
    }),
  ]);
  useEffect(() => {
    if (data?.info) store.set("collectedGames", data?.info);
  }, [data]);
  return data?.info;
}
