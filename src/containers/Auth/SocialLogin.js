import React, { useState, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { Row, Col, Button } from 'antd';
import { AuthContext } from 'context/AuthProvider';

const SocialLogin = () => {
  const { signUp, loggedIn } = useContext(AuthContext);
  const [state, setState] = useState({
    facebook: false,
    twitter: false,
    linkedin: false,
    google: false,
  });
  const handleSocialAuth = (key) => {
    setState({
      ...state,
      [key]: true,
    });
    setTimeout(() => {
      setState({
        ...state,
        [key]: false,
      });
      signUp({});
    }, 600);
  };
  if (loggedIn) {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <div>
      <Row gutter={16}>
        <Col span={12}>
          <Button
            loading={state.facebook}
            className="facebook-btn"
            type="primary"
            style={{ width: '100%', marginBottom: 16 }}
            size="large"
            onClick={() => handleSocialAuth('facebook')}
          >
            Facebook
          </Button>
        </Col>
        <Col span={12}>
          <Button
            loading={state.twitter}
            className="twitter-btn"
            type="primary"
            style={{ width: '100%', marginBottom: 16 }}
            size="large"
            onClick={() => handleSocialAuth('twitter')}
          >
            Twitter
          </Button>
        </Col>
      </Row>
      <Row gutter={16} style={{ marginBottom: '37px' }}>
        <Col span={12}>
          <Button
            loading={state.linkedin}
            className="linkedin-btn"
            type="primary"
            style={{ width: '100%', marginBottom: 16 }}
            size="large"
            onClick={() => handleSocialAuth('linkedin')}
          >
            Linked In
          </Button>
        </Col>
        <Col span={12}>
          <Button
            loading={state.google}
            className="google-btn"
            type="primary"
            style={{ width: '100%', marginBottom: 16 }}
            size="large"
            onClick={() => handleSocialAuth('google')}
          >
            Google+
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default SocialLogin;
