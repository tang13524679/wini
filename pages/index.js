import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useGlobalState } from '@/hooks/global';

export default function IndexPage() {
    const [, dispatch] = useGlobalState();
    const router = useRouter();
    useEffect(() => {
        if (window.innerWidth < 1000) {
            dispatch({ type: 'set_collapse', payload: true });
        } else {
            dispatch({ type: 'set_collapse', payload: false });
        }
        router.push('/home');
    }, []);
    return <></>;
}
