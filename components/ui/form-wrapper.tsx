"use client";

import { Header } from "./header";

interface AuthWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  messageNote: string;
}

export const FormWrapper = ({
  children,
  headerLabel,
  messageNote,
}: AuthWrapperProps) => {
  return (
    <div className="form-wrapper">
        <Header label={headerLabel} fontSize="40px" fontFamily='avenirNext' fontWeight='700' />
        <p className="form-message">{messageNote}</p>
        {children}
    </div>
  );
};
