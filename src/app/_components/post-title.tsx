import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export function PostTitle({ children }: Props) {
  return (
    <h1 className="mb-14 text-5xl font-bold tracking-tighter leading-tight">
      {children}
    </h1>
  );
}
