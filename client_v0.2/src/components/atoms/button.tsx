import { Link } from "react-router-dom";

type ButtonProps = {
  text: string;
  to?: string;
};

const Button = ({ text, to }: ButtonProps) => {
  if (to) {
    return (
      <Link to={to}>
        <button className="bg-blue-400 rounded-md p-1.5">{text}</button>
      </Link>
    );
  }

  return <button className="bg-blue-400 rounded-md p-1.5">{text}</button>;
};

export default Button;
