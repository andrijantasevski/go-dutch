export interface FormData {
    billAmount: number
    tipAmount: number
    tipRadioGroup: number
    numberOfPeople: number
}

export interface CalculatedTips {
    calculatedTipPerPerson: number
    calculatedTotalPerPerson: number
}