import { MailIcon } from '../../assets/icons/MailIcon';
import { PhoneIcon } from '../../assets/icons/PhoneIcon';
import { UserIcon } from '../../assets/icons/UserIcon';
import { GroupIcon } from '../../assets/icons/GroupIcon';
import { IdentificationIcon } from '../../assets/icons/IdentificationIcon';
import { FormData } from '../../types/type';
import { Input } from '../ui/Input';

type FormProps = {
  updateFields: (fields: Partial<FormData>) => void;
};

export const PersonalInfoForm = ({ updateFields }: FormProps) => {
  return (
    <>
      <div className="flex gap-3">
        <Input
          type="text"
          name="First name"
          icon={<UserIcon />}
          onChange={(e) => updateFields({ firstName: e.target.value })}
          placeholder="John"
        />
        <Input
          type="text"
          name="Last name"
          icon={<UserIcon />}
          onChange={(e) => updateFields({ lastName: e.target.value })}
          placeholder="Doe"
        />
      </div>
      <div className="flex gap-3">
        <Input
          type="text"
          name="Age"
          icon={<IdentificationIcon />}
          onChange={(e) => updateFields({ age: e.target.value })}
          placeholder="30"
        />
        <Input
          type="text"
          name="Gender"
          icon={<GroupIcon />}
          onChange={(e) => updateFields({ gender: e.target.value })}
          placeholder="Male"
        />
      </div>
      <Input
        type="email"
        name="Email"
        icon={<PhoneIcon />}
        onChange={(e) => updateFields({ email: e.target.value })}
        placeholder="johndoe@mail.com"
      />
      <Input
        type="phone"
        name="Phone"
        icon={<MailIcon />}
        onChange={(e) => updateFields({ phone: e.target.value })}
        placeholder="+45 123 456 789"
      />
    </>
  );
};
