import React from "react";
import Button from "./Button";
import { scrollToElement } from "../helpers/scrollToElement";

export default function ContactMeButton() {
  return (
    <Button
      type="button"
      onClick={() => {
        scrollToElement("#contact");
      }}
    >
      Contáctame
    </Button>
  );
}
