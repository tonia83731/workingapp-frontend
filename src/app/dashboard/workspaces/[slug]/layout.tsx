import { DefaultLayoutProps } from "@/app/layout";

export default function WorkspaceLayout({ children }: DefaultLayoutProps) {
  return (
    <div className="w-full h-full md:grid md:grid-cols-[60px_1fr] lg:grid-cols-[250px_1fr]">
      {children}
    </div>
  );
}
