import { SignUp } from "@clerk/clerk-react";

export default function SignUpPage() {
  return (
    <>
      <h1>Hello</h1>
      <SignUp path="/sign-up" />
    </>
  );
}
