import { useState, useCallback } from "react";
import Link from "next/link";
import { t } from "@/utils/translate";
import Balance from "@/components/balance";
import { useGlobalState } from "@/hooks/global";
import { LoginModal } from "../pages/sign-in";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
export default function MobileHeader() {
  const [{ user, badge }] = useGlobalState();

  const [isOpen, toggleOpen] = useState(false);
  const [loginActive, setLoginActive] = useState("login");

  const loginAction = useCallback((key) => {
    setLoginActive(key);
    toggleOpen(true);
  }, []);

  return (
    <div
      className="sm:hidden flex justify-between items-center  px-4 z-40 "
      style={{ background: "#1F2329", padding: "5px 12px" }}
    >
      <LoginModal
        open={isOpen}
        active={loginActive}
        onCancel={() => {
          toggleOpen(false);
        }}
      />

      <div>
        <Link href="/home" passHref>
          <div className="logo"></div>
        </Link>
      </div>
      {/* login before */}
      {!user && (
        <>
          {/* <div className="flex justify-between" style={{ height: '2.5rem' }}>
                        <div className="clWhite px-5 py-2 rounded-md btnYellow" onClick={() => loginAction('login')}>
                            {t('login')}
                        </div>
                        <div
                            className="clWhite px-5 py-2 rounded-md btnYellow signInBtn"
                            onClick={() => loginAction('join')}
                        >
                            {t('join')}
                            <div className='icon-gift'/>
                        </div>
                    </div> */}
          <Box
            style={{
              display: "flex",
              justifyContent: "justify-between",
              height: "3rem",
              paddingTop: 5,
              paddingBottom: 5,
            }}
          >
            <div style={{ color: "#fff", fontSize: 16 }}>
              <span
                style={{
                  fontSize: 16,
                  marginRight: 20,
                }}
                onClick={() => loginAction("login")}
              >
                登陆
              </span>
              <Button
                variant="contained"
                color="primary"
                style={{
                  background: 'url("/assets/home/anniu.png")', // Replace with your image URL
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  color: "#2F3030",
                  fontSize: 13.021,
                  height: 30,
                  background:
                    "linear-gradient(96deg, #F1CC64 7.88%, #B6C357 57.14%, #8ABC4A 93.08%)",
                }}
                size="small"
                onClick={() => loginAction("join")}
              >
                立即注册
              </Button>
            </div>
          </Box>
        </>
      )}
      {/* login after */}
      {user && (
        <div className="flex items-center mt-0.5">
          <Balance />
          <Link href="/user/messages" passHref>
            <div className="relative cursor-pointer ml-2">
              <div className="icon-messages"></div>
              {Number(badge) > 0 && (
                <div className="absolute -right-1 -top-2">
                  <span className="badge">{badge}</span>
                </div>
              )}
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}
