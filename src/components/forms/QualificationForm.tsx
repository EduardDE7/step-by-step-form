import { CaseIcon } from '../../assets/icons/CaseIcon';
import { CodeIcon } from '../../assets/icons/CodeIcon';
import { EducationIcon } from '../../assets/icons/EducationIcon';
import { PlanetIcon } from '../../assets/icons/PlanetIcon';
import { FormData } from '../../types/type';
import { Input } from '../ui/Input';

type FormProps = {
  updateFields: (fields: Partial<FormData>) => void;
};

export const QualificationForm = ({ updateFields }: FormProps) => {
  return (
    <>
      <Input
        type="text"
        name="Education"
        icon={<EducationIcon />}
        onChange={(e) => updateFields({ education: e.target.value })}
        placeholder="University of New York"
      />
      <Input
        type="text"
        name="Experience"
        icon={<CaseIcon />}
        onChange={(e) => updateFields({ experience: e.target.value })}
        placeholder="3 year experience"
      />
      <Input
        type="text"
        name="Skills"
        icon={<CodeIcon />}
        onChange={(e) => updateFields({ skills: e.target.value })}
        placeholder="HTML, CSS, JS, React"
      />
      <Input
        type="text"
        name="Languages"
        icon={<PlanetIcon />}
        onChange={(e) => updateFields({ languages: e.target.value })}
        placeholder="English, German"
      />
    </>
  );
};
