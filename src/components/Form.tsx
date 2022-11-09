import { RadioGroup } from '@headlessui/react'
import { useEffect, useState } from 'react';

const Form: React.FC = () => {
    const [valueSelect, setValueSelect] = useState(5);

    useEffect(() => {
        console.log(valueSelect);
    })

    return (
        <form className="flex flex-col gap-3 w-2/4">
            <div>
                <label className="flex flex-col gap-2 text-lg text-neutral-900" htmlFor="bill-amount">
                    <p className="inline-block">Bill</p>

                    <div className="inline-flex items-center border-2 border-neutral-900 pl-2">
                        <p className="w-full">$</p>

                        <input type="text" className="text-right border-none bg-transparent text-lg w-full focus:ring-0" placeholder="0" id="bill-amount" />
                    </div>
                </label>
            </div>

            <RadioGroup className="text-lg grid grid-cols-1 gap-2" value={valueSelect} onChange={setValueSelect}>
                <p className='text-lg'>Select tip</p>
                <div className='grid grid-cols-3 gap-2'>
                    <RadioGroup.Option value={5} className={({ checked }) => `text-center cursor-pointer p-2 border-2 border-neutral-900 inline-block transition-colors ${checked ? "bg-neutral-900 text-neutral-100" : ""}`}>
                        <p>5%</p>
                    </RadioGroup.Option>

                    <RadioGroup.Option value={10} className={({ checked }) => `text-center cursor-pointer p-2 border-2 border-neutral-900 inline-block transition-colors ${checked ? "bg-neutral-900 text-neutral-100" : ""}`}>
                        <p>10%</p>
                    </RadioGroup.Option>

                    <RadioGroup.Option value={15} className={({ checked }) => `text-center cursor-pointer p-2 border-2 border-neutral-900 inline-block transition-colors ${checked ? "bg-neutral-900 text-neutral-100" : ""}`}>
                        <p>15%</p>
                    </RadioGroup.Option>
                </div>

                <div className='grid grid-cols-3 gap-2'>
                    <RadioGroup.Option value={25} className={({ checked }) => `text-center cursor-pointer p-2 border-2 border-neutral-900 inline-block transition-colors ${checked ? "bg-neutral-900 text-neutral-100" : ""}`}>
                        <p>25%</p>
                    </RadioGroup.Option>

                    <RadioGroup.Option value={50} className={({ checked }) => `text-center cursor-pointer p-2 border-2 border-neutral-900 inline-block transition-colors ${checked ? "bg-neutral-900 text-neutral-100" : ""}`}>
                        <p>50%</p>
                    </RadioGroup.Option>

                    <input onClick={() => setValueSelect(0)} type="text" placeholder="Custom" className={`text-center p-2 border-2 border-neutral-900 text-lg focus:ring-0 focus:border-neutral-900`} />
                </div>
            </RadioGroup>

            <div>
                <label className="flex flex-col gap-2 text-lg text-neutral-900" htmlFor="number-of-people">
                    <p className="inline-block">Number of people</p>

                    <div className="inline-flex items-center border-2 border-neutral-900 pl-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' fill="none" viewBox="0 0 14 15">
                            <path fill="#000" d="M7 7.776a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm2.333-3.5a2.333 2.333 0 1 1-4.666 0 2.333 2.333 0 0 1 4.666 0ZM14 13.61c0 1.166-1.167 1.166-1.167 1.166H1.167S0 14.776 0 13.61c0-1.167 1.167-4.667 7-4.667s7 3.5 7 4.667Zm-1.167-.005c0-.287-.18-1.15-.97-1.941C11.102 10.903 9.67 10.11 7 10.11c-2.672 0-4.102.793-4.863 1.554-.79.79-.968 1.654-.97 1.94h11.666Z" />
                        </svg>


                        <input type="text" className="text-right border-none bg-transparent text-lg w-full focus:ring-0" placeholder="0" id="number-of-people" />
                    </div>
                </label>
            </div>
        </form >
    )
}

export default Form;