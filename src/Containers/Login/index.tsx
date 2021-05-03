import React, { useState } from 'react';
import './index.scss';
import { Form, Input, Button, Typography } from 'antd';
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
const Login = (props: any) => {
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };
  const [state, setState] = useState({
    email: '',
    password: '',
  });
  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setState(prevState => ({
      ...prevState,
      [id]: value,
    }));
  };
  const handleSubmitClick = (e: any) => {
    e.preventDefault();
    // if (state.password === state.confirmPassword) {
    //   sendDetailsToServer();
    // } else {
    //   props.showError('Passwords do not match');
    // }
    console.log('hello');
  };
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
                <Button type="primary" htmlType="submit">
                  Login
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
