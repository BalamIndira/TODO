import React from "react";

export const Taskoutput = ({ tasks, onToggle, onDelete }) => {
  console.log("Tasks received in taksoutput:",tasks);

  if (!Array.isArray(tasks)) {
    return <p>Error:Invalid task prop.</p>;
  }

  return (
    <div className="mt-5 mr-86 ml-97 px-4 py-4 border-2 bg-amber-100">
      <h1 className="font-bold underline text-2xl">YOUR LIST OF TASKS</h1>
      {tasks.length === 0 ? (
        <p>No tasks added yet</p>
      ) : (
        <ul>
          {tasks.map((item) => (
            <li key={item._id} 
             className="flex justify-between items-center gap-1 py-2">
              <span  className="flex-1"
                style={{
                  textDecoration: item.completed ? "line-through" : "none",
                  color: item.completed ? "gray" : "black",
                }}
              >
                {item.text}
              </span>

              <div className="flex gap-2">
                <button
                className="px-2 py-1 bg-green-200 rounded"
                type="button" onClick={() => onToggle(item._id)}>
                  create
                </button>

                <button 
                 className="px-2 py-1 bg-red-200 rounded"
                 type="button" onClick={() => onDelete(item._id)}>
                  delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
