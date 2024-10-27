import { user_data } from "@/data/userData";
import { AddButtonType } from "./AddButton";
import { IoIosWarning } from "react-icons/io";
import { ChangeEvent } from "react";
import DefaultInput from "./DefaultInput";
type AddWorkspaceProps = {
  isError: boolean;
  nameInput: string;
  nameInputCount: number;
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onFormSubmit: (type: AddButtonType) => void;
  onCancelClick: () => void;
};
const AddWorkspace = ({
  isError,
  nameInput,
  nameInputCount,
  onInputChange,
  onFormSubmit,
  onCancelClick,
}: AddWorkspaceProps) => {
  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={() => onFormSubmit("workspace")}
    >
      <DefaultInput
        label="Owner"
        id="owner"
        name="owner"
        inputValue={user_data.name}
        isDisabled={true}
      >
        <div className="text-warning flex justify-start items-start gap-2">
          <div className="text-base">
            <IoIosWarning />
          </div>
          <p className="text-xs">
            The admin cannot be changed but has permission to add or remove
            users from the workspace.
          </p>
        </div>
      </DefaultInput>
      <DefaultInput
        id="name"
        label="Workspace Name"
        name="name"
        isError={isError}
        inputValue={nameInput}
        inputCount={nameInputCount}
        maxCount={50}
        includeCount={true}
        onInputChange={(e) => onInputChange(e)}
      />
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

export default AddWorkspace;
