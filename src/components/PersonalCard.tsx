import { FormData } from '../types/type';
type Row = {
  name: string;
  value: string;
};

const PersonalCard = ({ data }: { data: FormData }) => {
  const rows: Row[] = Object.keys(data).map((key) => ({
    name: key,
    value: data[key as keyof FormData],
  }));

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left p-10">
      <h1 className="sm:col-span-2 lg:col-span-4 text-2xl text-indigo-500 font-semibold">
        Personal Details :
      </h1>
      {rows.map((row) => (
        <PersonalCardRow key={row.name} name={row.name} value={row.value} />
      ))}
    </div>
  );
};

const PersonalCardRow = ({ name, value }: Row) => {
  const splitName = name.split(/(?=[A-Z])/).join(' ');

  return (
    <div className="max-w-xs overflow-hidden text-ellipsis">
      <p className="text-xs font-semibold px-1 capitalize">{splitName}:</p>
      <span className="text-gray-400">{value}</span>
    </div>
  );
};

export default PersonalCard;
