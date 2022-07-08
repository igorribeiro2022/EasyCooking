import { IngredientsProvider } from "./models/ingredients/ingredients";
import { GlobalTheme } from "./models/theme/theme";
import { UserProvider } from "./models/user/user";

export const GlobalProvider = ({ children }) => {
  return (
    <GlobalTheme>
      <UserProvider>
        <IngredientsProvider>{children}</IngredientsProvider>
      </UserProvider>
    </GlobalTheme>
  );
};
