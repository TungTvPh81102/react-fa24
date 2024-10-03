/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSearchParams } from "react-router-dom";
import Title from "../../../../components/Typography/Title";
import { Collapse, Button } from "antd";
import { IconEdit } from "../../../../components/icon";
import { DeleteOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import api from "../../../../api";

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const CourseUpdateContentPage = () => {
  const [searchParams] = useSearchParams();
  const slug = searchParams.get("slug");

  const { data } = useQuery({
    queryKey: ["course", slug],
    queryFn: async () => {
      const { data } = await api.get(`/courses?slug=${slug}`);
      console.log(data);
      return data;
    },
  });

  const handleEdit = (key: any) => {
    // Logic for editing the chapter with the given key
    console.log("Edit clicked for key:", key);
  };

  const handleDelete = (key: any) => {
    // Logic for deleting the chapter with the given key
    console.log("Delete clicked for key:", key);
  };

  const handleAddNewLecture = async () => {};

  return (
    <>
      <div className="flex justify-between">
        <Title>Cập nhật nội dung khoá học: {slug}</Title>
        <Button onClick={handleAddNewLecture} type="primary">
          Thêm chương mới
        </Button>
      </div>
      <Collapse
        expandIcon={() => null}
        className="mt-8"
        items={[
          {
            key: "1",
            label: (
              <div className="grid grid-cols-2  items-center">
                <span>Chương 1: Giới thiệu khoá học</span>
                <div className="text-right flex items-center justify-end">
                  <Button
                    icon={<IconEdit />}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleEdit("1");
                    }}
                  />
                  <Button
                    icon={<DeleteOutlined />}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete("1");
                    }}
                    danger
                    className="ml-2"
                  />
                </div>
              </div>
            ),
            children: <p>{text}</p>,
          },
        ]}
      />
    </>
  );
};

export default CourseUpdateContentPage;
