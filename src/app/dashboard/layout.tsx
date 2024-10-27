import { DefaultLayoutProps } from "../layout";
export default function DashboardLayout({ children }: DefaultLayoutProps) {
  return <main className="w-full h-full">{children}</main>;
}
