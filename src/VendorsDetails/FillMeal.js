import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input, DatePicker, Card, Space } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import axios from "axios";

const FillMeal = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    console.log("Form values:", values);

    const dateString = values.date.format("DD-MM-YYYY");

    try {
      await axios.post("http://localhost:8080/api/meal/single", {
        lunch: values.lunchItems,
        snack: values.snacks,
        date: dateString,
      });
      navigate("/submitted-contents", { state: { contents: values } });
    } catch (error) {
      console.error("There was an error submitting the form:", error);
    }
  };

  return (
    <div className="container mx-auto p-4 flex justify-center items-center min-h-screen">
      <Card
        title="Fill Meal Contents"
        bordered={false}
        style={{ width: "100%", maxWidth: 600 }}
        className="shadow-lg"
      >
        <Form layout="vertical" form={form} onFinish={onFinish}>
          <Form.Item
            label="Date"
            name="date"
            rules={[{ required: true, message: "Please select a date!" }]}
          >
            <DatePicker style={{ width: "100%" }} format="DD-MM-YYYY" />
          </Form.Item>

          <Form.List name="lunchItems">
            {(fields, { add, remove }) => (
              <>
                <h3>Lunch Items</h3>
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
                      label={`Lunch Item ${index + 1}`}
                      rules={[
                        {
                          required: true,
                          message: "Please input a lunch item",
                        },
                      ]}
                    >
                      <Input placeholder="Input Lunch Item" />
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
                    Add Lunch Item
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>

          <Form.List name="snacks">
            {(fields, { add, remove }) => (
              <>
                <h3>Snack Items</h3>
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

export default FillMeal;
