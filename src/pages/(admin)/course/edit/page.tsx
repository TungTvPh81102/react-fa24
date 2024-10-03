import { useState } from "react";
import Title from "../../../../components/Typography/Title";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import api from "../../../../api";

const CourseEditPage = () => {
  const [course, setCourse] = useState({});

  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["courses", id],
    queryFn: async () => {
      const { data } = await api.get(`/courses/${id}`);
      setCourse(data.data);
      return data;
    },
  });

  return (
    <>
      <Title>Cập nhật khoá học: {course?.name}</Title>
    </>
  );
};

export default CourseEditPage;
