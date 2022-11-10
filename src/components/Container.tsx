import { useEffect, useState } from "react";
import Form from "./Form";
import TipCalculated from "./TipCalculated";
import { FormData } from "../types";
import useTip from "../utils/useTip";

const Container: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        billAmount: 0,
        tipAmount: 0,
        tipRadioGroup: 15,
        numberOfPeople: 1
    });
    const { calculateTipPerPerson, calculatedTips } = useTip()

    useEffect(() => {
        calculateTipPerPerson(formData);
    }, [formData])

    useEffect(() => {
        console.log(calculatedTips);
    }, [calculatedTips])

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-11/12 lg:w-7/12 xl:w-6/12 border-2 border-neutral-900 p-4 lg:p-6">
            <Form setFormData={setFormData} formData={formData} />
            <TipCalculated calculatedTips={calculatedTips} setFormData={setFormData} />
        </div>
    )
}

export default Container;