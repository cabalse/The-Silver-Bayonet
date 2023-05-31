import react, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
const Sider = ({ children }: Props) => {
  return (
    <aside
      className="flex w-72 flex-col space-y-2 border-r-2 border-gray-200 bg-white p-2"
      style={{ height: "93.7vh" }}
    >
      {children}
    </aside>
  );
};

export default Sider;
