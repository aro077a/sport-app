import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import { addPlayer } from '../store/addplayer/action';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/style.scss';
import { generateId } from '../utils/helpers';
import { Form, Input, Button } from 'antd';

function AddPlayer(props) {
  const [form] = Form.useForm();
  const [vehicle, setVehicle] = useState([]);
  const [positions, setPositions] = useState({
    pg: false,
    sg: false,
    sf: false,
    pf: false,
    c: false,
  });

  const formRef = useRef(null);
  const checkboxChange = ({ target: { name, checked, value } }) => {
    setPositions({
      ...positions,
      [name]: checked,
    });
    if (vehicle.includes(value)) {
      setVehicle(vehicle.filter((v) => v !== value));
    } else {
      setVehicle([...vehicle, value]);
    }
  };

  const onSubmit = (values) => {
    const { firstName, lastName } = values;
    props.addPlayer({
      fullName: firstName + ' ' + lastName,
      id: generateId(),
      vehicle,
    });
    setVehicle([]);
    setPositions({
      pg: false,
      sg: false,
      sf: false,
      pf: false,
      c: false,
    });
    formRef.current.resetFields();
  };

  const validation = (message, required = true) => ({
    message,
    required,
  });

  const { c, pf, pg, sf, sg } = positions;
  return (
    <div className='composeTeam p-4'>
      <div className='personAdd'>
        <Form name='validate_other' onFinish={onSubmit} ref={formRef}>
          <Form.Item
            name='firstName'
            label='First Name'
            rules={[validation('The First Name is required')]}
          >
            <Input name='firstName' />
          </Form.Item>
          <Form.Item
            name='lastName'
            label='Last Name'
            rules={[validation('The Last Name is required')]}
          >
            <Input name='lastName' />
          </Form.Item>
          <Form.Item
            name='height'
            label='Height'
            rules={[validation('The Height is required')]}
          >
            <Input name='height' />
          </Form.Item>
          <div className='position mt-3 mb-3'>
            <legend>Position:</legend>
            <div className='positFlax'>
              <div>
                <input
                  type='checkbox'
                  id='vehicle1'
                  name='pg'
                  value='The point guard (PG)'
                  className='mr-2'
                  checked={pg}
                  onChange={checkboxChange}
                />
                <label htmlFor='vehicle1'>The point guard (PG)</label>
                <br />
                <input
                  type='checkbox'
                  id='vehicle2'
                  name='sg'
                  value='The shooting guard (SG)'
                  className='mr-2'
                  checked={sg}
                  onChange={checkboxChange}
                />
                <label htmlFor='vehicle2'>The shooting guard (SG)</label>
                <br />
                <input
                  type='checkbox'
                  id='vehicle3'
                  name='sf'
                  value='The small forward (SF)'
                  className='mr-2'
                  onChange={checkboxChange}
                  checked={sf}
                />
                <label htmlFor='vehicle3'>The small forward (SF)</label>
              </div>
              <div>
                <input
                  type='checkbox'
                  id='vehicle4'
                  name='pf'
                  value='The power forward (PF)'
                  className='mr-2'
                  onChange={checkboxChange}
                  checked={pf}
                />
                <label htmlFor='vehicle4'>The power forward (PF)</label>
                <br />
                <input
                  type='checkbox'
                  id='vehicle5'
                  name='c'
                  value='The center (C)'
                  className='mr-2'
                  onChange={checkboxChange}
                  checked={c}
                />
                <label htmlFor='vehicle5'>The center (C)</label>
              </div>
            </div>
          </div>
          <Form.Item
            className='submitContent'
            wrapperCol={{ span: 12, offset: 10 }}
          >
            <Button
              onClick={() => form.resetFields()}
              type='primary'
              htmlType='submit'
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

const mapDispatch = {
  addPlayer,
};

const mapState = (state) => {
  return {
    players: state.addPlayer.players,
  };
};

export default connect(mapState, mapDispatch)(AddPlayer);
