import React, { useState } from "react";

const Form = () => {
  const [destinationValue, setDestinationValue] = useState("");

  const handleDestinationChange = (e: React.ChangeEvent<HTMLInputElement>) => setDestinationValue(e.target.value)

  return (
    <form>
      <label htmlFor="destination">
        Enter a destination:
        <input type="text" id="destination" value={destinationValue} onChange={handleDestinationChange}/> 
      </label>
    </form>
  )
}

export default Form;