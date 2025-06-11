import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Empty, Space } from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";
import ModalAction from "./components/ModalAction";
import Todo from "./components/Todo";
import { RootState } from "./slices/store";
import { ACTION_TYPE_ENUM, TODO_STATUS } from "./types";

function App() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [typeAction, setTypeAction] = useState(ACTION_TYPE_ENUM.CREATE);
  const [selectedStatus, setSelectedStatus] = useState(TODO_STATUS.ALL);
  const handleAdd = () => {
    setTypeAction(ACTION_TYPE_ENUM.CREATE);
    setIsOpenModal(true);
  };
  const handleSelectStatus = (status: TODO_STATUS) => {
    setSelectedStatus(status);
  };
  const todoList = useSelector((state: RootState) => state.todo.todoList);
  const items: MenuProps["items"] = [
    {
      key: TODO_STATUS.ALL,
      label: (
        <div
          className={`${selectedStatus === TODO_STATUS.ALL ? "font-bold" : ""}`}
          onClick={() => handleSelectStatus(TODO_STATUS.ALL)}
        >
          All
        </div>
      ),
    },
    {
      key: TODO_STATUS.COMPLETED,
      label: (
        <div
          className={`${
            selectedStatus === TODO_STATUS.COMPLETED ? "font-bold" : ""
          }`}
          onClick={() => handleSelectStatus(TODO_STATUS.COMPLETED)}
        >
          Completed
        </div>
      ),
    },
    {
      key: TODO_STATUS.WAITING_FOR_PROSESSING,
      label: (
        <div
          className={`${
            selectedStatus === TODO_STATUS.WAITING_FOR_PROSESSING
              ? "font-bold"
              : ""
          }`}
          onClick={() => handleSelectStatus(TODO_STATUS.WAITING_FOR_PROSESSING)}
        >
          Waiting for processing
        </div>
      ),
    },
  ];
  const renderedTodos =
    selectedStatus === TODO_STATUS.ALL
      ? todoList
      : todoList.filter((item) => item.completed === selectedStatus);
  return (
    <div className="flex justify-center h-[100vh]">
      <div className="w-2/5">
        <h1 className="text-center text-xl font-semibold pt-16">Todo List</h1>
        <section>
          <div className="flex justify-between mb-10 items-center mt-4 px-5">
            <div>
              <Dropdown menu={{ items }}>
                <button className="border border-gray-400 px-3 py-[6px] rounded-md">
                  <Space className="text-gray-500">
                    Filter
                    <DownOutlined className="text-sm" />
                  </Space>
                </button>
              </Dropdown>
            </div>
            <button
              className="bg-sky-500 border text-white px-4 py-2 rounded-md"
              onClick={handleAdd}
            >
              Thêm mới
            </button>
          </div>
          {renderedTodos.length === 0 && <Empty className="mt-28" />}
          {renderedTodos.map((todo) => {
            return <Todo data={todo} />;
          })}
        </section>
      </div>
      <ModalAction
        isOpen={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        typeAction={typeAction}
      />
    </div>
  );
}

export default App;
