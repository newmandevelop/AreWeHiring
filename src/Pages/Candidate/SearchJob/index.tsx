import React from 'react'
import { Row, Col, Form, Input } from 'antd';
import Button from '../../../Components/Button';

export default function SearchJob() {
    return (
        <Row style={{ margin: '1rem' }}>
            <Col span={6} style={{ backgroundColor: '', height: '100vh' }}>
                <Row>
                    <Col span={24}>
                        <h6>Filter By</h6>
                    </Col>
                </Row>
                <Row>
                    <Col span={20}>
                        <Form.Item
                            label="Job Name"
                            name="where"
                            rules={[
                                {
                                    required: true,
                                    message: 'This field is required!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={20}>
                        <Form.Item
                            label="Location"
                            name="location"
                            rules={[
                                {
                                    required: true,
                                    message: 'This field is required!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={20}>
                        <Form.Item
                            label="Job Type"
                            name="jobType"
                            rules={[
                                {
                                    required: true,
                                    message: 'This field is required!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={20}>
                        <Form.Item
                            label="Category"
                            name="category"
                            rules={[
                                {
                                    required: true,
                                    message: 'This field is required!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={20}>
                        <Form.Item
                            label="Date Posted"
                            name="datePosted"
                            rules={[
                                {
                                    required: true,
                                    message: 'This field is required!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
            </Col>
            <Col span={18} style={{ backgroundColor: 'white', height: '100vh' }}>
                <Row>
                    <Col span={24} style={{ margin: '1rem' }}>
                        <h4>
                            Advanced Search
                        </h4>
                    </Col>
                </Row>

                <Row style={{ marginLeft: '1rem' }}>
                    <Col span={20}>
                        <Form.Item
                            // label="Job Search"
                            name="jobSearch"
                            rules={[
                                {
                                    required: true,
                                    message: 'This field is required!',
                                },
                            ]}
                        >
                            <Input placeholder="Search for jobs" />
                        </Form.Item>
                    </Col>
                </Row>
                <Row style={{ marginLeft: '1rem' }}>
                    <Col span={20}>

                        <Button
                            // loading={candidateSearchProgress}
                            htmlType="submit"
                            name="Search"
                            type
                        />
                        <Button htmlType="button" />

                    </Col>
                </Row>
            </Col>
        </Row>
    )
}