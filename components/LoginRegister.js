// Import LoginRegisterPage component
import LoginRegisterPage from './LoginRegisterPage';
import { useRouter } from 'next/router';

const LoginRegister = () => {
  const router = useRouter();

  const handleNavigate = () => {
    // 在这里触发页面导航
    router.push('/'); // 你想要导航的目标页面路径
  };

  return (
    <div>
      {/* 渲染 LoginRegisterPage 组件 */}
      <LoginRegisterPage />

      {/* 例如，添加一个按钮来触发页面导航 */}
      <button onClick={handleNavigate}>Go to Home</button>
    </div>
  );
};

export default LoginRegister;
