import { Form, Input, Modal } from "antd";
import TextArea from "antd/es/input/TextArea";
import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTodo, editTodo } from "../slices/todoSlices";
import { ACTION_TYPE_ENUM, ITodoItem } from "../types";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  typeAction: ACTION_TYPE_ENUM;
  todo?: ITodoItem;
};
const ModalAction: FC<Props> = ({ isOpen, onClose, typeAction, todo }) => {
  const title =
    typeAction === ACTION_TYPE_ENUM.CREATE ? "New todo" : "Edit todo";
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const handleFinish = (values: ITodoItem) => {
    if (typeAction === ACTION_TYPE_ENUM.CREATE) {
      console.log("aaa");
      dispatch(addTodo(values));
    } else {
      dispatch(editTodo({ ...todo, ...values }));
    }
    onClose();
    form.resetFields();
  };
  useEffect(() => {
    if (todo) {
      form.setFieldsValue({
        ...todo,
      });
    }
  }, [form, todo]);
  return (
    <Modal
      open={isOpen}
      onCancel={onClose}
      title={title}
      footer={null}
      centered
    >
      <Form className="mt-6" form={form} onFinish={handleFinish}>
        <Form.Item
          name="name"
          rules={[{ required: true, message: "Todo's name is required!" }]}
        >
          <Input placeholder="Enter what you need to do..." />
        </Form.Item>
        <Form.Item name="desc">
          <TextArea placeholder="Enter description..." />
        </Form.Item>
        <div className="flex justify-end gap-6">
          <button>Close</button>
          <button className="text-sky-600 font-medium" type="submit">
            Save
          </button>
        </div>
      </Form>
    </Modal>
  );
};
export default ModalAction;
