import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [form, setForm] = useState({
    name: "",
    position: "",
    level: "",
  });
  const navigate = useNavigate();

  // Method to update the state properties
  const updateForm = (value) => {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  };

  //Handling the Submission
  const onSubmit = async (e) => {
    e.preventDefault();

    //Post request to the create url, it will add a new record to the database
    const newPerson = { ...form };
    await fetch("http://localhost:5000/record", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPerson),
    }).catch((error) => {
      window.alert(error);
      return;
    });

    setForm({ name: "", position: "", level: "" });
    navigate("/");
  };

  return <div></div>;
};

export default Create;
