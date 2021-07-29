import React, { useEffect, useState } from 'react'
import {
    Form,
    notification,
    Typography,
    Descriptions,
} from 'antd';
import Button from '../../../Components/Button';
import { Actions } from './actions';
import { FormItem } from '../../../Containers/FormItem/index';
import { getAllCompanies } from '../../../service/companies';
import { useSelector, useDispatch } from 'react-redux';
import { IRootState } from '../../../reducers';
import styles from './index.module.scss'

const { Title } = Typography;
interface ICompanies {
    id: string;
    name: string;
}


interface IFormValues {
    email: string;
    password: string,
    firstName: string,
    lastName: string,
    userRole: string,
    company: string
}
export default function ManageStaff() {
    const [form] = Form.useForm();
    let dispatch = useDispatch();
    const [companies, setCompanies] = useState<[]>([]);
    const [companyIds, setCompanyIds] = useState<[]>([]);

    const {
        errorMessage,
        searchUserProgress,
        searchUserSuccess,
        searchUserFailure,
        searchedUsers
    } = useSelector((state: IRootState) => state.searchStaff);
    const onFinish = (values: IFormValues) => {
        const index = companies.findIndex((company) => company === values.company)
        values.company = companyIds[index]
        dispatch(
            Actions.searchUserProgress({
                data: values,
            }),
        );
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
        const response = getAllCompanies();
        response.then(data => {
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

    useEffect(() => {
        if (searchUserSuccess) {
            if (searchedUsers.length === 0)
                openNotificationWithIcon('success', 'No Member Exists For This Company');
            else
                openNotificationWithIcon('success', 'Members Retrieved Successfully');
        } else if (searchUserFailure) {
            openNotificationWithIcon('error', errorMessage);
        }
    }, [searchUserSuccess, searchUserFailure, errorMessage]);


    return (
        <div>
            <Form
                style={{ paddingTop: '1rem' }}
                form={form}
                name="SearchCandidate"
                layout="vertical"
                onFinish={onFinish}
            >
                <Title ellipsis={false} level={4}>
                    Manage Staff Members
                </Title>


                {FormItem({
                    name: 'company',
                    rules: [
                        {
                            required: true,
                            message: 'This field is required!',
                        },
                    ],
                    label: 'Company',
                    placeholder: 'Select Company',
                    fieldType: 'dropDown',
                    options: companies,
                })}

                <div>
                    <Button
                        // loading={candidateSearchProgress}
                        htmlType="submit"
                        name="Search Member"
                        type
                    />
                    <Button htmlType="button" />
                </div>
            </Form>

            {searchedUsers &&
                searchedUsers.map((user: any) => {
                    return (
                        <div className={styles.description}>
                            <div style={{ padding: '1rem' }}>
                                <Descriptions
                                    title={
                                        `Full Name: ${user.firstName} ${user.lastName}`
                                    }
                                >
                                    <Descriptions.Item label="Email">
                                        {user.email}
                                    </Descriptions.Item>
                                    <Descriptions.Item label="Role">
                                        {user.userRole}
                                    </Descriptions.Item>
                                    <Descriptions.Item label="Date Created">
                                        {user.dateCreated}
                                    </Descriptions.Item>
                                    {/* <Descriptions.Item>{candidate.description}</Descriptions.Item> */}
                                </Descriptions>
                            </div>
                        </div>
                    );
                })}
        </div>
    )
}