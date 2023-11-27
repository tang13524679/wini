import React, { useState } from 'react';
import { Combobox, DropdownList } from 'react-widgets';
import 'react-widgets/dist/css/react-widgets.css'; // Ensure you import the CSS for styles
import { useRouter } from 'next/router';
import InnerPageTitle from '@/components/inner-page-title';
import InnerPageLayout from '@/layouts/inner-page';
import { useGlobalState } from '@/hooks/global';
import { t } from '@/utils/translate';
export default function login() {
    const router = useRouter();
    const { tab } = router.query; // 从路由中获取查询参数
    // 设置默认值，如果查询参数不存在，则使用 'login'
    const initialSelectedTab = tab || 'login';
    const [selectedTab, setSelectedTab] = useState(initialSelectedTab);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('');

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  const handleLogin = () => {
    // Handle login logic
  };

  const handleRegister = () => {
    // Handle register logic
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const openSupportWindow = () => {
    // Replace 'your_support_link' with your actual customer support link
    const supportLink = 'your_support_link';
  
    // Open the support link in a new window
    window.open(supportLink, '_blank');
  };
  return (
    <div className="container">
      {/* Top Bar */}
      <div className="topBar">
        <div className="backButton" onClick={() => {}}>
          {/* Back arrow icon */}
        </div>
        <div className="languageSelector">
          <span>{selectedLanguage || 'Language'}</span>
          <DropdownList
            data={['Language 1', 'Language 2']} // Add your language options here
            onChange={(value) => setSelectedLanguage(value)}
          />
        </div>
      </div>

      {/* Logo */}
      <div className="logoContainer">
        {/* Logo image */}
        <img src="your_logo_url" alt="Logo" className="logoImage" />
        {/* Logo name */}
        <div className="logoName">Your App Name</div>
      </div>

      {/* Login/Register Tabs */}
      <div className="tabBar">
        <div
          className={`tabButton ${selectedTab === 'login' ? 'selectedTab' : ''}`}
          onClick={() => handleTabChange('login')}
        >
          Login
        </div>
        <div
          className={`tabButton ${
            selectedTab === 'register' ? 'selectedTab' : ''
          }`}
          onClick={() => handleTabChange('register')}
        >
          Register
        </div>
      </div>
        <div className="inputContainer">
        <div className="inputIcon">
            {/* Password lock icon */}
            <img src="lock_icon.png" alt="Lock Icon" />
        </div>
        <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <div className="inputIcon" onClick={handleTogglePassword}>
            {/* Show/hide password icon */}
            {showPassword ? (
            <img src="eye_icon_open.png" alt="Hide Password" />
            ) : (
            <img src="eye_icon_closed.png" alt="Show Password" />
            )}
        </div>
        {/* Error message */}
        {passwordError && <div className="errorText">{passwordError}</div>}
        </div>

        {selectedTab === 'register' && (
        <div className="inputContainer">
            <div className="inputIcon">
            {/* Password lock icon */}
            <img src="lock_icon.png" alt="Lock Icon" />
            </div>
            <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Repeat Password"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
            />
            {/* Error message */}
            {repeatPasswordError && <div className="errorText">{repeatPasswordError}</div>}
        </div>
        )}
        {selectedTab === 'login' && (
        <div className="rememberForgotContainer">
            <div className="rememberPassword">
            <div className="inputIcon">
                {/* Checkmark icon for remember password */}
                <img src="checkmark_icon.png" alt="Checkmark Icon" />
            </div>
            <span className="rememberText">Remember Password</span>
            </div>
            <span className="forgotPassword" onClick={handleForgotPassword}>
            Forgot Password
            </span>
        </div>
        )}

      {/* Login/Register Button */}
      <button
        className="loginRegisterButton"
        onClick={selectedTab === 'login' ? handleLogin : handleRegister}
      >
        {selectedTab === 'login' ? 'Login Now' : 'Register Now'}
      </button>

      {/* Support Text */}
      <div className="bottomText">
        If you encounter login issues, please contact{' '}
        <span className="contactSupport" onClick={openSupportWindow}>customer support</span>.
      </div>
    </div>
  );
};

