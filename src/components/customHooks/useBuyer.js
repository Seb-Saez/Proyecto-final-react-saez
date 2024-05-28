import { useState } from "react";

export default function useBuyer() {
  const [buyer, setBuyer] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
  };

  return { buyer, handleInputChange };
}
