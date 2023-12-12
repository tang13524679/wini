import react from "react";
import LoginModal from "@/components/h5/login";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  return (
    <>
      <LoginModal />
    </>
  );
};

export default Login;
