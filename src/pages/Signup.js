import React, { Component } from 'react';
import Card from '../components/Card';
import Form from '../components/Form';
import Input from '../components/Input';
import Button from '../components/Button';
import Base from '../templates/base';

class Signup extends Component {
  render() {
    return (
      <Base>
        <Card>
          <Form>
            <Input />
            <Input />
            <Button />
          </Form>
        </Card>
      </Base>
    );
  }
}

export default Signup;
