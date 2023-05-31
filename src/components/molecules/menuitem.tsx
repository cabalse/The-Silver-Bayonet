type Props = {
  href?: string;
  text: string;
};

const MenuItem = ({ href, text }: Props) => {
  return (
    <a
      href={href}
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
