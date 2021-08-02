import React from 'react'
import { Row, Col, Form, Input } from 'antd';
import Button from '../../../Components/Button';
import { FormItem } from '../../../Containers/FormItem/index';
import JobCard from '../../../Components/JobCard';

export default function SearchJob() {
    const allJobsData: any = [
        {
            nameOfJob: "Senior Python Developer",
            jobType: "FREELANCE",
            location: "Seattle, Washington",
            employer: "Jackson Company",
            currencySymbol: "$",
            datePosted: "Aug 2nd 2021",
            description: "",
            id: "1",
            salaryLowerLimit: "20000",
            salaryUpperLimit: "50000"
        },
        {
            nameOfJob: "Senior Designer",
            jobType: "FULL TIME",
            location: "Seattle, Washington",
            employer: "Jackson Company",
            currencySymbol: "$",
            datePosted: "Aug 2nd 2021",
            description: "",
            id: "1",
            salaryLowerLimit: "20000",
            salaryUpperLimit: "50000"
        },
        {
            nameOfJob: "Senior Developer",
            jobType: "FREELANCE",
            location: "Seattle, Washington",
            employer: "Jackson Company",
            currencySymbol: "$",
            datePosted: "Aug 2nd 2021",
            description: "",
            id: "1",
            salaryLowerLimit: "20000",
            salaryUpperLimit: "50000"
        },
        {
            nameOfJob: "Senior Developer",
            jobType: "FREELANCE",
            location: "Seattle, Washington",
            employer: "Jackson Company",
            currencySymbol: "$",
            datePosted: "Aug 2nd 2021",
            description: "",
            id: "1",
            salaryLowerLimit: "20000",
            salaryUpperLimit: "50000"
        }
    ]
    return (
        <Row style={{ margin: '1rem' }}>
            <Col span={6} style={{ backgroundColor: '' }}>
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
                        <p>Job Category:</p>
                        {FormItem({
                            name: 'jobCategory',
                            // label: 'Job Category',
                            type: 'text',
                            placeholder: 'Choose a Category',
                            fieldType: 'dropDown',
                            options: ['Accounting / Finance', 'Software', 'Automotive Jobs', 'Contruction',
                                'Construction / Facilities', 'Education Training', 'Healthcare', 'Human Resource (HR)', 'Industrial Manufacturing & Engineering',
                                'Insurance', 'Market and Customer Research', 'Program Management / Project Management',
                                'Recruiting / Talent Acquisition', 'Restaurant / Food Service', 'Sales & Marketing',
                                'Technology', 'Cyber Security', 'Software', 'Telecommunications', 'Transport and Logistics'],
                            rules: [
                                {
                                    required: true,
                                    message: 'This field is required!',
                                },
                            ]
                        })}
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
            <Col span={18} style={{ backgroundColor: 'white' }}>
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
                <Row justify="space-around">
                    {allJobsData.map((job: any) => {
                        return (
                            <Col
                                key={job.id}
                                // className={styles.column}
                                md={9}
                                lg={7}
                                sm={22}
                                xs={22}
                            >
                                <JobCard
                                    name={job.nameOfJob}
                                    type={job.jobType}
                                    location={job.location}
                                    employer={job.employer}
                                    currencySymbol={job.currencySymbol}
                                    datePosted={job.datePosted}
                                    description={job.description}
                                    id={job.id}
                                    salaryLowerLimit={job.salaryLowerLimit}
                                    salaryUpperLimit={job.salaryUpperLimit}
                                />
                            </Col>
                        );
                    })}
                </Row>
            </Col>
        </Row>
    )
}