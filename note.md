/_ eslint-disable @typescript-eslint/no-explicit-any _/
import React, { useEffect, useState } from "react";
import { Table, Form, Input, Select, Button } from "antd";
import axios from "axios";

const { Option } = Select;

const CoursePage: React.FC = () => {
const [dataSource, setDataSource] = useState<any[]>([]);
const [total, setTotal] = useState<number>(0);
const [loading, setLoading] = useState<boolean>(false);
const [form] = Form.useForm();

// Fetch data from API
const fetchData = async (page: number, pageSize: number, filters: any) => {
setLoading(true);
try {
const res = await axios.get("http://jsonplaceholder.typicode.com/posts", {
params: {
\_page: page,
\_limit: pageSize,
...filters,
},
});
setDataSource(res.data);
setTotal(Number(res.headers["x-total-count"]));
} catch (error) {
console.error("Error fetching data:", error);
} finally {
setLoading(false);
}
};

// Handle search
const onSearch = async (values: any) => {
await fetchData(1, 10, values); // Reset to first page on search
};

// Table columns definition
const columns = [
{
title: "ID",
dataIndex: "id",
key: "id",
},
{
title: "Title",
dataIndex: "title",
key: "title",
},
{
title: "Body",
dataIndex: "body",
key: "body",
render: (text: string) => (text ? `${text.substr(0, 100)}...` : ""),
},
{
title: "User ID",
dataIndex: "userId",
key: "userId",
},
];

const paginationConfig = {
pageSize: 10,
total,
onChange: (page: number, pageSize: number) => {
fetchData(page, pageSize, form.getFieldsValue());
},
};

useEffect(() => {
fetchData(1, 10, {});
}, []);

return (
<div>
<Form form={form} layout="inline" onFinish={onSearch}>
<Form.Item name="id">
<Input placeholder="ID" />
</Form.Item>
<Form.Item name="select">
<Select placeholder="Select">
<Option value="1">One</Option>
<Option value="2">Two</Option>
<Option value="3">Three</Option>
</Select>
</Form.Item>
<Form.Item>
<Button type="primary" htmlType="submit">
Search
</Button>
</Form.Item>
</Form>
<Table
        rowKey="id"
        columns={columns}
        dataSource={dataSource}
        pagination={paginationConfig}
        loading={loading}
      />
</div>
);
};

export default CoursePage;
