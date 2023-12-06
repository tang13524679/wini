import { useEffect } from "react";
import store from "store";
import { useRouter } from "next/router";
import { useGlobalState } from "@/hooks/global";
import useSWR from "swr";

export function useAuth(from) {
  const router = useRouter();
  useEffect(() => {
    if (!store.get("user")) {
      router.push(`/sign-in?from=${encodeURIComponent(from)}`);
    }
  }, []);
}

export function useCollectedGames() {
  const [{ user }] = useGlobalState();
  const { data } = useSWR(user && "/api/v1/Post/postUserGameList");
  useEffect(() => {
    if (data?.info) store.set("collectedGames", data?.info);
  }, [data]);
  return data?.info;
}
