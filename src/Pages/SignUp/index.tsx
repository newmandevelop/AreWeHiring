import React, { useState, useEffect } from 'react';
import './index.scss';
import { Form, Input, Button, Typography, notification } from 'antd';
import { Actions } from './actions';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../reducers';
import { useHistory } from 'react-router-dom';

const { Title } = Typography;
const { Item } = Form;

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

const RegistrationForm = (props: any) => {
  const [form] = Form.useForm();
  let history = useHistory();

  let dispatch = useDispatch();
  const { signUpSuccess, signUpFailure, signUpErrorMessage } = useSelector(
    (state: IRootState) => state.authState,
  );
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
      Actions.signUpProgress({
        signUp: values,
      }),
    );
  };
  useEffect(() => {
    if (signUpSuccess) {
      onReset();
      openNotificationWithIcon('success', 'SignUp Successfully');
      history.push('/login');
    } else if (signUpFailure) {
      openNotificationWithIcon('error', signUpErrorMessage);
    }
  }, [signUpSuccess, signUpFailure, onReset, signUpErrorMessage]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '80%' }}>
        <div className="card card-2">
          <div className="card-heading"></div>

          <div className="card-body">
            <Title level={2}>Registration Form</Title>
            <Form
              {...formItemLayout}
              form={form}
              name="register"
              onFinish={onFinish}
              scrollToFirstError
            >
              <Form.Item
                name="firstName"
                label="First Name"
                rules={[
                  {
                    required: true,
                    message: 'Please input your First Name!',
                    whitespace: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="lastName"
                label="LastName"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Last Name!',
                    whitespace: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
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

              <Form.Item
                name="confirm"
                label="Confirm Password"
                dependencies={['password']}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: 'Please confirm your password!',
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error(
                          'The two passwords that you entered do not match!',
                        ),
                      );
                    },
                  }),
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                  Register
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RegistrationForm;
