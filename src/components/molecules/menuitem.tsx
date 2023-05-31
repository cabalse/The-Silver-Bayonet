type Props = {
  text: string;
  onClick: () => void;
};

const MenuItem = ({ text, onClick }: Props) => {
  return (
    <a
      onClick={onClick}
      className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600"
    >
      <span className="text-2xl">
        <i className="bx bx-home"></i>
      </span>
      <span>{text}</span>
    </a>
  );
};

export default MenuItem;
