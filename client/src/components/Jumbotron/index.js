import React from 'react';
import { Row, Col, Space, Typography } from 'antd';

const { Title } = Typography;

function Jumbotron({ headerText, handleAddWord }) {
    return (
        <Row
            style={{
                height: 100,
                paddingTop: 40,
                textAlign: 'center',
                borderRadius: '10px',
            }}
        >
            <Col span={17} offset={1}>
                <Row justify="start">
                    <Col>
                        <Title level={2}>{headerText}</Title>
                    </Col>
                </Row>
            </Col>
            <Col span={6}>
                <button
                    onClick={handleAddWord}
                    className="card-link btn btn-success"
                >
                    Add Word
                </button>
            </Col>
        </Row>
    );
}

export default Jumbotron;
