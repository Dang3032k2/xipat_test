import { Form, Input, Modal } from "antd";
import { FC } from "react";
import { ACTION_TYPE_ENUM } from "../types";
import TextArea from "antd/es/input/TextArea";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  typeAction: ACTION_TYPE_ENUM;
};
const ModalAction: FC<Props> = ({ isOpen, onClose, typeAction }) => {
  const title =
    typeAction === ACTION_TYPE_ENUM.CREATE ? "New todo" : "Edit todo";
  return (
    <Modal
      open={isOpen}
      onCancel={onClose}
      title={title}
      footer={null}
      centered
    >
      <Form className="mt-6">
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
