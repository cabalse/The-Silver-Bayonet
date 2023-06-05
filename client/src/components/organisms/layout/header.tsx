import TestControls from "../../molecules/testcontrols";

const Header = () => {
  return (
    <header className="flex w-full items-center justify-between border-b-2 border-gray-200 bg-white p-5">
      <div className="flex items-center space-x-2">
        <span className="font-bold">The Silver Bayonet</span>
        <span className="text-sm">v.0.1</span>
      </div>
      <TestControls />
    </header>
  );
};

export default Header;
