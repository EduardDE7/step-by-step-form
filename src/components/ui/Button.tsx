type ButtonProps = {
  children: React.ReactNode;
  invisible?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
};

export const Button = ({
  children,
  invisible,
  type = 'button',
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={`${
        invisible ? 'invisible' : ''
      } block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
