import AddButton from "@/components/common/AddButton";
import DefaultLayout from "@/components/common/DefaultLayout";

export default function WorkspacePage() {
  return (
    <DefaultLayout title="Workspace">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 sm:grid sm:grid-cols-2">
          <AddButton title="Add Bucket" type="bucket" />
          <AddButton title="Add Todo" type="todo" />
        </div>
        <div className=""></div>
      </div>
    </DefaultLayout>
  );
}
