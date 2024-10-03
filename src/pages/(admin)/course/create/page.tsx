/* eslint-disable @typescript-eslint/no-explicit-any */
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Title from "../../../../components/Typography/Title";
import { Button, Form, Input, message, Select, Upload } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { IconPlus } from "../../../../components/icon";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import api from "../../../../api";

const CourseCreatePage = () => {
  const [image, setImage] = useState("");
  const nav = useNavigate();
  const [form] = Form.useForm();

  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const { mutate, isPending } = useMutation({
    mutationFn: async (data) => {
      await api.post("/courses", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(data);
    },
    onSuccess: () => {
      message.open({
        type: "success",
        content: "Thêm khoá học thành công",
      });
      form.resetFields();
      setImage("");
      nav("/admin/course");
    },
    onError: () => {
      message.open({
        type: "error",
        content: "Có lỗi xảy ra, vui lòng thử lại",
      });
    },
  });

  const handleOnChangImage = (value: any) => {
    setImage(value.file);
  };

  const onFinish = (values: any) => {
    mutate({ ...values, image });
  };

  return (
    <>
      <Title>Thêm mới khoá học</Title>
      <br />
      <div>
        <Form
          encType="multipart/form-data"
          form={form}
          onFinish={onFinish}
          name="layout-multiple-vertical"
          layout="vertical"
          disabled={isPending}
        >
          <div className="grid grid-cols-2 gap-4">
            <Form.Item
              label="Tên khoá học"
              name="name"
              rules={[
                {
                  required: true,
                  message: (
                    <div className="text-red-500 mt-2 mb-2">
                      Vui lòng nhập tên khoá học!
                    </div>
                  ),
                },
              ]}
              style={{ width: "100%" }}
            >
              <Input placeholder="Nhập tên khoá học" />
            </Form.Item>
            <Form.Item
              label="Video giới thiệu"
              name="intro_url"
              style={{ width: "100%" }}
            >
              <Input placeholder="Video giới thiệu" />
            </Form.Item>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Form.Item label="Giá gốc" name="price" style={{ width: "100%" }}>
              <Input placeholder="Nhập giá" />
            </Form.Item>
            <Form.Item
              label="Giảm giá (nếu có)"
              name="price_sale"
              style={{ width: "100%" }}
            >
              <Input placeholder="Nhập giảm giá" />
            </Form.Item>
          </div>

          <Form.Item
            label="Mô tả khoá học"
            name="description"
            style={{ width: "100%" }}
          >
            <CKEditor
              editor={ClassicEditor}
              data="<p>Nhập mô tả</p>"
              onChange={(event, editor) => {
                const data = editor.getData();
                form.setFieldsValue({ description: data });
              }}
            />
          </Form.Item>

          <div className="grid grid-cols-2 gap-4">
            <Form.Item
              rules={[
                {
                  required: true,
                  message: (
                    <div className="text-red-500 mt-2 mb-2">
                      Vui lòng chọn trạng thái
                    </div>
                  ),
                },
              ]}
              name={"status"}
              label="Trạng thái"
            >
              <Select placeholder="Chọn trạng thái">
                <Select.Option value="1">Hoạt động</Select.Option>
                <Select.Option value="0">Không hoạt động</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: (
                    <div className="text-red-500 mt-2 mb-2">
                      Vui lòng chọn trình độ
                    </div>
                  ),
                },
              ]}
              name={"level"}
              label="Trình độ"
            >
              <Select placeholder="Chọn trình độ">
                <Select.Option value="basic">Dễ</Select.Option>
                <Select.Option value="intermediate">Trung bình</Select.Option>
                <Select.Option value="advanced">Khó</Select.Option>
              </Select>
            </Form.Item>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Form.Item label="Yêu cầu">
              <Form.List name="requirements">
                {(fields, { add, remove }) => (
                  <>
                    {fields.map(({ key, name, ...restField }, index) => (
                      <div key={key} className="flex items-baseline gap-2   ">
                        <Form.Item
                          {...restField}
                          name={[name]}
                          rules={[
                            {
                              required: true,
                              message: (
                                <div className="text-red-500 mt-2 mb-2">
                                  {`Vui lý nhập yêu cầu ${index + 1}`}
                                </div>
                              ),
                            },
                          ]}
                          style={{ width: "80%" }}
                        >
                          <Input placeholder={`Nhập yêu cầu ${index + 1}`} />
                        </Form.Item>
                        <MinusCircleOutlined onClick={() => remove(name)} />
                      </div>
                    ))}
                    <Button
                      type="dashed"
                      onClick={() => add()}
                      style={{ width: "80%", marginTop: 2 }}
                      icon={<IconPlus />}
                    >
                      Thêm yêu cầu
                    </Button>
                  </>
                )}
              </Form.List>
            </Form.Item>

            <Form.Item label="Lợi ích">
              <Form.List name="benefits">
                {(fields, { add, remove }) => (
                  <>
                    {fields.map(({ key, name, ...restField }, index) => (
                      <div key={key} className="flex items-baseline gap-2 ">
                        <Form.Item
                          {...restField}
                          name={[name]}
                          rules={[
                            {
                              required: true,
                              message: (
                                <div className="text-red-500 mt-2 mb-2">
                                  {`Vui lý nhập lợi ích ${index + 1}`}
                                </div>
                              ),
                            },
                          ]}
                          style={{ width: "80%" }}
                        >
                          <Input placeholder={`Nhập lợi ích ${index + 1}`} />
                        </Form.Item>
                        <MinusCircleOutlined onClick={() => remove(name)} />
                      </div>
                    ))}
                    <Button
                      type="dashed"
                      onClick={() => add()}
                      style={{ width: "80%", marginTop: 8 }}
                      icon={<IconPlus />}
                    >
                      Thêm lợi ích
                    </Button>
                  </>
                )}
              </Form.List>
            </Form.Item>
          </div>

          <Form.Item label="Câu hỏi thường gặp?">
            <Form.List name="qa">
              {(fields, { add, remove }) => (
                <>
                  {fields.map(({ key, name, ...restField }) => (
                    <div
                      key={key}
                      className="grid grid-cols-3 gap-2 items-baseline"
                    >
                      <Form.Item
                        {...restField}
                        name={[name, "first"]}
                        rules={[
                          {
                            required: true,
                            message: (
                              <div className="text-red-500 mt-2 mb-2">
                                {`Vui lý nhập câu hỏi số ${name + 1}`}
                              </div>
                            ),
                          },
                        ]}
                      >
                        <Input placeholder={`Câu hỏi số ${name + 1}`} />
                      </Form.Item>
                      <Form.Item
                        {...restField}
                        name={[name, "last"]}
                        rules={[
                          {
                            required: true,
                            message: (
                              <div className="text-red-500 mt-2 mb-2">
                                {`Vui  lòng nhập câu trả lời ${name + 1}`}
                              </div>
                            ),
                          },
                        ]}
                      >
                        <Input placeholder={`Câu trả lời số ${name + 1}`} />
                      </Form.Item>
                      <MinusCircleOutlined onClick={() => remove(name)} />
                    </div>
                  ))}
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    block
                    icon={<IconPlus />}
                  >
                    Thêm câu hỏi
                  </Button>
                </>
              )}
            </Form.List>
          </Form.Item>

          <Form.Item
            name={"image"}
            label="Upload"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            rules={[
              {
                required: true,
                message: (
                  <div className="text-red-500 mt-2 mb-2">
                    {` Vui lòng thêm hình ảnh`}
                  </div>
                ),
              },
            ]}
          >
            <Upload
              maxCount={1}
              listType="picture-card"
              onChange={handleOnChangImage}
              beforeUpload={() => false}
            >
              <button style={{ border: 0, background: "none" }} type="button">
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Upload</div>
              </button>
            </Upload>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Thêm mới
            </Button>
            <Link className="ml-2" to="/admin/course">
              <Button className="bg-neutral-500 text-white">
                Quay lại trang danh sách
              </Button>
            </Link>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default CourseCreatePage;
