import React, { useState } from 'react';
import ContentWrapper from '../../Components/ContentWrapper/ContentWrapper';

const Stepper = ({ currentStep, numberOfSteps, children }) => {
  const current = currentStep + 1;
  return (
    <div>
      <div className="flex items-center rounded-t-lg overflow-hidden bg-purple-200">
        <div
          className={`
               h-3 bg-purple-600 
               transition-[width]
               w-${
                 current === numberOfSteps
                   ? "full"
                   : `${(current / numberOfSteps) * 100}% rounded-r-lg `
               } 
               duration:300
               `}
        ></div>
      </div>
      <div className="rounded-b-lg border border-stroke bg-white p-10 mb-5">
        {React.Children.toArray(children)[currentStep]}
      </div>
    </div>
  );
};

const StepperButton = ({ title, onClick, className, ...props }) => {
  return (
    <button
      className={`${className} py-4 px-8 border border-stroke rounded-lg focus:outline-none transition ease-in-out duration:600 hover:bg-slate-100`}
      onClick={onClick}
      {...props}
    >
      {title}
    </button>
  );
};

const StepperRoot = ({ children, numberOfSteps }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNextClick = () => {
    if (currentStep < numberOfSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePreviousClick = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="max-w-180 m-20">
      <Stepper currentStep={currentStep} numberOfSteps={numberOfSteps}>
        {children}
      </Stepper>
      <div className="flex justify-end">
        {currentStep !== 0 && (
          <StepperButton
            className="mr-5"
            title="Previous"
            onClick={handlePreviousClick}
          />
        )}
        <StepperButton title="Next" onClick={handleNextClick} />
      </div>
    </div>
  );
};

const LevelProgressScreen = () => {
  return (
    <ContentWrapper>
      <StepperRoot className="min-w-[300px] m-20" numberOfSteps={5}>
        <div>Step 1</div>
        <div>Step 2</div>
        <div>Step 3</div>
        <div>Step 4</div>
        <div>Step 5</div>
      </StepperRoot>
    </ContentWrapper>
  );
};

export default LevelProgressScreen;
