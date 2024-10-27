import { ChangeEvent } from "react";
import DefaultInput from "./DefaultInput";
import { AddButtonType } from "./AddButton";

type AddBucketProps = {
  isError: boolean;
  nameInput: string;
  nameInputCount: number;
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onFormSubmit: (type: AddButtonType) => void;
  onCancelClick: () => void;
};
const AddBucket = ({
  isError,
  nameInput,
  nameInputCount,
  onInputChange,
  onFormSubmit,
  onCancelClick,
}: AddBucketProps) => {
  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={() => onFormSubmit("bucket")}
    >
      <DefaultInput
        id="name"
        label="Bucket Name"
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

export default AddBucket;
