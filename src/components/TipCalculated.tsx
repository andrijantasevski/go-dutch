import { CalculatedTips } from "../types";
import { FormData } from "../types";

interface Props {
    calculatedTips: CalculatedTips
    setFormData: React.Dispatch<React.SetStateAction<FormData>>
}

const TipCalculated: React.FC<Props> = ({ calculatedTips, setFormData }) => {
    const tipPerPerson = (isNaN(calculatedTips.calculatedTipPerPerson) || calculatedTips.calculatedTipPerPerson < 0) ? "0.00" : calculatedTips.calculatedTipPerPerson.toFixed(2);

    const totalPerPerson = (isNaN(calculatedTips.calculatedTipPerPerson) || calculatedTips.calculatedTotalPerPerson < 0) ? "0.00" : calculatedTips.calculatedTotalPerPerson.toFixed(2);

    function resetFormData() {
        setFormData({
            tipAmount: 0,
            billAmount: 0,
            numberOfPeople: 1,
            tipRadioGroup: 15
        })
    }
    return (
        <div className="lg:border-2 border-neutral-900 lg:p-6 flex flex-col gap-4 justify-between">
            <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-lg lg:text-xl">Tip amount</p>
                        <p className="text-neutral-400">/person</p>
                    </div>

                    <p className="text-2xl">${tipPerPerson}</p>
                </div>

                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-lg lg:text-xl">Total</p>
                        <p className="text-neutral-400">/person</p>
                    </div>

                    <p className="text-2xl">${totalPerPerson}</p>
                </div>
            </div>

            <button disabled={(tipPerPerson === "0.00" && totalPerPerson === "0.00")} onClick={resetFormData} className="uppercase w-full text-neutral-900 border-2 border-neutral-900 disabled:border-neutral-400 disabled:text-neutral-400 py-1">reset</button>
        </div>
    )
}

export default TipCalculated;