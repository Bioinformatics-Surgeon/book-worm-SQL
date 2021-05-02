import React, { useState, useEffect, Children } from 'react';
import { Modal } from 'antd';

const UpdateWordModal = ({
    handleCancel,
    children,
    visible,
    word,
    handleUpdate,
}) => {
    console.log('VISIBLE: ', visible);
    return (
        <Modal
            title={`Update ${word.name}`}
            visible={visible}
            onOk={handleUpdate}
            onCancel={handleCancel}
            okText="Update Word"
        >
            {children}
        </Modal>
    );
};

export default UpdateWordModal;
