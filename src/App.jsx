import React from "react";
import TodoList from "./TodoList";

const App = () => {
  return (
    <>
      <div className="bg-slate-950 h-screen w-screen relative">
        <h1 className="absolute italic uppercase tracking-widest top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-white font-extrabold text-5xl opacity-55">
          Todo List
        </h1>
        <TodoList />
      </div>
    </>
  );
};

export default App;
