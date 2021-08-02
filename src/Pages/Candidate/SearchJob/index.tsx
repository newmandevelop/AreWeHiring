import React, { useState, useEffect } from 'react'
import { Row, Col, Form, Input } from 'antd';
import Button from '../../../Components/Button';
import { FormItem } from '../../../Containers/FormItem/index';
import JobCard from '../../../Components/JobCard';
import { getAllCompanies } from '../../../service/companies';


interface ICompanies {
    id: string;
    name: string;
}

export default function SearchJob() {
    const [state, setState] = useState({})
    const [companies, setCompanies] = useState<[]>([]);

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

    useEffect(() => {
        const response = getAllCompanies();
        response.then(data => {
            const companies: any = [];
            const ids: any = [];
            data?.data.map((company: ICompanies) => {
                companies.push(company.name);
                ids.push(company.id)
            });
            setCompanies(companies);
        });
    }, []);
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
                        {FormItem({
                            name: 'company',
                            label: 'Company',
                            placeholder: 'Select Company',
                            fieldType: 'dropDown',
                            options: companies,
                            onChange: (value: string) => { setState({ ...state, company: value }) },
                            rules: [{ required: true, message: "This field is required" }]
                        })}
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
                            <Input onChange={(e) => setState({ ...state, location: { location: e.target.value } })} />
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={20}>
                        <p>Job Type:</p>
                        {FormItem({
                            name: 'jobType',
                            // label: 'Job Type',
                            type: 'text',
                            placeholder: 'FULL TIME',
                            fieldType: 'dropDown',
                            options: ['FULLTIME', 'FREELANCE', 'INTERNSHIP', 'PARTTIME', 'TEMPORARY'],
                            rules: [{ required: true, message: "This field is required" }],
                            onChange: (value: string) => {
                                value = value.toLowerCase();
                                if (value === "freelance") {
                                    setState({
                                        ...state,
                                        jobType: {
                                            freelance: true,
                                            fullTime: false,
                                            internship: false,
                                            partTime: false,
                                            temporary: false
                                        }
                                    })
                                }
                                else if (value === "fullTime") {
                                    setState({
                                        ...state,
                                        jobType: {
                                            freelance: false,
                                            fullTime: true,
                                            internship: false,
                                            partTime: false,
                                            temporary: false
                                        }
                                    })
                                }
                                else if (value === "internship") {
                                    setState({
                                        ...state,
                                        jobType: {
                                            freelance: false,
                                            fullTime: false,
                                            internship: true,
                                            partTime: false,
                                            temporary: false
                                        }
                                    })
                                }
                                setState({ ...state, jobType: { value: true } })
                            },
                        })}
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
                            onClick={() => console.log('state', state)}
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