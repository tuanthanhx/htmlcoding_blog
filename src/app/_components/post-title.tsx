import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export function PostTitle({ children }: Props) {
  return (
    <h1 className="mb-6 text-5xl font-black tracking-tighter leading-tight">
      {children}
    </h1>
  );
}
