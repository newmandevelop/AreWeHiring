import React, { useState, useEffect } from 'react';
import './index.scss';
import { Actions } from '../SignUp/actions';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../reducers';
import ReCAPTCHA from 'react-google-recaptcha';
import { Form, Input, Button, Typography, notification } from 'antd';
import { CANDIDATE, RECRUITER, EMPLOYER } from '../../Content/Roles';
import { getToken, getRole } from '../../utils/sessionStorage';
const { Title, Text, Link } = Typography;
const TEST_SITE_KEY = '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
let loginFailCount = 0;
const Login = (props: any) => {
  const [recaptchaApproved, setRecaptchaApproved] = useState(false);
  const [form] = Form.useForm();
  let dispatch = useDispatch();
  let history = useHistory();
  const {
    loginErrorMessage,
    loginFailure,
    loginSuccess,
    loginProgress,
    userData,
  } = useSelector((state: IRootState) => state.authState);
  const onReset = () => {
    form.resetFields();
  };
  const openNotificationWithIcon = (
    type: 'success' | 'error',
    description: String | null,
  ) => {
    notification[type]({
      message: 'Notification Title',
      description: description,
    });
  };
  const onFinish = (values: any) => {
    if (loginFailCount <= 2) {
      dispatch(
        Actions.loginProgress({
          login: values,
        }),
      );
    } else if (loginFailCount >= 3) {
      recaptchaApproved
        ? dispatch(
          Actions.loginProgress({
            login: values,
          }),
        )
        : openNotificationWithIcon('error', 'Approve ReCAPTCHA first');
    }
  };
  const changeRoute = async () => {
    const role = getRole();
    if (userData && userData.filledDetails && userData.filledDetails !== null) {
      console.log(userData.filledDetails);

      if (role === EMPLOYER || role === RECRUITER) {
        history.push('/dashboard/employer');
      } else {
        history.push('/');
      }
    } else {
      if (role === CANDIDATE) {
        history.push('/candidate/fill-details');
      }
      if (role === EMPLOYER || role === RECRUITER) {
        history.push('/employee/add-company');
      }
    }
  };
  useEffect(() => {
    if (loginSuccess) {
      onReset();
      openNotificationWithIcon('success', 'Login Successfully');
      changeRoute();
    } else if (loginFailure) {
      loginFailCount++;
      openNotificationWithIcon('error', loginErrorMessage);
    }
  }, [loginErrorMessage, loginFailure, loginSuccess]);
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div className="cardWidth">
        <div className="card card-2">
          <div className="card-heading"></div>

          <div className="card-body">
            <Title level={2}>Login Form</Title>
            <Form
              {...formItemLayout}
              form={form}
              name="register"
              onFinish={onFinish}
              scrollToFirstError
            >
              <Form.Item
                name="email"
                label="E-mail"
                rules={[
                  // {
                  //   type: 'email',
                  //   message: 'The input is not valid E-mail!',
                  // },
                  {
                    required: true,
                    message: 'Please input your E-mail!',
                  },
                ]}
              >
                <Input className="input" />
              </Form.Item>

              <Form.Item
                name="password"
                label="Password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
                hasFeedback
              >
                <Input.Password />
              </Form.Item>
              {/* <br /> */}
              <div className="text-right">
                <Text>
                  <Link href="/forgotPassword">Forgot Password</Link>
                </Text>
              </div>
              <Form.Item
                style={{ display: 'flex', justifyContent: 'flex-end' }}
              >
                {loginFailCount >= 2 ? (
                  <ReCAPTCHA
                    theme="light"
                    sitekey={TEST_SITE_KEY}
                    onChange={value => {
                      console.log(value);
                      setRecaptchaApproved(true);
                    }}
                  />
                ) : (
                  ''
                )}
              </Form.Item>
              <Form.Item {...tailFormItemLayout}>
                <Button
                  loading={loginProgress}
                  type="primary"
                  htmlType="submit"
                >
                  Login
                </Button>
              </Form.Item>
            </Form>
            <Text>
              Don't have an account <Link href="/registration">Create one</Link>
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
