import { HomeIcon } from '../../assets/icons/HomeIcon';
import { MapIcon } from '../../assets/icons/MapIcon';
import { MarkerIcon } from '../../assets/icons/MarkerIcon';
import { FormProps } from '../../types/type';
import { Input } from '../ui/Input';

export const LocationForm = ({ updateFields }: FormProps) => {
  return (
    <>
      <Input
        type="text"
        name="Street"
        icon={<HomeIcon />}
        onChange={(e) => updateFields({ street: e.target.value })}
        placeholder="123 Main Street"
      />
      <Input
        type="text"
        name="City"
        icon={<MarkerIcon />}
        onChange={(e) => updateFields({ city: e.target.value })}
        placeholder="New York"
      />
      <div className="flex gap-3">
        <Input
          type="text"
          name="PLZ"
          icon={<MarkerIcon />}
          onChange={(e) => updateFields({ city: e.target.value })}
          placeholder="12345"
        />
        <Input
          type="text"
          name="Region"
          icon={<MarkerIcon />}
          onChange={(e) => updateFields({ city: e.target.value })}
          placeholder="NY"
        />
      </div>
      <Input
        type="text"
        name="Country"
        icon={<MapIcon />}
        onChange={(e) => updateFields({ country: e.target.value })}
        placeholder="USA"
      />
    </>
  );
};
