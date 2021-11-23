import React, { useState } from "react";

type FormProps = {
  setDestination: React.Dispatch<React.SetStateAction<string>>,
}

const countryOptions: Array<string> = ["CAN", "US", "MEX", "BLZ", "GTM", "SLV", "HND", "NIC", "CRI", "PAN"];

const Form = ({setDestination}: FormProps) => {
  const [destinationValue, setDestinationValue] = useState("");
  const [isBadValue, setIsBadValue] = useState(false);

  const handleDestinationChange = (e: React.ChangeEvent<HTMLInputElement>) => setDestinationValue(e.target.value.toUpperCase());

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(countryOptions.includes(destinationValue)) {
      setIsBadValue(false);
      setDestination(destinationValue);
      setDestinationValue("");
    } else {
      setIsBadValue(true);
      setDestinationValue("");
    }
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="destination">
        Enter a destination:
        <input type="text" id="destination" value={destinationValue} onChange={handleDestinationChange}/>
        {isBadValue && <p className="form-error">Wprowadź poprawną opcję! Dostępne opcje: {countryOptions.join(', ')}</p>}
        <button className="form-button" type="submit">Get route</button>
      </label>
    </form>
  )
}

export default Form;