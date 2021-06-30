import React, { useState, useEffect } from 'react';
import './index.scss';
import { useHistory } from 'react-router-dom';
import { Form, Input, Button, Typography, notification } from 'antd';
import { getRole } from '../../utils/sessionStorage';
import {
  resetPassword,
  changePasswordByAdmin,
} from '../../service/authentication';
const { Title, Text, Link } = Typography;

const ResetPassword = (props: any) => {
  let role = getRole()?.toLowerCase();
  const [form] = Form.useForm();
  const [adminForm] = Form.useForm();
  let history = useHistory();
  const openNotificationWithIcon = (
    type: 'success' | 'error',
    description: String | null,
  ) => {
    notification[type]({
      message: 'Notification Title',
      description: description,
    });
  };

  const onFinish = async (values: any) => {
    console.log(values);
    try {
      const responce = await resetPassword(values);
      if (responce && responce.status === 200) {
        openNotificationWithIcon('success', 'Password Reset Successfully');
        // history.push(`/dashboard/${role}`);
      } else openNotificationWithIcon('error', 'Try again with correct values');
    } catch (error) {
      openNotificationWithIcon('error', error.responce.data.message);
    }
  };

  const onAdminFormFinish = async (values: any) => {
    try {
      const responce = await changePasswordByAdmin(values);
      if (responce && responce.status === 200) {
        openNotificationWithIcon('success', 'Password Reset Successfully');
        // history.push(`/dashboard/${role}`);
      } else openNotificationWithIcon('error', 'Try again with correct values');
    } catch (error) {
      openNotificationWithIcon('error', error.responce.data.message);
    }
  };
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div className="cardWidth">
        <div className="card">
          <div className="card-body text-center">
            <Title level={2}>Change Password</Title>
            <Form
              layout="vertical"
              form={form}
              name="reset-password"
              onFinish={onFinish}
              scrollToFirstError
            >
              <Form.Item
                label="Current Password"
                name="currentPassword"
                rules={[
                  {
                    required: true,
                    message: 'This field is required!',
                  },
                ]}
              >
                <Input.Password placeholder="Current Password" />
              </Form.Item>

              <Form.Item
                label="New Password"
                name="newPassword"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
                hasFeedback
              >
                <Input.Password placeholder="New Password" />
              </Form.Item>

              <Form.Item
                label="Confirm Password"
                name="confirm"
                dependencies={['new-password']}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: 'Please confirm your password!',
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('newPassword') === value) {
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
                <Input.Password placeholder="Confirm Password" />
              </Form.Item>

              <Form.Item>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Button type="primary" htmlType="submit">
                    Change Password
                  </Button>
                </div>
              </Form.Item>
            </Form>
          </div>
          <br />
          <div className="card-body text-center">
            <Title level={2}>Change Password by Admin</Title>
            <Form
              form={adminForm}
              layout="vertical"
              name="normal_login"
              className="login-form"
              onFinish={onAdminFormFinish}
            >
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: 'Please provide user email!' },
                ]}
              >
                <Input placeholder="Email" />
              </Form.Item>
              <Form.Item
                label="New Password"
                name="password"
                rules={[
                  { required: true, message: 'Please input new Password!' },
                ]}
              >
                <Input type="password" placeholder="Email" />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Change Password
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ResetPassword;
