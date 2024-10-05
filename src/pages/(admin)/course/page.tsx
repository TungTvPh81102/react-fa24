/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Button,
  Image,
  message,
  Modal,
  Popconfirm,
  Space,
  Spin,
  Table,
} from "antd";
import { Link, useNavigate } from "react-router-dom";
import Title from "../../../components/Typography/Title";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import api from "../../../api";
import { IconCircle, IconEdit, IconEye } from "../../../components/icon";

interface DataType {
  id: number | string;
  key: string; // Unique identifier for each course
  name: string;
  age: number; // Assuming you don't need this field for the courses
  address: string; // Assuming you don't need this field for the courses
  tags: string[]; // Assuming you don't need this field for the courses
  image: string; // It can be a single image or an array of images
  status: number; // Status field (1: Active, 0: Inactive)
  description?: string; // Assuming the course has a description
  level?: string;
  slug?: string;
}

const CoursePage = () => {
  const nav = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<DataType | null>(null);
  const queryClient = useQueryClient();

  const handleAddLessonClick = () => {
    nav(`/admin/course/update-content?slug=${selectedCourse?.slug}`);
  };

  const { data, isLoading } = useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      const { data } = await api.get("/courses");
      const coursesWithKeys = data.data.map((course: any) => ({
        key: course.id.toString(),
        ...course,
      }));
      return coursesWithKeys;
    },
  });

  const { mutate } = useMutation({
    mutationFn: async (id: string | number) => {
      await api.delete(`/courses/${id}`);
      return id;
    },
    onSuccess: () => {
      message.open({
        type: "success",
        content: "Xoá khoá học thành công",
      });
      queryClient.invalidateQueries({
        queryKey: ["courses"],
      });
    },
    onError: () => {
      message.open({
        type: "error",
        content: "Xoá khoá học thất bại, vui lòng thử lại",
      });
    },
  });

  const showModal = (course: DataType) => {
    console.log(course);
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setSelectedCourse(null);
  };

  const columns = [
    {
      title: "#",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Ảnh",
      dataIndex: "image",
      key: "image",
      render: (_: any, item: any) => {
        const images = Array.isArray(item?.image) ? item.image : [item?.image];
        return (
          <Space>
            {images.map((url: string, index: number) => (
              <Image
                key={`${item.key}-${index}`}
                src={url}
                width={70}
                className="rounded border"
              />
            ))}
          </Space>
        );
      },
    },
    {
      title: "Tên khoá học",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (_: any, item: any) => {
        if (item.status === 1) {
          return (
            <Button color="primary" variant="filled">
              Đang học
            </Button>
          );
        } else {
          return (
            <Button color="danger" variant="filled">
              Chờ xử lý
            </Button>
          );
        }
      },
    },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: DataType) => (
        <Space size="middle">
          <Button
            onClick={() => showModal(record)}
            color="primary"
            variant="dashed"
          >
            <IconEye />
          </Button>
          <Link to={`/admin/course/${record.key}/edit`}>
            <Button
              style={{
                borderStyle: "dashed",
                borderColor: "#faad14",
                color: "#faad14",
              }}
              variant="dashed"
            >
              <IconEdit />
            </Button>
          </Link>
          <Popconfirm
            title="Xóa sản phẩm"
            description="Bạn có chắc chắn xóa khoá học này không?"
            onConfirm={() => mutate(record.id)}
            okText="Đồng ý"
            cancelText="Không"
          >
            <Button
              style={{
                borderStyle: "dashed",
                borderColor: "#ff4d4f",
              }}
              danger
            >
              <IconCircle />
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <>
      <div className="flex">
        <Title>Danh sách khoá học</Title>
        <Link className="cursor-pointer ml-auto " to={"/admin/course/create"}>
          <Button type="primary">Thêm mới</Button>
        </Link>
      </div>
      <Spin spinning={isLoading}>
        <Table<DataType> columns={columns} dataSource={data} className="mt-4" />
      </Spin>
      <Modal
        title={"Chi tiết khoá học: " + selectedCourse?.name}
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        {selectedCourse ? (
          <div className="flex flex-col">
            <Image
              src={selectedCourse.image}
              className="w-full object-cover"
              height={200}
            />
            <p>Level: {selectedCourse.level}</p>
            <p>Mô tả: {selectedCourse.description}</p>
            <p>
              Trạng thái:{" "}
              {selectedCourse.status === 1 ? "Đang học" : "Chờ xử lý"}
            </p>
            <button
              onClick={handleAddLessonClick}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded text-center hover:bg-blue-600"
            >
              Thêm bài học
            </button>
          </div>
        ) : (
          <p>No course selected</p>
        )}
      </Modal>
    </>
  );
};

export default CoursePage;
