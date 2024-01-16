import react from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
const LoginModal = dynamic(() => import("@/components/h5/login"));

const Login = () => {
  const router = useRouter();
  return (
    <>
      <LoginModal />
    </>
  );
};

export default Login;
