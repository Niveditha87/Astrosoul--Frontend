import React, { useState } from "react";
import { StepperContext } from "./Contexts/StepperContext";
import Stepper from "./Stepper";
import StepperControl from "./StepperControl";
import GeneralInfo from "./Steps/GeneralInfo";
import Personal from "./Steps/Personal";
// import Final from "./steps/Final";
import Professional from "./Steps/Professional";
import Otp from "./Steps/Otp";
import TeachingWriting from "./Steps/TeachingWriting";
import BankingInfo from "./Steps/BankingInfo";
import OtherPlatformInfo from "./Steps/OtherPlatformInfo";

const AstrologerRegistration = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [userData, setUserData] = useState("");
    const [finalData, setFinalData] = useState([]);
    const steps = [
        "General Info",
        "OTP",
        "Personal",
        "Professional",
        "Teaching/Writing",
        "Banking Info",
        "Other Platform Info",
    ];

    const displayStep = (step) => {
        switch (step) {
            case 1:
                return <GeneralInfo />;
            case 2:
                return <Otp />;
            case 3:
                return <Personal />;
            case 4:
                return <Professional />;
            case 5:
                return <TeachingWriting />;
            case 6:
                return <BankingInfo />;
            case 7:
                return <OtherPlatformInfo />;
            default:
        }
    };
    const handleClick = (direction) => {
        let newStep = currentStep;

        direction === "next" ? newStep++ : newStep--;
        //check if steps are with in bounds
        newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
    };
    return (
        <>
            {/* <section > */}
            <div className=" mx-auto shadow-xl rounded-2xl pb-2 bg-white">
                <div className="container horizontal mt-5">
                    <Stepper steps={steps} currentStep={currentStep} />
                    {/* dispay components */}
                    <div className="my-10 p-10">
                        <StepperContext.Provider
                            value={{
                                userData,
                                setUserData,
                                finalData,
                                setFinalData,
                            }}
                        >
                            {displayStep(currentStep)}
                        </StepperContext.Provider>
                    </div>
                </div>
                {/* Navigation controls */}
                {currentStep !== steps.length && (
                    <StepperControl
                        handleClick={handleClick}
                        currentStep={currentStep}
                        steps={steps}
                    />
                )}
            </div>
            {/* </section> */}
        </>
    );
};

export default AstrologerRegistration;