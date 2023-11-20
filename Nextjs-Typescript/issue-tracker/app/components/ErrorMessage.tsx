import React, { PropsWithChildren, ReactNode } from "react";
import { Text } from "@radix-ui/themes";

// interface Props {
//   children: ReactNode;
// }

const ErrorMessage = ({ children }: PropsWithChildren) => {
  if (!children) return;
  return (
    <Text color="red" className="italic" as="p">
      {children}
    </Text>
  );
};

export default ErrorMessage;
