import { Empty } from "antd";
import { useState } from "react";
import ModalAction from "./components/ModalAction";
import { ACTION_TYPE_ENUM } from "./types";

function App() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [typeAction, setTypeAction] = useState(ACTION_TYPE_ENUM.CREATE);
  const handleAdd = () => {
    setTypeAction(ACTION_TYPE_ENUM.CREATE);
    setIsOpenModal(true);
  };
  return (
    <div className="px-52">
      <h1 className="text-center text-xl font-semibold pt-16">Todo List</h1>
      <section>
        <div className="flex justify-end">
          <button
            className="bg-sky-500 text-white px-4 py-2 rounded-md mt-4 cursor-pointer"
            onClick={handleAdd}
          >
            Thêm mới
          </button>
        </div>
        <Empty className="mt-28" />
        <ModalAction
          isOpen={isOpenModal}
          onClose={() => setIsOpenModal(false)}
          typeAction={typeAction}
        />
      </section>
    </div>
  );
}

export default App;
