import React from 'react';
import { Form, Input, Button, notification } from 'antd';
import { authenticationService } from '@/_services';
import { history } from '@/_helpers';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const LoginPageAntd = () => {

  function onSubmit(values) {
    // console.log(values.username);
    // console.log(values.password);

    authenticationService.login(values.username, values.password)
      .then(
        user => {
          const { from } = { from: { pathname: "/" } };
          history.push(from);
        },
        error => {
          // console.log(error);
          notification.error({
            message: 'Login Error',
            description: error
          });
        });
  }

  return (
    <div>
      <div className="jumbotron">
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <div className="alert alert-info">
                Username: test<br />
                Password: test
                </div>
              <h2>Login</h2>


              <Form
                {...layout}
                name="basic"
                initialValues={{
                  username: '',
                  password: '',
                  remember: true,
                }}
                onFinish={onSubmit}
              >
                <Form.Item
                  label="Username"
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your username!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your password!',
                    },
                  ]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item {...tailLayout}>
                  <Button type="primary" htmlType="submit"> Submit</Button>
                </Form.Item>
              </Form>

            </div>
          </div>
        </div>
      </div>
    </div >

  )
}

export { LoginPageAntd }; 
