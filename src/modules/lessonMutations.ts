import { useMutation, useQueryClient } from "@tanstack/react-query";
import { message } from "antd";
import api from "../api";

export const useUpdateLessonMutation = (slug: string) => {
  const queryClient = useQueryClient();
  const [messageApi] = message.useMessage();

  return useMutation({
    mutationFn: async ({ id, title }: { id: number; title: string }) => {
      await api.put(`/lessons/${id}`, { title, id });
    },
    onSuccess: () => {
      messageApi.open({
        type: "success",
        content: "Cập nhật bài học thành công",
      });
      queryClient.invalidateQueries({ queryKey: ["course", slug, "lessons"] });
    },
    onError: () => {
      messageApi.open({
        type: "error",
        content: "Có lỗi xảy ra, vui lòng thử lại",
      });
    },
  });
};
