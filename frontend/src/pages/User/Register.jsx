import React from "react";
import { Form, Input, Button, Checkbox, Typography } from "antd";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;


const Register = () => {


  const navigate = useNavigate()

  const onFinish = (values) => {
    console.log("Registration values:", values);

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded shadow-lg">
        <Title level={2} style={{ textAlign: "center" }}>
          Create Account  <br /><span onClick={() => navigate('/login')} className="text-sm underline hover:text-blue-700 cursor-pointer ">You have already acccount</span>
        </Title>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Full Name"
            name="name"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Enter a valid email" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please enter a password" }]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            label="Confirm Password"
            name="confirmPassword"
            dependencies={["password"]}
            hasFeedback
            rules={[
              { required: true, message: "Please confirm your password" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  return value === getFieldValue("password")
                    ? Promise.resolve()
                    : Promise.reject("Passwords do not match");
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="agree"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value ? Promise.resolve() : Promise.reject("You must agree"),
              },
            ]}
          >
            <Checkbox>
              I agree to the <a href="#">Terms and Conditions</a>
            </Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit"
              block>
              Register
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Register;
