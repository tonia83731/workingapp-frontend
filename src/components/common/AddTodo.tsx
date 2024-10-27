import DatePicker from "react-datepicker";
import Select from "react-select";
import { AddButtonType } from "./AddButton";
import { bucket_data } from "@/data/bucketData";
import { ChangeEvent } from "react";
type AddTodoProps = {
  inputValue: {
    title: string;
    startDate: Date;
    endDate: Date;
    note: string;
  };
  isError: boolean;
  onInputChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onDateChange: (date: Date | null, input: "startDate" | "endDate") => void;
  onFormSubmit: (type: AddButtonType) => void;
  onCancelClick: () => void;
};
const AddTodo = ({
  inputValue,
  isError,
  onInputChange,
  onDateChange,
  onCancelClick,
  onFormSubmit,
}: AddTodoProps) => {
  return (
    <form className="flex flex-col gap-4" onSubmit={() => onFormSubmit("todo")}>
      {/* title */}
      <input
        type="text"
        name="title"
        className="border border-blue-light text-blue-dark rounded-lg disabled:bg-blue-light-40 disabled:text-blue-light px-4 py-2 placeholder:text-sm placeholder:text-blue-light-60"
        value={inputValue.title}
        placeholder="Todo title"
        onChange={(e) => onInputChange(e)}
      />
      {/* bucketId */}
      <div className="flex flex-col gap-2">
        <div className="font-medium">Bucket</div>
        <Select
          options={bucket_data}
          defaultValue={bucket_data[0]}
          isClearable={false}
          styles={{
            control: (styles, state) => ({
              ...styles,
              borderRadius: "0.5rem",
              paddingLeft: "0.5rem",
              paddingRight: "0.5rem",
              border: "1px solid #B6B8D1",
              "&::-webkit-scrollbar": {
                width: 0,
                height: 0,
              },
            }),
            placeholder: (styles) => ({
              ...styles,
              color: "rgb(182, 184, 209, .6)",
              // marginLeft: state.isMulti ? "10px" : "0px",
              fontSize: "0.875rem",
            }),
            indicatorSeparator: (styles) => ({
              ...styles,
              display: "none",
            }),
            dropdownIndicator: (styles) => ({
              ...styles,
              // display: "none",
              color: "#B6B8D1",
            }),
            singleValue: (styles) => ({
              ...styles,
              color: "#596097",
            }),
            option: (styles, state) => ({
              ...styles,
              backgroundColor: state.isSelected ? "#596097" : "#FDFDFB",
              color: state.isSelected ? "#FDFDFB" : "#596097",
              "&:hover": {
                backgroundColor: state.isSelected
                  ? "#596097"
                  : "rgb(182, 184, 209, .4)",
                color: state.isSelected ? "#FDFDFB" : "#596097",
              },
              paddingLeft: "1rem",
            }),
            menu: (styles) => ({
              ...styles,
              borderRadius: "0.5rem",
              border: "0px solid #B6B8D1",
            }),
            menuList: (styles) => ({
              ...styles,
              padding: 0,
              borderRadius: "0.5rem",
              border: "0px solid #B6B8D1",
            }),
          }}
        />
      </div>
      {/* categoryId */}
      <div className="flex flex-col gap-2">
        <div className="font-medium">Category</div>
        <Select
          isMulti
          placeholder="Select 1-3 categories"
          options={bucket_data}
          closeMenuOnSelect={false}
          isClearable={false}
          styles={{
            control: (styles, state) => ({
              ...styles,
              borderRadius: "0.5rem",
              paddingLeft: "0.5rem",
              paddingRight: "0.5rem",
              border: "1px solid #B6B8D1",
              "&::-webkit-scrollbar": {
                width: 0,
                height: 0,
              },
            }),
            placeholder: (styles, state) => ({
              ...styles,
              color: "rgb(182, 184, 209, .6)",
              marginLeft: state.isMulti ? "10px" : "0px",
              fontSize: "0.875rem",
            }),
            indicatorSeparator: (styles) => ({
              ...styles,
              display: "none",
            }),
            dropdownIndicator: (styles) => ({
              ...styles,
              color: "#B6B8D1",
            }),
            singleValue: (styles) => ({
              ...styles,
              color: "#596097",
            }),
            multiValue: (styles) => ({
              ...styles,
              backgroundColor: "#F4F3FF",
              color: "#B0B0B0",
              borderRadius: "10px",
              marginLeft: "10px",
            }),
            // option: (styles, state) => ({
            //   ...styles,
            //   backgroundColor: "#FDFDFB",
            //   color: "#596097",
            //   "&:hover": {
            //     backgroundColor: "rgb(182, 184, 209, .4)",
            //     color: "#596097",
            //   },
            //   paddingLeft: "1rem",
            // }),
            menu: (styles) => ({
              ...styles,
              borderRadius: "0.5rem",
              border: "0px solid #B6B8D1",
            }),
            menuList: (styles) => ({
              ...styles,
              padding: 0,
              borderRadius: "0.5rem",
              border: "0px solid #B6B8D1",
            }),
          }}
        />
      </div>
      {/* users */}
      <div className="flex flex-col gap-2">
        <div className="font-medium">Users</div>
        <Select
          isMulti
          placeholder="Select one or more users"
          options={bucket_data}
          isClearable={false}
          styles={{
            control: (styles, state) => ({
              ...styles,
              borderRadius: "0.5rem",
              paddingLeft: "0.5rem",
              paddingRight: "0.5rem",
              border: "1px solid #B6B8D1",
              "&::-webkit-scrollbar": {
                width: 0,
                height: 0,
              },
            }),
            placeholder: (styles, state) => ({
              ...styles,
              color: "rgb(182, 184, 209, .6)",
              marginLeft: state.isMulti ? "10px" : "0px",
              fontSize: "0.875rem",
            }),
            indicatorSeparator: (styles) => ({
              ...styles,
              display: "none",
            }),
            dropdownIndicator: (styles) => ({
              ...styles,
              color: "#B6B8D1",
            }),
            singleValue: (styles) => ({
              ...styles,
              color: "#596097",
            }),
            multiValue: (styles) => ({
              ...styles,
              backgroundColor: "rgb(182, 184, 209, .4)",
              color: "#596097",
              borderRadius: "0.5rem",
              marginLeft: "0.5rem",
            }),
            option: (styles, state) => ({
              ...styles,
              backgroundColor: "#FDFDFB",
              color: "#596097",
              "&:hover": {
                backgroundColor: "rgb(182, 184, 209, .4)",
                color: "#596097",
              },
              paddingLeft: "1rem",
            }),
            menu: (styles) => ({
              ...styles,
              borderRadius: "0.5rem",
              border: "0px solid #B6B8D1",
            }),
            menuList: (styles) => ({
              ...styles,
              padding: 0,
              borderRadius: "0.5rem",
              border: "0px solid #B6B8D1",
            }),
          }}
        />
      </div>
      {/* startdate - enddate */}
      <div className="flex flex-col gap-4 md:grid md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <div className="font-medium">Start Date</div>
          <DatePicker
            selected={inputValue.startDate}
            onChange={(date) => onDateChange(date, "startDate")}
            selectsStart
            startDate={inputValue.startDate}
            endDate={inputValue.endDate}
            className="w-full border border-blue-light text-blue-dark rounded-lg disabled:bg-blue-light-40 disabled:text-blue-light px-4 py-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="font-medium">End Date</div>
          <DatePicker
            selected={inputValue.endDate}
            onChange={(date) => onDateChange(date, "endDate")}
            selectsEnd
            startDate={inputValue.startDate}
            endDate={inputValue.endDate}
            minDate={inputValue.startDate}
            className="w-full border border-blue-light text-blue-dark rounded-lg disabled:bg-blue-light-40 disabled:text-blue-light px-4 py-2"
          />
        </div>
      </div>
      {/* note */}
      <div className="flex flex-col gap-2">
        <label id="note" className="font-medium">
          Note
        </label>
        <textarea
          name="note"
          id="note"
          rows={4}
          className={`border ${
            isError
              ? "border-error text-error"
              : "border-blue-light text-blue-dark"
          } rounded-lg disabled:bg-blue-light-40 disabled:text-blue-light px-4
          py-2 `}
          value={inputValue.note}
          onChange={(e) => onInputChange(e)}
        ></textarea>
      </div>
      <div className="w-full flex justify-end">
        <div className="flex items-center gap-2">
          <button
            className="bg-blue-light-60 text-white rounded-full px-4 py-1.5"
            onClick={onCancelClick}
            type="button"
          >
            Cancel
          </button>
          <button
            className="bg-blue-dark text-white rounded-full px-4 py-1.5"
            type="submit"
          >
            Create
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddTodo;
