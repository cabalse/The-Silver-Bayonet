import Button from "../atoms/button";

const Header = () => {
  return (
    <header className="flex flex-row items-center">
      <div>The Silver Bayonet</div>
      <div className="ml-2 flex flex-row justify-start space-x-2">
        <Button text={"Home"} to="/" />
        <Button text={"About"} to="/about" />
      </div>
    </header>
  );
};

export default Header;
