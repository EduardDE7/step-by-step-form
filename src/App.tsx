import { FormEvent, useState } from 'react';
import { BgImage } from './assets/BgImage';
import { useMultiStepForm } from './hook/useMultiStepForm';
import { PersonalInfoForm } from './components/forms/PersonalInfoForm';
import { LocationForm } from './components/forms/LocationForm';
import { Button } from './components/ui/Button';
import { QualificationForm } from './components/forms/QualificationForm';
import { FormData } from './types/type';

const INITIAL_DATA: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  age: '',
  gender: '',
  street: '',
  city: '',
  country: '',
  education: '',
  skills: '',
  experience: '',
  languages: '',
};

function App() {
  const [data, setData] = useState(INITIAL_DATA);
  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultiStepForm([
      <PersonalInfoForm {...data} updateFields={updateFields} />,
      <LocationForm {...data} updateFields={updateFields} />,
      <QualificationForm {...data} updateFields={updateFields} />,
    ]);

  const percentage = ((currentStepIndex + 1) / steps.length) * 100;

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) return next();
    console.log(data);
  }

  return (
    <div className="min-w-screen min-h-screen bg-indigo-300 flex items-center justify-center px-5 py-3">
      <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full max-w-[1000px] overflow-hidden">
        <div className="md:flex w-full">
          <div className="hidden md:block w-1/2 bg-indigo-500 py-10 px-10">
            <BgImage />
          </div>
          <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
            <div className="text-center mb-10">
              <h1 className="font-bold text-2xl lg:text-3xl text-gray-900">
                Recruitment Intake Form
              </h1>
              <p>Enter your information</p>
            </div>

            <form onSubmit={onSubmit}>
              <span className="flex items-center relative w-full h-[10px] mb-5 rounded-[10px] bg-indigo-300 overflow-hidden">
                <span
                  style={{ width: `${percentage}%` }}
                  className="absolute left-0 w-[50%] h-full bg-indigo-500"
                ></span>
              </span>
              {step}
              <div className="flex gap-3 my-5">
                <Button invisible={isFirstStep} onClick={back}>
                  Previous
                </Button>
                <Button type="submit">{isLastStep ? 'Finish' : 'Next'}</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
