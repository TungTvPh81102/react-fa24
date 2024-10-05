/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSearchParams } from "react-router-dom";
import Title from "../../../../components/Typography/Title";
import MuxPlayer from "@mux/mux-player-react/lazy";
import {
  Collapse,
  Button,
  Form,
  Input,
  message,
  Popconfirm,
  Skeleton,
  Select,
  Upload,
} from "antd";
import {
  IconBook,
  IconCheck,
  IconCircle,
  IconEdit,
} from "../../../../components/icon";
import {
  DeleteOutlined,
  PlusOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import api from "../../../../api";
import { useEffect, useState } from "react";
import TextArea from "antd/es/input/TextArea";

const CourseUpdateContentPage = () => {
  const [searchParams] = useSearchParams();
  const slug = searchParams.get("slug");
  const [lessons, setLessons] = useState<any[]>([]);
  const [uploading, setUploading] = useState(false);
  const [isEditLesson, setIsEditLesson] = useState(null);
  const [isEditLecture, setIsEditLecture] = useState(null);
  const [uploadUrl, setUploadUrl] = useState("");
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();

  const queryClient = useQueryClient();
  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
  const { data: courseData } = useQuery({
    queryKey: ["course", slug],
    queryFn: async () => {
      const { data } = await api.get(`/courses/${slug}`);
      return data;
    },
    enabled: !!slug,
  });

  const { data: lessonsData, isLoading } = useQuery({
    queryKey: ["course", slug, "lessons"],
    queryFn: async () => {
      const { data } = await api.get(`/courses/${slug}/lessons`);
      return data;
    },
  });

  const { mutate } = useMutation({
    mutationFn: async (id: number) => {
      await api.delete(`/lessons/${id}`);
      return id;
    },
    onSuccess: () => {
      messageApi.open({
        type: "success",
        content: "Xoá bài học thành công",
      });
      queryClient.invalidateQueries({ queryKey: ["course", slug] });
    },
    onError: () => {
      messageApi.open({
        type: "error",
        content: "Có lỗi xảy ra, vui lòng thử lại",
      });
    },
  });

  const { mutate: muteAddLesson } = useMutation({
    mutationFn: async () => {
      const { data } = await api.post("/lessons", {
        course_id: courseData.data.id,
        title: "Chương mới",
        order: lessons.length + 1,
      });

      return data;
    },
    onSuccess: () => {
      messageApi.open({
        type: "success",
        content: "Thêm chương học thành công",
      });
      queryClient.invalidateQueries({ queryKey: ["course", slug] });
    },
    onError: () => {
      messageApi.open({
        type: "error",
        content: "Có lỗi xảy ra, vui lòng thử lại",
      });
    },
  });

  const { mutate: muteAddLecture } = useMutation({
    mutationFn: async (data: any) => {
      const { data: res } = await api.post("/lectures", data);
      return res;
    },
    onSuccess: () => {
      messageApi.open({
        type: "success",
        content: "Thêm chương học thành công",
      });
      queryClient.invalidateQueries({ queryKey: ["course", slug] });
    },
    onError: () => {
      messageApi.open({
        type: "error",
        content: "Có lỗi xảy ra, vui lòng thử lại",
      });
    },
  });

  const { mutate: mutateLecture } = useMutation({
    mutationFn: async (id: number) => {
      await api.delete(`/lectures/${id}`);
      return id;
    },
    onSuccess: () => {
      messageApi.open({
        type: "success",
        content: "Xoá bài học thành công",
      });
      queryClient.invalidateQueries({ queryKey: ["course", slug] });
    },
    onError: () => {
      messageApi.open({
        type: "error",
        content: "Có lỗi xảy ra, vui lòng thử lại",
      });
    },
  });

  useEffect(() => {
    if (lessonsData) {
      setLessons(lessonsData.data);
    }

    if (isEditLesson !== null) {
      const lessonToEdit = lessons.find((lesson) => lesson.id === isEditLesson);
      if (lessonToEdit) {
        form.setFieldsValue({
          title: lessonToEdit.title,
        });
      }
    }
  }, [lessonsData, isEditLesson, lessons, form]);

  const handleEdit = (id: any) => {
    setIsEditLesson(id);
  };

  const handleClose = () => {
    form.resetFields();
    setIsEditLesson(null);
  };

  const handleDelete = (id: number) => {
    mutate(id);
  };

  const handleDeleteLecture = (id: number) => {
    mutateLecture(id);
  };

  const handleEditLecture = (id: any) => {
    setIsEditLecture(id);
  };

  const handleCloseLecture = () => {
    form.resetFields();
    setIsEditLecture(null);
  };

  const handleAddNewLesson = async () => {
    muteAddLesson();
  };

  const updateLessonMutation = useMutation({
    mutationFn: async ({ id, title }: { id: number; title: string }) => {
      await api.put(`/lessons/${id}`, { title, id });
    },
    onSuccess: () => {
      messageApi.open({
        type: "success",
        content: "Cập nhật bài học thành công",
      });
      queryClient.invalidateQueries({ queryKey: ["course", slug, "lessons"] });
      setIsEditLesson(null);
    },
    onError: () => {
      messageApi.open({
        type: "error",
        content: "Có lỗi xảy ra, vui lòng thử lại",
      });
    },
  });

  const updateLesson = async (id: number) => {
    const title = form.getFieldValue("title");
    updateLessonMutation.mutate({ id, title });
  };

  const handleAddNewLecture = async (lessonId: number, courseId: number) => {
    const data = {
      course_id: courseId,
      lesson_id: lessonId,
      title: "Tiêu đề bài học không " + Date.now(),
    };
    muteAddLecture(data);
  };

  const onHandleChangeUpload = (info: any) => {
    if (info.file.status === "uploading") {
      setUploading(true);
    }
    if (info.file.status === "done") {
      setUploadUrl(info.file.response.data);
      setUploading(false);
    }
  };

  const handleUpdateLecture = async (values: any) => {
    if (uploadUrl) {
      values.playback_id = uploadUrl;
    }

    await api.put(`/lectures/${values.id}`, values);

    messageApi.open({
      type: "success",
      content: "Cập nhật bài học thành công",
    });
    queryClient.invalidateQueries({ queryKey: ["course", slug, "lessons"] });
    setIsEditLecture(null);
    setUploadUrl("");
  };

  return (
    <>
      {contextHolder}
      <div className="flex justify-between">
        <Title>Cập nhật nội dung khoá học: {courseData?.data.name}</Title>
        <Button onClick={handleAddNewLesson} type="primary">
          Thêm chương mới
        </Button>
      </div>

      <Skeleton active loading={isLoading}>
        {lessons.map((item) => (
          <div key={item.id}>
            <Collapse
              accordion
              expandIcon={() => null}
              className="mt-4"
              key={item.id}
              items={[
                {
                  key: item.id.toString(),
                  label: (
                    <div className="flex items-center gap-3 justify-between w-full pr-5">
                      {isEditLesson === item.id ? (
                        <Form
                          className="w-full flex gap-4"
                          form={form}
                          onFinish={() => updateLesson(item.id)}
                          initialValues={lessons.find(
                            (lesson) => lesson.id === item.id
                          )}
                        >
                          <Form.Item
                            name="title"
                            rules={[
                              {
                                required: true,
                                message: (
                                  <div className="text-red-500 mt-2 mb-2">
                                    Vui lòng nhập tiêu đề bài học
                                  </div>
                                ),
                              },
                            ]}
                            style={{ width: "100%" }}
                            className="w-full mt-6"
                          >
                            <Input
                              placeholder="Chương 1: Giời thiệu khoá học"
                              onClick={(e) => e.stopPropagation()}
                              defaultValue={item.title}
                            />
                          </Form.Item>
                          <div className="text-right flex items-center justify-end">
                            <Button
                              htmlType="submit"
                              style={{
                                backgroundColor: "#ee7228",
                                borderColor: "#ee7228",
                              }}
                              icon={<IconCheck />}
                              onClick={(e) => {
                                e.stopPropagation();
                                handleEdit(item.id);
                              }}
                            />
                            <Button
                              icon={<IconCircle />}
                              onClick={(e) => {
                                e.stopPropagation();
                                handleClose();
                              }}
                              danger
                              className="ml-2"
                            />
                          </div>
                        </Form>
                      ) : (
                        <>
                          <span onClick={(e) => e.stopPropagation()}>
                            {item.title}
                          </span>
                          <div className="text-right flex items-center justify-end">
                            <Button
                              icon={<IconEdit />}
                              onClick={(e) => {
                                e.stopPropagation();
                                handleEdit(item.id);
                              }}
                            />
                            <Popconfirm
                              placement="topLeft"
                              title="Bạn có chắc chắn muốn xoá bài học này?"
                              onConfirm={(e) => {
                                e?.stopPropagation();
                                handleDelete(item.id);
                              }}
                              onCancel={(e) => e?.stopPropagation()}
                              okText="Xoá"
                              cancelText="Huỷ"
                            >
                              <Button
                                icon={<DeleteOutlined />}
                                danger
                                className="ml-2"
                                onClick={(e) => e.stopPropagation()}
                              />
                            </Popconfirm>
                          </div>
                        </>
                      )}
                    </div>
                  ),
                  children: (
                    <>
                      {item.lectures.map((lecture: any) => (
                        <Collapse
                          key={lecture.id}
                          expandIconPosition="end"
                          className="mt-4"
                          items={[
                            {
                              label: (
                                <div className="flex items-center gap-3 justify-between w-full pr-5">
                                  {isEditLecture === lecture.id ? (
                                    <>
                                      <Form
                                        className="w-full flex gap-4"
                                        form={form}
                                        initialValues={lecture}
                                        onFinish={handleUpdateLecture}
                                      >
                                        <Form.Item hidden name="id">
                                          <Input />
                                        </Form.Item>
                                        <Form.Item
                                          name="title"
                                          rules={[
                                            {
                                              required: true,
                                              message: (
                                                <div className="text-red-500 mt-2 mb-2">
                                                  Vui lòng nhập tiêu đề bài học
                                                </div>
                                              ),
                                            },
                                          ]}
                                          style={{ width: "100%" }}
                                          className="w-full mt-6"
                                        >
                                          <Input
                                            placeholder="Chương 1: Giời thiệu bài học"
                                            onClick={(e) => e.stopPropagation()}
                                          />
                                        </Form.Item>
                                        <div className="text-right flex items-center justify-end">
                                          <Button
                                            htmlType="submit"
                                            style={{
                                              backgroundColor: "#ee7228",
                                              borderColor: "#ee7228",
                                            }}
                                            icon={<IconCheck />}
                                            onClick={(e) => {
                                              e.stopPropagation();
                                              form.setFieldsValue({
                                                id: lecture.id,
                                              });
                                            }}
                                          />
                                          <Button
                                            icon={<IconCircle />}
                                            onClick={(e) => {
                                              e.stopPropagation();
                                              handleCloseLecture();
                                            }}
                                            danger
                                            className="ml-2"
                                          />
                                        </div>
                                      </Form>
                                    </>
                                  ) : (
                                    <>
                                      <span
                                        onClick={(e) => e.stopPropagation()}
                                      >
                                        {lecture.title}
                                      </span>
                                      <div className="text-right flex items-center justify-end">
                                        <Button
                                          icon={<IconBook />}
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            handleEditLecture(lecture.id);
                                            form.setFieldsValue({
                                              title: lecture.title,
                                            });
                                          }}
                                        />
                                        <Popconfirm
                                          placement="topLeft"
                                          title="Bạn có chắc chắn muốn xoá bài học này?"
                                          onConfirm={(e) => {
                                            e?.stopPropagation();
                                            handleDeleteLecture(lecture.id);
                                          }}
                                          onCancel={(e) => e?.stopPropagation()}
                                          okText="Xoá"
                                          cancelText="Huỷ"
                                        >
                                          <Button
                                            icon={<DeleteOutlined />}
                                            danger
                                            className="ml-2"
                                            onClick={(e) => e.stopPropagation()}
                                          />
                                        </Popconfirm>
                                      </div>
                                    </>
                                  )}
                                </div>
                              ),
                              children: (
                                <Form
                                  initialValues={lecture}
                                  layout="vertical"
                                  onFinish={handleUpdateLecture}
                                >
                                  <Form.Item hidden name="id" label="ID">
                                    <Input />
                                  </Form.Item>
                                  <Form.Item name="type" label="Type">
                                    <Select>
                                      <Select.Option value="video">
                                        Video
                                      </Select.Option>
                                    </Select>
                                  </Form.Item>

                                  <Form.Item
                                    name="playback_id"
                                    label="Upload Video"
                                    valuePropName={lecture.playback_id}
                                    getValueFromEvent={normFile}
                                  >
                                    <Upload
                                      action="http://127.0.0.1:8000/api/videos"
                                      listType="picture-card"
                                      maxCount={1}
                                      onChange={onHandleChangeUpload}
                                      name="video"
                                      disabled={uploading}
                                    >
                                      <button
                                        style={{
                                          border: 0,
                                          background: "none",
                                        }}
                                        type="button"
                                      >
                                        <UploadOutlined />
                                        <div style={{ marginTop: 8 }}>
                                          Upload
                                        </div>
                                      </button>
                                    </Upload>
                                    {lecture.playback_id && (
                                      <>
                                        <h3 className="mt-2">Xem trước</h3>
                                        <MuxPlayer
                                          className="h-[300px] mt-2"
                                          loading="viewport"
                                          playbackId={lecture?.playback_id}
                                          metadata={{
                                            video_id: "video-id-123456",
                                            video_title: "Bick Buck Bunny",
                                            viewer_user_id: "user-id-bc-789",
                                          }}
                                        />
                                      </>
                                    )}
                                  </Form.Item>
                                  <Form.Item
                                    name="content"
                                    label="Mô tả bài học"
                                  >
                                    <TextArea rows={4} />
                                  </Form.Item>

                                  <Form.Item className="text-right">
                                    <Button htmlType="submit" type="primary">
                                      Cập nhật
                                    </Button>
                                  </Form.Item>
                                </Form>
                              ),
                            },
                          ]}
                        />
                      ))}
                    </>
                  ),
                },
              ]}
            />
            <Button
              onClick={() => handleAddNewLecture(item.id, courseData?.data.id)}
              className="mt-4 ml-auto w-fit block"
            >
              Thêm bài học
            </Button>
          </div>
        ))}
      </Skeleton>
    </>
  );
};

export default CourseUpdateContentPage;
