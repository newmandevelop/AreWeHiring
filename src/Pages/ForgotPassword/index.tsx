import React, { useState, useEffect } from 'react';
import './index.scss';
import { Actions } from '../SignUp/actions';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../reducers';
import ReCAPTCHA from 'react-google-recaptcha';
import { Form, Input, Button, Typography, notification } from 'antd';
const { Title, Text, Link } = Typography;

const ForgotPassword = (props: any) => {
  const [form] = Form.useForm();
  let dispatch = useDispatch();
  let history = useHistory();
  const {
    forgetPasswordErrorMessage,
    forgetPasswordFailure,
    forgetPasswordSuccess,
    forgetPasswordProgress,
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
    console.log(values)
    dispatch(
      Actions.forgetPasswordProgress({
        email: values,
      }),
    );
  };

  useEffect(() => {
    if (forgetPasswordSuccess) {
      onReset();
      openNotificationWithIcon('success', 'Reset Email Sent Successfully');
      history.push('/');
    } 
    else if (forgetPasswordFailure) {
      openNotificationWithIcon('error', forgetPasswordErrorMessage);
    }
  }, [forgetPasswordErrorMessage, forgetPasswordFailure, forgetPasswordSuccess]);
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div className="cardWidth">
        <div className="card card-2">
          <div className="card-heading"></div>

          <div className="card-body text-center" style={{}}>
            <Title level={2}>Forgot your Password?</Title>
            <Text>
              Tell us your email address, and we'll get you back on track in no
              time
            </Text>
            <Form
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
              <Form.Item>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Button
                    loading={forgetPasswordProgress}
                    type="primary"
                    htmlType="submit"
                  >
                    Reset Password
                  </Button>
                </div>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ForgotPassword;
