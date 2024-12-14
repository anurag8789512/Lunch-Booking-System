import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input, DatePicker, Card, Space } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import axios from "axios";

const FillSnack = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    console.log("Form values:", values);

    const dateString = values.date.format("YYYY-MM-DD");

    try {
      await axios.post("http://localhost:8000/snacks", {
        ...values,
        date: dateString,
      });
      navigate("/submitted-snacks", { state: { contents: values } });
    } catch (error) {
      console.error("There was an error submitting the form:", error);
    }
  };

  return (
    <div className="container mx-auto p-4 flex justify-center items-center min-h-screen">
      <Card
        title="Fill Snack Contents"
        bordered={false}
        style={{ width: "100%", maxWidth: 400 }}
        className="shadow-lg"
      >
        <Form layout="vertical" form={form} onFinish={onFinish}>
          <Form.Item
            label="Date"
            name="date"
            rules={[{ required: true, message: "Please select a date!" }]}
          >
            <DatePicker
              style={{ width: "100%" }}
              format="YYYY-MM-DD"
              className="custom-date-picker"
            />
          </Form.Item>
          <Form.List name="snacks">
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, fieldKey, ...restField }, index) => (
                  <Space
                    key={key}
                    style={{ display: "flex", marginBottom: 8 }}
                    align="baseline"
                  >
                    <Form.Item
                      {...restField}
                      name={[name]}
                      fieldKey={[fieldKey]}
                      label={`Snack ${index + 1}`}
                      rules={[
                        { required: true, message: "Please input a snack" },
                      ]}
                    >
                      <Input placeholder="Input Snack" />
                    </Form.Item>
                    <MinusCircleOutlined onClick={() => remove(name)} />
                  </Space>
                ))}
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    block
                    icon={<PlusOutlined />}
                  >
                    Add Snack
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default FillSnack;
