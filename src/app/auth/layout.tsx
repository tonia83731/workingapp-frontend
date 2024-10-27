import { DefaultLayoutProps } from "../layout";

export default function AuthLayout({ children }: DefaultLayoutProps) {
  return <main className="w-full h-screen">{children}</main>;
}
