import React from 'react'
import {
    Form,
    notification,
    Typography,
    Descriptions,
    Avatar,
    Input,
    Pagination,
    Select
} from 'antd';
import Button from '../../../Components/Button';

const { Title } = Typography;

export default function AddStaff() {
    const [form] = Form.useForm();
    return (
        <div>
            <Form
                style={{ paddingTop: '1rem' }}
                form={form}
                name="SearchCandidate"
                layout="vertical"
            >
                <Title ellipsis={false} level={4}>
                    Add Staff Members
                </Title>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'This field is required!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
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
                    label="Confirm Password"
                    name="confirm-password"
                    dependencies={['password']}
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
                <Form.Item
                    label="First Name"
                    name="first-name"
                    rules={[
                        {
                            required: true,
                            message: 'This field is required!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Last Name"
                    name="last-name"
                    rules={[
                        {
                            required: true,
                            message: 'This field is required!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                {/* <Form.Item
                    label="User Role"
                    name="user-role"
                    rules={[
                        {
                            required: true,
                            message: 'This field is required!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item> */}
                <Form.Item
                    label="User Role"
                    name="user-role"
                    rules={[
                        {
                            required: true,
                            message: 'This field is required!',
                        },
                    ]}>
                    <Select>
                        <Select.Option value="EMPLOYERSTAFF">EMPLOYER STAFF</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    label="Company"
                    name="company"
                    rules={[
                        {
                            required: true,
                            message: 'This field is required!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <div>
                    <Button
                        // loading={candidateSearchProgress}
                        htmlType="submit"
                        name="Add Member"
                        type
                    />
                    <Button htmlType="button" />
                </div>
            </Form>
        </div>
    )
}