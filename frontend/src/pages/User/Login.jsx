import React from "react";
import { Form, Input, Button, Checkbox, Typography, message } from "antd";
import {
  FacebookFilled,
  TwitterSquareFilled,
  InstagramFilled,
  YoutubeFilled,
} from "@ant-design/icons";
import "antd/dist/reset.css";
import { useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "@/appRedux/API/authApi";

const { Title, Paragraph, Link } = Typography;

const Login = () => {

  const navigate = useNavigate()
  const [loginUser, { isLoading }] = useLoginUserMutation()

  const onFinish = (values) => {
    try {
      const res = loginUser(values).unwrap();
      message.success("Login successful");
      navigate("/")
    } catch (error) {
      console.log(error);
      message.error("Login failed")
    }
  };

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        backgroundImage: "url('https://source.unsplash.com/1600x900/?mountain,snow')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
      }}
    >
      {/* Left Side - Welcome Text */}
      <div
        style={{
          flex: 1,
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingLeft: "60px",
        }}
      >
        <Title style={{ color: "white", fontSize: 48, marginBottom: 0 }}>
          Welcome
          <br />
          Back
        </Title>
        <Paragraph style={{ color: "#ddd", maxWidth: 400, marginBottom: 32 }}>
          It is a long established fact that a reader will be distracted by the readable
          content of a page when looking at its layout. The point of using...
        </Paragraph>
        <div style={{ display: "flex", gap: "16px", fontSize: "24px" }}>
          <FacebookFilled />
          <TwitterSquareFilled />
          <InstagramFilled />
          <YoutubeFilled />
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div
        style={{
          flex: 1,
          backgroundColor: "rgba(255, 255, 255, 0.96)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 60px",
        }}
      >
        <Title level={2} >Login  </Title>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Email Address"
            name="email"
            rules={[{ required: true, message: "Please enter your email" }]}
          >
            <Input size="large" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please enter your password" }]}
          >
            <Input.Password size="large" />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember Me</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{ backgroundColor: "#f15a24", border: "none", width: "100%" }}
              size="large"
              loading={isLoading}
            >
              Login now
            </Button>
          </Form.Item>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Link href="#">Lost your password?</Link>
          </div>

          <Paragraph style={{ marginTop: 24 }}>
            By clicking on  <span onClick={() => navigate('/register')} className="font-bold text-blue-700 hover:scale-110 underline transition-all duration-500 cursor-pointer">Sign in now</span> you agree to our{" "}
            <Link href="#">Terms of Service</Link> & <Link href="#">Privacy Policy</Link>
          </Paragraph>
        </Form>
      </div>
    </div>
  );
};

export default Login;
