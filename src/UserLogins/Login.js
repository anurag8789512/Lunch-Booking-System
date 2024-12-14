// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Form, Input, Button, Typography, Card, message } from "antd";
// import { Link } from "react-router-dom";

// const { Title } = Typography;

// const Login = () => {
//   const navigate = useNavigate();
//   const [isAdmin, setIsAdmin] = useState(false);

//   const onFinish = (values) => {
//     const dummyEmployeeId = "12345";
//     const dummyPassword = "password";

//     if (
//       values.employeeId === dummyEmployeeId &&
//       values.password === dummyPassword
//     ) {
//       localStorage.setItem("employeeId", values.employeeId);

//       message.success("Login successful!");
//       if (isAdmin) {
//         navigate("/fill-contents");
//       } else {
//         navigate("/order");
//       }
//     } else {
//       message.error("Invalid employee ID or password!");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <Card
//         title={
//           <Title level={2} className="text-center text-red-600">
//             Login
//           </Title>
//         }
//         className="w-full max-w-md"
//         bordered={false}
//       >
//         <Form
//           onFinish={onFinish}
//           layout="vertical"
//           initialValues={{ remember: true }}
//         >
//           <Form.Item
//             name="employeeId"
//             label="Employee ID"
//             rules={[
//               { required: true, message: "Please input your employee ID!" },
//             ]}
//           >
//             <Input />
//           </Form.Item>
//           <Form.Item
//             name="password"
//             label="Password"
//             rules={[{ required: true, message: "Please input your password!" }]}
//           >
//             <Input.Password />
//           </Form.Item>
//           <Form.Item>
//             <Button type="primary" htmlType="submit" className="w-full">
//               Login
//             </Button>
//           </Form.Item>
//           <Form.Item>
//             <p className="text-center">
//               Don't have an account? <Link to="/signup">Sign Up</Link>
//             </p>
//           </Form.Item>
//         </Form>
//       </Card>
//     </div>
//   );
// };

// export default Login;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Form, Input, Button, Typography, Card, message } from "antd";
// import { Link } from "react-router-dom";

// const { Title } = Typography;

// const Login = () => {
//   const navigate = useNavigate();
//   const [isAdmin, setIsAdmin] = useState(false);

//   const onFinish = (values) => {
//     const dummyEmployeeId = "12345";
//     const dummyPassword = "password";

//     if (
//       values.employeeId === dummyEmployeeId &&
//       values.password === dummyPassword
//     ) {
//       localStorage.setItem("employeeId", values.employeeId);

//       message.success("Login successful!");
//       if (isAdmin) {
//         navigate("/fill-contents");
//       } else {
//         navigate("/order");
//       }
//     } else {
//       message.error("Invalid employee ID or password!");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <Card
//         title={
//           <Title level={2} className="text-center text-red-600">
//             Login
//           </Title>
//         }
//         className="w-full max-w-md"
//         bordered={false}
//       >
//         <Form
//           onFinish={onFinish}
//           layout="vertical"
//           initialValues={{ remember: true }}
//         >
//           <Form.Item
//             name="employeeId"
//             label="Employee ID"
//             rules={[
//               { required: true, message: "Please input your employee ID!" },
//             ]}
//           >
//             <Input />
//           </Form.Item>
//           <Form.Item
//             name="password"
//             label="Password"
//             rules={[{ required: true, message: "Please input your password!" }]}
//           >
//             <Input.Password />
//           </Form.Item>
//           <Form.Item>
//             <Button type="primary" htmlType="submit" className="w-full">
//               Login
//             </Button>
//           </Form.Item>
//           <Form.Item>
//             <p className="text-center">
//               Don't have an account? <Link to="/signup">Sign Up</Link>
//             </p>
//           </Form.Item>
//         </Form>
//       </Card>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, Typography, Card, message, Checkbox } from "antd";
import { Link } from "react-router-dom";

const { Title } = Typography;

const Login = () => {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);

  const onFinish = (values) => {
    const dummyEmployeeId = "12345";
    const dummyPassword = "password";

    if (
      values.employeeId === dummyEmployeeId &&
      values.password === dummyPassword
    ) {
      localStorage.setItem("employeeId", values.employeeId);

      message.success("Login successful!");
      if (isAdmin) {
        navigate("/admin");
      } else {
        navigate("/order");
      }
    } else {
      message.error("Invalid employee ID or password!");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card
        title={
          <Title level={2} className="text-center text-red-600">
            Login
          </Title>
        }
        className="w-full max-w-md"
        bordered={false}
      >
        <Form
          onFinish={onFinish}
          layout="vertical"
          initialValues={{ remember: true }}
        >
          <Form.Item
            name="employeeId"
            label="Employee ID"
            rules={[
              { required: true, message: "Please input your employee ID!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item name="isAdmin" valuePropName="checked">
            <Checkbox onChange={(e) => setIsAdmin(e.target.checked)}>
              Login as Admin
            </Checkbox>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full">
              Login
            </Button>
          </Form.Item>
          <Form.Item>
            <p className="text-center">
              Don't have an account? <Link to="/signup">Sign Up</Link>
            </p>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
