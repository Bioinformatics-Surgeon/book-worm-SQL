import React, { useState, useEffect, Children } from 'react';
import { Modal } from 'antd';

const AddWordModal = ({ showModal, children, visible }) => {
    return (
        <Modal
            title="Add A New Word"
            visible={visible}
            onOk={showModal}
            onCancel={showModal}
            okText="Add Word"
        >
            {children}
        </Modal>
    );
};

export default AddWordModal;
