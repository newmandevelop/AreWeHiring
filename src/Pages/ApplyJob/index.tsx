import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './index.module.scss';
import moment from 'moment';
import InputField from '../../Components/InputField';
import { IRootState } from '../../reducers';
import { useDispatch, useSelector } from 'react-redux';
import { Actions } from './actions';
import { FormItem } from '../../Containers/FormItem';
import {
  Typography,
  Row,
  Divider,
  Col,
  Tag,
  Upload,
  message,
  DatePicker,
  Form,
  notification
} from 'antd';

import Button from '../../Components/Button/index';
const { Text, Title, Paragraph } = Typography;
const { Dragger } = Upload;
const { Item } = Form;


const ApplyJob = () => {



  const [form] = Form.useForm();
  var formData = new FormData();
  const {
    applyJobSuccess,
    applyJobFailure,
    applyJobErrorMessage,
    applyJobProgress, } = useSelector((state: IRootState) => state.applyJob)

  const dispatch = useDispatch()
  const { state }: any = useLocation();
  const { data } = state;




  const onFinish = (values: any) => {
    let valueForApi = {
      email: sessionStorage.getItem('hiring_user'),
      jobName: data.nameOfJob,
      dateApplied: moment(new Date()).format('YYYY-MM-D'),
      dateYouCanStart: moment(values.dateYouCanStart).format('YYYY-MM-D'),
      salaryExpected: values.salaryExpected,
      jobId: data.id

    }

    formData.append('application', JSON.stringify(valueForApi));
    console.log(formData)



    dispatch(
      Actions.applyJobProgress({
        data: formData,
      }),
    );

  }


  const props = {
    name: 'file',
    multiple: true,
    beforeUpload: (file: Blob) => {
      formData.append('applicationFile', file);
      return false;
    },
    onChange(info: any) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log("File", info.file, "FileInfo", info.fileList);
      }
      if (status === 'done') {

        //formData.append('applicationFile', "file");
        console.log("Done");
        console.log(formData)
        message.success(`Done ${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
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

  useEffect(() => {
    if (applyJobSuccess) {
      //onReset();
      openNotificationWithIcon('success', 'Job Applied Successfully');
    } else if (applyJobFailure) {
      openNotificationWithIcon('error', applyJobErrorMessage);
    }
  }, [
    applyJobSuccess,
    applyJobFailure,
    applyJobErrorMessage,
  ]);
  return (
    <div className={styles.applyJobWrapper}>
      <div className={styles.jobDescription}>
        <div className={styles.TitleContainer}>
          <Title className={styles.title} level={3}>
            Job Details
          </Title>
        </div>
        <Divider className={styles.Divider} />
        <div className={styles.detailsContainer}>
          <Row>
            <Col lg={18} md={16} sm={24} xs={24}>
              <Title level={4} className={styles.jobName}>
                {data.nameOfJob}
              </Title>
              <div className={styles.tagContainer}>
                <Tag className={styles.tag}>Front-End Development</Tag>
                <Text className={styles.date}>
                  Posted {moment(data.datePosted).format('MMM Do YYYY')}
                </Text>
              </div>
              <Text className={styles.jobNameText}>{data.nameOfJob}</Text>
              <Paragraph
                className={styles.summary}
                ellipsis={{
                  rows: 3,
                  expandable: true,
                  symbol: (
                    <a className={styles.moreSymbol} aria-label="Expand">
                      More
                    </a>
                  ),
                }}
              >
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                written in 45 BC. This book is a treatise on the theory of
                ethics, very popular during the Renaissance. The first line of
                Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
                in section 1.10.32. The standard chunk of Lorem Ipsum used since
                the 1500s is reproduced below for those interested. Sections
                1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by
                Cicero are also reproduced in their exact original form,
                accompanied by English versions from the 1914 translation by H.
                Rackham.
              </Paragraph>
            </Col>
            <Col lg={1} md={1} sm={24} xs={24}>
              <Divider
                type="vertical"
                style={{ width: '100%', height: '100%' }}
              />
            </Col>
            <Col lg={5} md={7} sm={24} xs={24}>
              <div className={styles.attributes}>
                <Text className={styles.attrHeading}>
                  <i
                    style={{ color: '#000000', marginRight: '0.8rem' }}
                    className="far fa-building"
                  ></i>
                  Company Name
                </Text>
                <Text className={styles.attrText}>{data.company}</Text>
              </div>
              <div className={styles.attributes}>
                <Text className={styles.attrHeading}>
                  <i
                    style={{ color: '#000000', marginRight: '0.8rem' }}
                    className="far fa-clock"
                  ></i>
                  Expiry Date
                </Text>
                <Text className={styles.attrText}>
                  {' '}
                  {moment(data.expiryDate).format('MMM Do YYYY')}
                </Text>
              </div>
              <div className={styles.attributes}>
                <Text className={styles.attrHeading}>
                  <i
                    style={{ color: '#000000', marginRight: '0.8rem' }}
                    className="fal fa-money-bill-wave"
                  ></i>
                  Salary Range
                </Text>
                <Text
                  className={styles.attrText}
                >{`$${data.salaryLowerLimit}-$${data.salaryUpperLimit}`}</Text>
              </div>
            </Col>
          </Row>

          <Divider />

          <div className={styles.skills}>
            <Title className={styles.jobName} level={4}>
              Skills
            </Title>
            <div>
              <Tag className={styles.tag}>Web Application</Tag>
              <Tag className={styles.tag}>Prototype</Tag>
              <Tag className={styles.tag}>CSS</Tag>
              <Tag className={styles.tag}>HTML</Tag>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.jobApply}>
        <div className={styles.TitleContainer}>
          <Title className={styles.title} level={3}>
            Introduce Yourself
          </Title>
          <Text className={styles.whatText}>
            What makes you a strong candidate for this job ?
          </Text>
        </div>
        <Divider />


        <Form
          form={form}
          name="applyJob"
          onFinish={onFinish}
          scrollToFirstError>
          <main>
            <div className={styles.messageContainer}>
              <Text className={styles.messageTitle}>Message To Client</Text>
              <Text className={styles.messageText}>
                Describe some of your experiences that makes you a great candidate
                for this job, include any questions you may have about this job, or
                even request a video call
          </Text >

              <Item name="message">
                <InputField
                  textarea
                  type="text"
                  name="message"
                  placeholder="Add Cover Letter"
                />
              </Item>



              <Text className={styles.SalaryTitle}>Salary Expected</Text>
              <Item name="salaryExpected">
                <InputField
                  name="salaryExpected"
                  type="text"
                  placeholder={`$${data.salaryLowerLimit} - $${data.salaryUpperLimit}`}
                />
              </Item>

              <Text className={styles.DatePickerTitle}>Pick Joining Date</Text>
              <Item name="dateYouCanStart">
                <DatePicker className={styles.DatePicker} onChange={e => { new Date() }}></DatePicker>

              </Item>
              <Text className={styles.Attachments}>Attachments</Text>



              <Item name="">
                <Dragger className={styles.dragger} {...props}>
                  <p className={styles.dragText}>
                    drag or upload files here
            </p>
                </Dragger>
              </Item>
              <Text className={styles.draggerText}>
                You may attach upto 10 files under the size of{' '}
                <strong>25 MB</strong> each, include work samples or other documents
            to support your application. Do not attach your resume.
          </Text>
            </div>
          </main>

          <Divider />
          <div className={styles.buttonContainer}>
            <Button
              loading={applyJobProgress}
              htmlType="submit"
              name="Submit Proposal"
              type
            />
          </div>
        </Form>
      </div>
    </div >
  );
};

export default ApplyJob;
