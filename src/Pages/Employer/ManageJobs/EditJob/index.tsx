import React, { useEffect, useState } from 'react';
import Dashboard from '../../../../Containers/Dashboard';
import { Divider, Form, Upload, notification, Typography, Space } from 'antd';
import { getAllCompanies } from '../../../../service/companies';
import styles from './index.module.scss';
import ReCAPTCHA from 'react-google-recaptcha';
import {
    UploadOutlined,
    MinusCircleOutlined,
    PlusCircleOutlined,
} from '@ant-design/icons';
import { getUserSession } from '../../../../utils/sessionStorage';
import { useSelector, useDispatch } from 'react-redux';
import { FormItem } from '../../../../Containers/FormItem/index';
import { IRootState } from '../../../../reducers';
import { Actions } from './actions';
import Button from '../../../../Components/Button';
import { searchUserByCompany } from '../../../../service/users';
import { useHistory } from 'react-router';
const { Item, List } = Form;
const { Title } = Typography;
const TEST_SITE_KEY = '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI';
const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
    },
    wrapperCol: {
        xs: { span: 24 },
    },
};
interface IRoles {
    role: string;
}
interface ICompanies {
    id: string;
    name: string;
}

interface IEditJobData {
    company: string,
    datePosted: string,
    employer: string,
    externalLink: string,
    expiryDate: string,
    headerDownloadUri: string,
    headerImage: any,
    hoursPerWork: number,
    industry: string,
    jobCategory: string,
    jobLogo: any,
    jobTags: [],
    jobType: string,
    jobUrl: string,
    location: string,
    nameOfJob: string,
    rateLowerLimit: number,
    rateUpperLimit: number,
    recruiterType: string,
    rolesAndResponsibilities: [],
    salaryLowerLimit: number,
    salaryUpperLimit: number
}
const PostJob = () => {
    let dispatch = useDispatch();
    let history = useHistory();
    const [form] = Form.useForm();
    const [companies, setCompanies] = useState<[]>([]);
    const [companyIds, setCompanyIds] = useState<[]>([]);
    const [recruiters, setRecruiters] = useState<[]>([]);
    const [recruiterIds, setRecruiterIds] = useState<[]>([]);
    let [jobTags, setJobTags] = useState("")
    let formData = new FormData();
    const {
        updateJobErrorMessage,
        updateJobFailure,
        updateJobSuccess,
        updateJobProgress,
        editJobData
    } = useSelector((state: IRootState) => state.editJob);
    const onFinish = (values: any) => {
        // const index = recruiters.findIndex(recruiter => recruiter === values.employer)
        // values.employer = recruiterIds[index]
        // let roles: string[] = [];
        // if (values.rolesAndResponsibilities)
        //     values.rolesAndResponsibilities.map((d: IRoles) => {
        //         roles.push(d.role);
        //     });
        const userData = getUserSession();
        if (userData) {
            let valueForApi = {
                nameOfJob: values.nameOfJob,
                company: values.company,
                description: values.description,
                location: values.location,
                jobType: values.jobType,
                currencySymbol: '$',
                salaryLowerLimit: values.salaryLowerLimit,
                salaryUpperLimit: values.salaryUpperLimit,
                recruiterType: values.recruiterType,
                employer: values.employer
            };
            dispatch(
                Actions.updateJobProgress({
                    jobId: editJobData.id,
                    data: valueForApi,
                }),
            );
        } else {
            alert('User Id not Present');
        }
    };

    const logoProps = {
        beforeUpload: (file: Blob) => {
            formData.append('jobLogo', file);
            return false;
        },
    };
    const headerProps = {
        beforeUpload: (file: any) => {
            formData.append('headerImage', file);
            return false;
        },
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

    const onReset = () => {
        form.resetFields();
    };

    useEffect(() => {
        if (updateJobSuccess) {
            onReset();
            openNotificationWithIcon('success', 'Job Added Successfully');
            history.push('/dashboard/employee/manage-jobs')
        } else if (updateJobFailure) {
            openNotificationWithIcon('error', updateJobErrorMessage);
        }
    }, [updateJobSuccess, updateJobFailure, updateJobErrorMessage]);

    useEffect(() => {
        const response = getAllCompanies();
        response.then((data: any) => {
            const companies: any = [];
            const ids: any = [];
            data?.data.map((company: ICompanies) => {
                companies.push(company.name);
                ids.push(company.id)
            });
            setCompanies(companies);
            setCompanyIds(ids);
        });
    }, []);

    const getAllRecruiters = async (value: string) => {
        const index = companies.findIndex((company) => company === value)
        const companyId = companyIds[index]
        const data = { company: companyId }
        const response = searchUserByCompany(data);
        response.then((data: any) => {
            const recruiters: any = [];
            const ids: any = [];
            data && data.map((recruiter: any) => {
                recruiters.push(recruiter.firstName + " " + recruiter.lastName);
                ids.push(recruiter.id)
            });
            setRecruiters(recruiters);
            setRecruiterIds(ids);
        });
    }
    useEffect(() => {
        let tags = ""
        editJobData.jobTags?.map(job => { tags += job + ", "; })
        setJobTags(tags)
        form.resetFields()
    }, [editJobData]);

    return (
        <Dashboard dashboardName="Employer">
            <Form
                {...formItemLayout}
                form={form}
                onKeyDown={e => (e.keyCode == 13 ? e.preventDefault() : '')}
                name="addCandidate"
                onFinish={onFinish}
                scrollToFirstError
            >
                <Title ellipsis={false} level={4}>
                    Edit Job Details
                </Title>
                <main className={styles.jobPostFieldWrapper}>
                    {/*Company Name Field */}
                    {FormItem({
                        name: 'company',
                        label: 'Company',
                        placeholder: 'Select Company',
                        fieldType: 'dropDown',
                        options: companies,
                        onChange: (value: string) => { getAllRecruiters(value) },
                        rules: [{ required: true, message: "This field is required" }],
                        initialValue: editJobData.company
                    })}
                    {FormItem({
                        name: 'nameOfJob',
                        label: 'Job Title',
                        type: 'text',
                        placeholder: 'Enter Job Title',
                        fieldType: 'input',
                        rules: [{ required: true, message: "This field is required" }],
                        initialValue: editJobData.nameOfJob
                    })}
                    {/* Location Field */}
                    {FormItem({
                        name: 'location',
                        label: 'Location',
                        type: 'text',
                        optional: true,
                        placeholder: 'e.g London',
                        fieldType: 'input',
                        initialValue: editJobData.location
                    })}
                    {/*Job Type Field */}
                    {FormItem({
                        name: 'jobType',
                        label: 'Job Type',
                        type: 'text',
                        placeholder: 'FULL TIME',
                        fieldType: 'dropDown',
                        options: ['FULLTIME', 'FREELANCE', 'INTERNSHIP', 'PARTTIME', 'TEMPORARY'],
                        rules: [{ required: true, message: "This field is required" }],
                        initialValue: editJobData.jobType
                    })}
                    {/* Job Category Field */}
                    {FormItem({
                        name: 'jobCategory',
                        label: 'Job Category',
                        type: 'text',
                        placeholder: 'Choose a Category',
                        fieldType: 'dropDown',
                        options: ['Accounting / Finance', 'Software', 'Automotive Jobs', 'Contruction',
                            'Construction / Facilities', 'Education Training', 'Healthcare', 'Human Resource (HR)', 'Industrial Manufacturing & Engineering',
                            'Insurance', 'Market and Customer Research', 'Program Management / Project Management',
                            'Recruiting / Talent Acquisition', 'Restaurant / Food Service', 'Sales & Marketing',
                            'Technology', 'Cyber Security', 'Software', 'Telecommunications', 'Transport and Logistics'],
                        initialValue: editJobData.jobCategory
                    })}
                    {/* Job Tags Input Field */}

                    {FormItem({
                        name: 'jobTags',
                        label: 'Job Tags',
                        optional: true,
                        placeholder: 'e.g PHP, Social Media Management',
                        fieldType: 'tagField',
                        initialValue: jobTags
                    })}
                    {/* Recruiter Type Input Field */}
                    {FormItem({
                        name: 'recruiterType',
                        label: 'Recruiter Type',
                        optional: true,
                        placeholder: 'Enter Recruiter Type',
                        fieldType: 'dropDown',
                        options: ['EMPLOYER', 'AGENCY'],
                        initialValue: editJobData.recruiterType
                    })}
                    {/* Recruiter Type Input Field */}
                    {FormItem({
                        name: 'employer',
                        label: 'Employer',
                        optional: true,
                        placeholder: 'Enter Employer',
                        fieldType: 'dropDown',
                        options: recruiters,
                        initialValue: editJobData.employer
                    })}
                    {/*Industry Input Field */}
                    {FormItem({
                        name: 'industry',
                        label: 'Industry',
                        optional: true,
                        placeholder: 'Enter Industry',
                        fieldType: 'dropDown',
                        options: [
                            'High Tech',
                            'Agriculture',
                            'Government',
                            'Arts',
                            'Construction',
                            'Consumer Goods',
                            'Corporate',
                            'Educational',
                            'Finance',
                            'Legal',
                            'Manufacturing',
                            'Media',
                            'Medical',
                            'Veterinary',
                            'Non-profit',
                            'Recreational',
                            'Service',
                            'Transportation',
                        ],
                        initialValue: editJobData.industry
                    })}
                    {/* Description Fields */}
                    {FormItem({
                        name: 'description',
                        label: 'Description',

                        fieldType: 'editor',
                        initialValue: editJobData.description
                    })}
                    {/* Roles and Responsibilities */}
                    <Form.List name="rolesAndResponsibilities">
                        {(fields, { add, remove }) => (
                            <>
                                {FormItem({
                                    icon: <PlusCircleOutlined />,
                                    label: 'Add Roles and Responsibility',
                                    optional: true,
                                    onClick: () => add(),
                                    name: 'Add Role and Responsibility',
                                    fieldType: 'button',
                                })}

                                {fields.map(({ key, name, fieldKey, ...restField }) => (
                                    <Space key={key} className={styles.space}>
                                        {FormItem({
                                            name: [name, 'role'],
                                            type: 'text',
                                            placeholder: 'Enter Role',
                                            fieldType: 'input',
                                            fieldKey: [fieldKey, 'role'],
                                        })}

                                        <MinusCircleOutlined onClick={() => remove(name)} />
                                    </Space>
                                ))}
                            </>
                        )}
                    </Form.List>
                    {/*Application Field */}
                    {/* {FormItem({
                        name: 'application',
                        label: 'Application Email',
                        type: 'text',
                        placeholder: 'j.borchardt2021@gmail.com',
                        fieldType: 'input',
                        initialValue: editJobData.
                    })} */}

                    {/*Application URL */}
                    {/* {FormItem({
                        name: 'applicationUrl',
                        label: 'Application URL',
                        type: 'text',
                        placeholder: 'https://arewehiring.com',
                        fieldType: 'input',
                        initialValue: editJobData.externalLink
                    })} */}
                    {/* Minimum rate Field */}
                    {FormItem({
                        name: 'closingDate',
                        label: 'Posting Expiration Date',
                        type: 'date',
                        optional: true,
                        placeholder: 'e.g 20',
                        fieldType: 'input',
                        initialValue: editJobData.expiryDate
                    })}
                    {/* Minimum rate Field */}
                    {FormItem({
                        name: 'openingDate',
                        label: 'Opening Date',
                        type: 'date',
                        optional: true,
                        placeholder: 'e.g 20',
                        fieldType: 'input',
                        initialValue: editJobData.datePosted
                    })}
                    {/* Minimum rate Field */}
                    {FormItem({
                        name: 'minimumRate',
                        label: 'Minimum rate/h ($)',
                        type: 'text',
                        optional: true,
                        placeholder: 'e.g 20',
                        fieldType: 'input',
                        initialValue: editJobData.rateLowerLimit
                    })}
                    {/* Upload Logo Image Button */}
                    {FormItem({
                        name: 'jobLogo',
                        fileProps: { ...logoProps },
                        label: 'Logo',
                        icon: <UploadOutlined />,
                        optional: true,
                        fileType: 'picture',
                        placeholder: 'Maximum file size: 50 MB.',
                        fieldType: 'upload',
                        btnName: 'Browse',
                    })}
                    {/* Maximum rate Field */}
                    {FormItem({
                        name: 'maximumRate',
                        label: 'Maximum rate/h ($)',
                        type: 'text',
                        optional: true,
                        placeholder: 'e.g 50',
                        fieldType: 'input',
                        initialValue: editJobData.rateUpperLimit
                    })}
                    {/* Minimum Salary Field */}
                    {FormItem({
                        name: 'salaryLowerLimit',
                        label: 'Minimum Salary/h ($)',
                        type: 'text',
                        optional: true,
                        placeholder: 'e.g 20000',
                        fieldType: 'input',
                        initialValue: editJobData.salaryLowerLimit
                    })}
                    {/* Maximum Salary Field */}
                    {FormItem({
                        name: 'salaryUpperLimit',
                        label: 'Maximum Salary/h ($)',
                        type: 'text',
                        optional: true,
                        placeholder: 'e.g 50000',
                        fieldType: 'input',
                        initialValue: editJobData.salaryUpperLimit
                    })}
                    {/* Hours Per Week Field */}
                    {FormItem({
                        name: 'hours',
                        label: 'Hours Per Week',
                        type: 'text',
                        optional: true,
                        placeholder: 'e.g 40',
                        fieldType: 'input',
                        initialValue: editJobData.hoursPerWeek
                    })}
                    {/* External "Apply For Job" LinkField */}
                    {FormItem({
                        name: 'external',
                        label: 'External "Apply For Job" Link',
                        type: 'text',
                        optional: true,
                        placeholder: 'http://',
                        fieldType: 'input',
                        initialValue: editJobData.externalLink
                    })}
                    {/* Upload Header Image Button */}
                    {FormItem({
                        name: 'headerImage',
                        fileProps: { ...headerProps },
                        label: 'Header Image',
                        optional: true,
                        icon: <UploadOutlined />,
                        placeholder: 'The header image size should be atleast 1750x425',
                        fieldType: 'upload',
                        btnName: 'Browse',
                        fileType: 'picture',
                    })}

                    <ReCAPTCHA theme="light" sitekey={TEST_SITE_KEY} />
                    <Divider />
                </main>
                <div style={{ display: 'flex' }}>
                    <Button
                        // loading={addJobProgress}
                        htmlType="submit"
                        name="Save Changes"
                        type
                    />
                    <Button htmlType="button" onClick={onReset} name="Reset" />
                </div>
            </Form>{' '}
        </Dashboard>
    );
};
export default PostJob;
