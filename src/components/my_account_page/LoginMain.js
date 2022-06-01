import React from "react";
import FormLayoutContainer from "../../utilities/Form/FormLayoutContainer";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
export default function LoginMain() {
  return (
    <>
      <div className="grid_layout layout_two">
        <FormLayoutContainer form_title="login">
          <LoginForm />
        </FormLayoutContainer>
        <FormLayoutContainer form_title="Registration">
          <SignupForm />
        </FormLayoutContainer>
      </div>
    </>
  );
}
