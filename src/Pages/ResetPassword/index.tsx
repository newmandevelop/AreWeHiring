import React, { useState, useEffect } from 'react';
import './index.scss';
import { Actions } from '../SignUp/actions';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../reducers';
import ReCAPTCHA from 'react-google-recaptcha';
import { Form, Input, Button, Typography, notification } from 'antd';
const { Title, Text, Link } = Typography;

const ResetPassword = (props: any) => {
  const [form] = Form.useForm();
  //   let dispatch = useDispatch();
  //   let history = useHistory();
  //   const {
  //     forgetPasswordErrorMessage,
  //     forgetPasswordFailure,
  //     forgetPasswordSuccess,
  //     forgetPasswordProgress,
  //   } = useSelector((state: IRootState) => state.authState);
  //   const onReset = () => {
  //     form.resetFields();
  //   };
  //   const openNotificationWithIcon = (
  //     type: 'success' | 'error',
  //     description: String | null,
  //   ) => {
  //     notification[type]({
  //       message: 'Notification Title',
  //       description: description,
  //     });
  //   };

  const onFinish = (values: any) => {
    console.log(values);
    // dispatch(
    //   Actions.forgetPasswordProgress({
    //     email: values,
    //   }),
    // );
  };

  //   useEffect(() => {
  //     if (forgetPasswordSuccess) {
  //       onReset();
  //       openNotificationWithIcon('success', 'Reset Email Sent Successfully');
  //       history.push('/');
  //     }
  //     else if (forgetPasswordFailure) {
  //       openNotificationWithIcon('error', forgetPasswordErrorMessage);
  //     }
  //   }, [forgetPasswordErrorMessage, forgetPasswordFailure, forgetPasswordSuccess]);
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div className="cardWidth">
        <div className="card">
          <div className="card-body text-center">
            <Title level={2}>Password Reset</Title>
            <Form
              form={form}
              name="reset-password"
              onFinish={onFinish}
              scrollToFirstError
            >
              <Form.Item
                name="current-password"
                label="Current Password"
                rules={[
                  {
                    required: true,
                    message: 'This field is required!',
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                name="new-password"
                label="New Password"
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

              <Form.Item>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Button
                    // loading={forgetPasswordProgress}
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
export default ResetPassword;
