import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export function CommonSidebar({ children }: Props) {
  return (
    <aside className="flex-[360px_0_0] p-5 bg-orange-100">
      <div className="bg-white shadow-[0_1px_1px_rgba(0,0,0,0.06)] p-6 h-[400px] mb-5"></div>
      <div className="bg-white shadow-[0_1px_1px_rgba(0,0,0,0.06)] p-6 h-[400px] mb-5"></div>
      <div className="bg-white shadow-[0_1px_1px_rgba(0,0,0,0.06)] p-6 h-[400px]"></div>
    </aside>
  );
}
