interface InputProps {
  name: string;
  placeholder: string;
  type: string;
  icon?: JSX.Element;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
  name,
  placeholder,
  type,
  icon,
  onChange,
}: InputProps) => {
  return (
    <div className="flex -mx-3">
      <div className="w-full px-3 mb-5">
        <label className="text-xs font-semibold px-1">{name}</label>
        <div className="flex">
          {icon && (
            <div className="w-10 z-10 pl-1 text-gray-400 pointer-events-none flex items-center justify-center">
              {icon}
            </div>
          )}
          <input
            name={name}
            type={type}
            onChange={onChange}
            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
            placeholder={placeholder}
          />
        </div>
      </div>
    </div>
  );
};
