import { useState } from "react";
import { FormData, CalculatedTips } from "../types";

function useTip() {
    const [calculatedTips, setCalculatedTips] = useState<CalculatedTips>({
        calculatedTipPerPerson: 0,
        calculatedTotalPerPerson: 0
    });

    function calculateTipPerPerson(formData: FormData) {

        const calculatedTipPerPerson = (((formData.tipRadioGroup ? formData.tipRadioGroup : formData.tipAmount) / 100) * formData.billAmount) / formData.numberOfPeople;

        const calculatedTotalPerPerson = (formData.billAmount / formData.numberOfPeople) + calculatedTipPerPerson;

        setCalculatedTips({
            calculatedTipPerPerson: calculatedTipPerPerson,
            calculatedTotalPerPerson: calculatedTotalPerPerson
        })
    }

    return {
        calculatedTips,
        calculateTipPerPerson
    };
}

export default useTip;