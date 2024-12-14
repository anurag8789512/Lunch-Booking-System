import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Alert, Spin, Card, Button, Space, Typography, Divider } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const MenuByDate = () => {
  const { date } = useParams();
  const [menu, setMenu] = useState({ lunchMenu: [], snackMenu: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMenuByDate = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:8000/menu");
        const data = response.data;

        const menuForDate = data.find((item) => item.date === date);

        if (menuForDate) {
          setMenu({
            lunchMenu: menuForDate.lunchItems || [],
            snackMenu: menuForDate.snacks || [],
          });
        } else {
          setError("No menu available for the selected date.");
        }
      } catch (error) {
        console.error("Error fetching menu data:", error);
        setError("Error fetching menu data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchMenuByDate();
  }, [date]);

  const handleDateChange = (date) => {
    if (date) {
      const formattedDate = date.format("YYYY-MM-DD");
      navigate(`/menu/${formattedDate}`);
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="container mx-auto p-6">
      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        <Button
          icon={<ArrowLeftOutlined />}
          onClick={handleBack}
          style={{ marginBottom: "16px" }}
        >
          Back
        </Button>
        <Title level={2} className="text-center text-red-600">
          Menu for {date}
        </Title>
        {error && <Alert message={error} type="error" className="mb-8" />}
        {loading ? (
          <div className="flex justify-center items-center min-h-screen">
            <Spin size="large" />
          </div>
        ) : (
          <div>
            <Divider orientation="left">
              <Title level={3} className="text-red-600">
                Lunch
              </Title>
            </Divider>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {menu.lunchMenu.length > 0 ? (
                menu.lunchMenu.map((item, index) => (
                  <Card
                    key={index}
                    className="shadow-md hover:shadow-lg transition-shadow"
                  >
                    <Text className="text-gray-800">{item}</Text>
                  </Card>
                ))
              ) : (
                <Card className="shadow-md">
                  <Text className="text-gray-800">
                    No lunch menu available for this date.
                  </Text>
                </Card>
              )}
            </div>
            <Divider orientation="left">
              <Title level={3} className="text-red-600">
                Snacks
              </Title>
            </Divider>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {menu.snackMenu.length > 0 ? (
                menu.snackMenu.map((item, index) => (
                  <Card
                    key={index}
                    className="shadow-md hover:shadow-lg transition-shadow"
                  >
                    <Text className="text-gray-800">{item}</Text>
                  </Card>
                ))
              ) : (
                <Card className="shadow-md">
                  <Text className="text-gray-800">
                    No snack menu available for this date.
                  </Text>
                </Card>
              )}
            </div>
          </div>
        )}
      </Space>
    </div>
  );
};

export default MenuByDate;
