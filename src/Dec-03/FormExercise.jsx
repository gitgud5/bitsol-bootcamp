import React from "react";
import { useState } from "react";
import LeForm from "./LeForm";
import Results from "./Results";

export default function FormExercise() {
  const [leDeets, setLeDeets] = useState({
    email: "Not given",
    password: "Not given",
    satisfied: "IDK",
  });

  const [submitted, setsubmitted] = useState(false);

  return (
    <>
      {!submitted ? (
        <LeForm
          setLeDeets={setLeDeets}
          leDeets={leDeets}
          setsubmitted={setsubmitted}
        />
      ) : (
        <Results deets={leDeets} />
      )}
    </>
  );
}
