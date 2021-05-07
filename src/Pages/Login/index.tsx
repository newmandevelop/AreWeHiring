import React, { useState, useEffect } from 'react';
import './index.scss';
import { Actions } from '../SignUp/actions';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../reducers';
import { Form, Input, Button, Typography, notification } from 'antd';
const { Title, Text, Link } = Typography;
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
const Login = (props: any) => {
  const [form] = Form.useForm();
  let dispatch = useDispatch();
  let history = useHistory();
  const {
    loginErrorMessage,
    loginFailure,
    loginSuccess,
    loginProgress,
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
    dispatch(
      Actions.loginProgress({
        login: values,
      }),
    );
  };

  useEffect(() => {
    if (loginSuccess) {
      onReset();
      openNotificationWithIcon('success', 'Login Successfully');
      history.push('/');
    } else if (loginFailure) {
      openNotificationWithIcon('error', loginErrorMessage);
    }
  }, [loginFailure, loginSuccess]);
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
                  {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                  },
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
