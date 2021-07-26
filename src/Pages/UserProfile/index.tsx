import React from "react";
import DummyProfile from "../../assets/dummy-profile.png"
import { Row, Col, Divider, Tag } from 'antd';
import { Pie } from '@ant-design/charts';

import {
    EnvironmentOutlined,
    MessageOutlined,
    CheckSquareOutlined,
    PercentageOutlined,
    DollarOutlined,
    ShoppingOutlined,
    ClockCircleOutlined,
    SafetyCertificateOutlined
} from '@ant-design/icons'
export default function () {

    const data = {
        name: "John Smith",
        tags: [
            { name: "Litigation", color: "purple", value: 35 },
            { name: "Real State", color: "green", value: 35 },
            { name: "Business", color: "orange", value: 40 }
        ],
        image: DummyProfile,
        date: "October 24, 2018",
        email: "johnsmith@gmail.com",
        licenseDuration: "10 years",
        description: "Believue attorney Maxiam Lissak's practice focuses on business, real state, and tort litigation. Mr. Lissak has successfully represented clients in real estate, commercial and property disputes. Prior to becoming an attorney Maxim spent over 17 year in banking. For the last 10 years of his banking career Maxim spent as VP in commercial leading.",
        achievements: [
            { name: "Job Success", value: "100%", icon: PercentageOutlined, color: 'blue' },
            { name: "Total Earned", value: "$100k+", icon: DollarOutlined, color: 'orange' },
            { name: "Jobs", value: 450, icon: ShoppingOutlined, color: 'red' },
            { name: "Hours Worked", value: 4500, icon: ClockCircleOutlined, color: 'green' },
            { name: "Specializes in", value: "Real State", icon: SafetyCertificateOutlined, color: 'purple' }
        ]
    }

    const chartConfig = {
        appendPadding: 10,
        data: data.tags,
        angleField: 'value',
        colorField: 'name',
        radius: 1,
        innerRadius: 0.64,
        interactions: [
            { type: 'element-selected' },
            { type: 'element-active' },
            { type: 'pie-statistic-active' },
        ],
    };
    return (
        <Row style={{ marginTop: '1rem', padding: '2rem', backgroundColor: 'white' }} gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={4}>
                <div>
                    <img src={data.image} style={{ width: '100%' }} />
                </div>
            </Col>

            <Col className="gutter-row" span={20}>
                <Row>
                    <Row>
                        <Col style={{ margin: '2px' }} className="gutter-row" span={24}>
                            <h5>{data.name}</h5>
                        </Col>
                    </Row>
                    <Row style={{ marginLeft: '2rem' }}>
                        {
                            data.tags.map((tag) => {
                                return <Col span={8}>
                                    <Tag style={{ fontSize: '15px' }} color={tag.color}>
                                        {tag.name}
                                    </Tag>
                                </Col>

                            })
                        }
                    </Row>
                </Row>
                <br />
                <Row>
                    {/* <Col span={24}> */}
                    <Row>
                        <Col span={24}>
                            <Row>
                                <Col span={2}><EnvironmentOutlined /></Col>
                                <Col span={20}>{data.date}</Col>
                            </Row>
                        </Col>
                        <Col span={24}>
                            <Row>
                                <Col span={2}><MessageOutlined /></Col>
                                <Col span={20}>{data.email}</Col>
                            </Row>
                        </Col>
                        <Col span={24}><Row>
                            <Col span={2}><CheckSquareOutlined /></Col>
                            <Col span={20}>Licensed for {data.licenseDuration}</Col>
                        </Row></Col>
                    </Row>
                </Row>
                <br />
                <Row>
                    <Col span={24}>
                        {data.description}
                    </Col>
                </Row>
            </Col>
            <Divider />
            <Col span={24}>
                <Row justify="space-around">
                    {
                        data.achievements.map(achievement => {
                            return <Col xs={24} md={8} lg={4} style={{ marginTop: '2rem' }}>
                                <Row style={{ alignItems: 'center' }}>
                                    <Col lg={6} xs={4}>
                                        <achievement.icon style={{ fontSize: '2em', color: `${achievement.color}` }} />
                                    </Col>
                                    <Col lg={18} xs={20}>
                                        <Row>
                                            <Col span={24}><h5>{achievement.value}</h5></Col>
                                        </Row>
                                        <Row>
                                            <Col span={24}>{achievement.name}</Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        })
                    }
                </Row>
            </Col>
            <Divider />
            <Col span={24}>
                <h5>PRACTICE AREAS</h5>
            </Col>
            <Col span={24}>
                <Pie style={{ width: '420px' }} {...chartConfig} />
            </Col>
        </Row>
    )
}