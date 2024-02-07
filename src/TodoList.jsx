import React, { useState } from "react";

const TodoList = () => {
  const [task, setTask] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const submithandler = (e) => {
    e.preventDefault();
    setTask("");
    setMainTask([...mainTask, { task }]);
  };

  const deletehandler = (i) => {
    let copytask = [...mainTask];
    copytask.splice(i, 1);
    setMainTask(copytask);
  };

  let rendertask = <h1 className="tracking-wider">No Task Available</h1>;

  if (mainTask.length > 0) {
    rendertask = mainTask.map((t, i) => {
      return (
        <>
          <li key={i} className="flex justify-between pb-2">
            <div className="ml-20">
              <h3>{t.task}</h3>
            </div>
            <button
              className="bg-red-600 px-5 py-1 rounded-lg mr-20"
              onClick={() => {
                deletehandler(i);
              }}
            >
              Delete
            </button>
          </li>
        </>
      );
    });
  }

  return (
    <>
      <div className="absolute bg-slate-900 h-max w-[60%] top-3 left-1/2 -translate-x-[50%] rounded-3xl">
        <h1 className="text-center pt-2 text-white text-2xl tracking-wider underline italic">
          Hey, Have a Good Day Sir!
        </h1>

        <form className="flex justify-center pt-3" onSubmit={submithandler}>
          <input
            className="bg-white text-black w-[50%] pl-3 py-2 rounded-2xl tracking-wide"
            type="text"
            placeholder="Add your daily tasks"
            value={task}
            onChange={(e) => {
              setTask(e.target.value);
            }}
          />

          <button className="bg-green-600 rounded-2xl ml-2 px-8 tracking-wider hover:font-semibold">
            Add Task
          </button>
        </form>

        <div className="pt-4 text-center text-white pb-2">
          <ul>{rendertask}</ul>
        </div>
      </div>
    </>
  );
};

export default TodoList;
