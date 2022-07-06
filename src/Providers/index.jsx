import { GlobalTheme } from "./models/theme/theme";
import { UserProvider } from "./models/user/user";

export const GlobalProvider = ({ children }) => {
  return (
    <GlobalTheme>
      <UserProvider>{children}</UserProvider>
    </GlobalTheme>
  );
};
