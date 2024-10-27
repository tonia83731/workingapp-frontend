"use client";
import { useState, ChangeEvent } from "react";
import { IoIosAdd } from "react-icons/io";

import AddWorkspace from "./AddWorkspace";
import AddBucket from "./AddBucket";
import AddTodo from "./AddTodo";
import Modal from "./Modal";
type AddButtonProps = {
  title: string;
  type: AddButtonType;
};
export type AddButtonType = "workspace" | "bucket" | "todo";
const AddButton = ({ title, type }: AddButtonProps) => {
  const [isToggle, setIsToggle] = useState(false);
  // workspace, bucket
  const [nameInput, setNameInput] = useState("");
  const [nameCount, setNameCount] = useState(0);
  const [isError, setIsError] = useState(false);
  // todo
  const [inputValue, setInputValue] = useState({
    title: "",
    startDate: new Date(),
    endDate: new Date(),
    note: "",
  });
  const [todoError, setTodoError] = useState(false);

  // workspace, bucket
  const handleNameInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (value.length > 50) {
      setIsError(true);
    } else {
      setIsError(false);
    }
    setNameInput(value);
    setNameCount(value.length);
  };
  const handleNameCancelClick = () => {
    setIsToggle(false);
    setNameInput("");
    setNameCount(0);
  };
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleDateChange = (
    date: Date | null,
    type: "startDate" | "endDate"
  ) => {
    // console.log(date, type);
    setInputValue((prev) => ({
      ...prev,
      [type]: date,
    }));
  };
  const handleCancelClick = () => {};
  const handleFormSubmit = (type: AddButtonType) => {
    console.log(type);
  };
  return (
    <>
      <button
        onClick={() => setIsToggle(!isToggle)}
        className="w-full flex justify-center items-center gap-2 font-bold text-lg md:text-xl border-2 border-dashed border-blue-dark bg-blue-light-40 hover:bg-blue-light hover:text-white text-blue-dark rounded-lg py-2"
      >
        <IoIosAdd />
        <div className="text-base md:text-lg">{title}</div>
      </button>
      {isToggle && (
        <Modal
          title={
            type === "workspace"
              ? "Add Workspace"
              : type === "bucket"
              ? "Add Bucket"
              : "Add Todo"
          }
          onClose={() => setIsToggle(false)}
        >
          {type === "workspace" && (
            <AddWorkspace
              isError={isError}
              nameInput={nameInput}
              nameInputCount={nameCount}
              onInputChange={handleNameInputChange}
              onFormSubmit={handleFormSubmit}
              onCancelClick={handleNameCancelClick}
            />
          )}
          {type === "bucket" && (
            <AddBucket
              isError={isError}
              nameInput={nameInput}
              nameInputCount={nameCount}
              onInputChange={handleNameInputChange}
              onFormSubmit={handleFormSubmit}
              onCancelClick={handleNameCancelClick}
            />
          )}
          {type === "todo" && (
            <AddTodo
              inputValue={inputValue}
              isError={todoError}
              onDateChange={handleDateChange}
              onInputChange={handleInputChange}
              onFormSubmit={handleFormSubmit}
              onCancelClick={handleCancelClick}
            />
          )}
        </Modal>
      )}
    </>
  );
};

export default AddButton;
