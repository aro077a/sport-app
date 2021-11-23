import React, { useState } from 'react';
import { Modal, Button, Radio, InputNumber, Form, Input } from 'antd';
import './style.scss';

const AddRecord = ({ addRecord }) => {
  const [visible, setVisible] = useState(false);

  const validation = (message, required = true) => ({
    message,
    required,
  });

  const onFinish = (values) => {
    addRecord(values);
    setVisible(false);
  };
  return (
    <div className='add-record-content'>
      <Button type='primary' ghost onClick={() => setVisible(true)}>
        Add Record
      </Button>
      <Modal
        className='form-modal'
        title='Add Record'
        onCancel={() => setVisible(false)}
        visible={visible}
        footer={null}
      >
        <Form name='validate_other' onFinish={onFinish}>
          <Form.Item
            name='firstName'
            label='First Name'
            rules={[validation('The First Name is required')]}
            value='aaa'
          >
            <Input />
          </Form.Item>
          <Form.Item
            name='lastName'
            label='Last Name'
            rules={[validation('The Last Name is required')]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name='superheroName'
            label='Superhero Name'
            rules={[validation('The Superhero Name is required')]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            type='email'
            name='email'
            label='Email'
            rules={[{ ...validation('Is not valid Email'), type: 'email' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name='age'
            label='Age'
            rules={[validation('The Age is required')]}
          >
            <InputNumber min={5} max={100} />
          </Form.Item>
          <Form.Item
            name='gender'
            label='Gender'
            rules={[validation('The Gender is required')]}
          >
            <Radio.Group>
              <Radio value='M'>Male</Radio>
              <Radio value='F'>Female</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item wrapperCol={{ span: 12, offset: 10 }}>
            <Button type='primary' htmlType='submit'>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default AddRecord;
