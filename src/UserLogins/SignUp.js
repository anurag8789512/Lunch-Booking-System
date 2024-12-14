import React from "react";
import { Form, Input, Button, Typography, Card, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEmployee } from "../contexts/EmployeeContext";

const { Title } = Typography;

const SignUp = () => {
  const navigate = useNavigate();
  const { setEmployeeId } = useEmployee();

  const onFinish = async (values) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/employee",
        values
      );
      if (response.status === 200 && response.data.id) {
        setEmployeeId(response.data.id);
        message.success("Registration successful!");
        navigate("/login");
      } else {
        message.error("Registration failed. Please try again.");
      }
    } catch (error) {
      console.log(error);
      message.error("Registration failed. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card
        title={
          <Title level={2} className="text-center text-red-600">
            Sign Up
          </Title>
        }
        className="w-full max-w-md"
        bordered={false}
      >
        <Form onFinish={onFinish} layout="vertical">
          <Form.Item
            name="id"
            label="Employee ID"
            rules={[
              { required: true, message: "Please input your employee ID!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="first"
            label="First Name"
            rules={[
              { required: true, message: "Please input your first name!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="last"
            label="Last Name"
            rules={[
              { required: true, message: "Please input your last name!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="department"
            label="Department"
            rules={[
              { required: true, message: "Please input your department!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="role"
            label="Role"
            rules={[{ required: true, message: "Please input your role!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full">
              Sign Up
            </Button>
          </Form.Item>
        </Form>
        <div className="text-center mt-4">
          <p className="text-gray-700">Already have an account?</p>
          <Link to="/login">
            <Button type="link" className="text-red-600">
              Login
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default SignUp;
