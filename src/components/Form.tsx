import { useEffect, useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { FormData } from "../types";
const tipValues = [5, 10, 15, 25, 50];

interface Props {
    setFormData: React.Dispatch<React.SetStateAction<FormData>>
    formData: FormData
}

const Form: React.FC<Props> = ({ setFormData, formData }) => {
    const [tipRadioGroup, setTipRadioGroup] = useState(15);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { valueAsNumber, name } = e.target;

        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: valueAsNumber,
            }
        })
    }

    useEffect(() => {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                tipRadioGroup: tipRadioGroup
            }
        })
    }, [tipRadioGroup])

    return (
        <form className="flex flex-col gap-3">
            <div>
                <label
                    className="flex flex-col gap-2 text-lg text-neutral-900"
                    htmlFor="bill-amount"
                >
                    <p className="inline-block">Bill</p>

                    <div className="inline-flex items-center border-2 border-neutral-900 pl-2">
                        <p className="w-full">$</p>

                        <input
                            onChange={handleChange}
                            value={formData.billAmount === 0 ? "" : formData.billAmount}
                            name="billAmount"
                            type="number"
                            className="w-full border-none bg-transparent text-right text-lg focus:ring-0"
                            placeholder="0"
                            id="bill-amount"
                        />
                    </div>
                </label>
            </div>

            <p className="text-lg">Select tip</p>
            <RadioGroup className="grid grid-cols-1 gap-2 text-lg" value={formData.tipRadioGroup} onChange={setTipRadioGroup} onClick={() => setFormData(prevFormData => { return { ...prevFormData, tipAmount: 0 } })}>
                <div className="grid grid-cols-3 gap-2">
                    {tipValues.map((tipValue) => {
                        return (
                            <RadioGroup.Option
                                key={tipValue}
                                value={tipValue}
                                className={({ checked }) =>
                                    `inline-block cursor-pointer border-2 border-neutral-900 p-2 text-center transition-colors ${checked ? "bg-neutral-900 text-neutral-100" : ""
                                    }`
                                }
                            >
                                <p>{tipValue}%</p>
                            </RadioGroup.Option>
                        );
                    })}

                    <input
                        onClick={() => setTipRadioGroup(0)}
                        onChange={handleChange}
                        value={formData.tipAmount === 0 ? "" : formData.tipAmount}
                        name="tipAmount"
                        type="number"
                        placeholder="Custom"
                        className={`border-2 border-neutral-900 p-2 text-center text-lg focus:border-neutral-900 focus:ring-0`}
                    />
                </div>
            </RadioGroup>

            <div>
                <label
                    className="flex flex-col gap-2 text-lg text-neutral-900"
                    htmlFor="number-of-people"
                >
                    <p className="inline-block">Number of people</p>

                    <div className="inline-flex items-center border-2 border-neutral-900 pl-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 14 15"
                        >
                            <path
                                fill="#000"
                                d="M7 7.776a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm2.333-3.5a2.333 2.333 0 1 1-4.666 0 2.333 2.333 0 0 1 4.666 0ZM14 13.61c0 1.166-1.167 1.166-1.167 1.166H1.167S0 14.776 0 13.61c0-1.167 1.167-4.667 7-4.667s7 3.5 7 4.667Zm-1.167-.005c0-.287-.18-1.15-.97-1.941C11.102 10.903 9.67 10.11 7 10.11c-2.672 0-4.102.793-4.863 1.554-.79.79-.968 1.654-.97 1.94h11.666Z"
                            />
                        </svg>

                        <input
                            name="numberOfPeople"
                            onChange={handleChange}
                            value={formData.numberOfPeople}
                            type="number"
                            className="w-full border-none bg-transparent text-right text-lg focus:ring-0"
                            placeholder="0"
                            id="number-of-people"
                        />
                    </div>
                </label>
            </div>
        </form>
    );
};

export default Form;
