import { useEffect, useState } from "react";
import Form from "./Form";
import { FormData } from "../types";

const Container: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        billAmount: 0,
        tipAmount: 0,
        tipRadioGroup: 15,
        numberOfPeople: 1
    });

    useEffect(() => {
        console.log(formData);
    }, [formData])

    return (
        <div className="w-11/12 lg:w-7/12 xl:w-6/12 border-2 border-neutral-900 p-6">
            <Form setFormData={setFormData} formData={formData} />
        </div>
    )
}

export default Container;