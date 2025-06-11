import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../slices/todoSlices";
import { ACTION_TYPE_ENUM, ITodoItem, TODO_STATUS } from "../types";
import ModalAction from "./ModalAction";
import { Checkbox } from "antd";

type Props = {
  data: ITodoItem;
};
const Todo: FC<Props> = ({ data }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteTodo(data.id!));
  };
  return (
    <div className="border-b border-b-slate-200 px-5 flex justify-between items-center min-h-[60px]">
      <div className="py-2 flex gap-4">
        <Checkbox
          checked={data.completed === TODO_STATUS.COMPLETED}
          onClick={() => dispatch(toggleTodo(data.id))}
        />
        <div>
          <p className="font-semibold mb-1 text-gray-700">{data.name}</p>
          <p className="text-sm text-gray-500 mb-0">{data.desc}</p>
        </div>
      </div>
      <div className="flex gap-5 text-xl">
        <EditOutlined
          className="text-sky-600 cursor-pointer"
          onClick={() => setIsOpenModal(true)}
        />
        <DeleteOutlined
          className="text-red-600 cursor-pointer"
          onClick={handleDelete}
        />
      </div>
      <ModalAction
        isOpen={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        typeAction={ACTION_TYPE_ENUM.UPDATE}
        todo={data}
      />
    </div>
  );
};
export default Todo;
