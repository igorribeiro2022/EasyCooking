import { GlobalTheme } from "./models/theme/theme";

export const GlobalProvider = ({ children }) => {

    return (
            <GlobalTheme>
                {children}
            </GlobalTheme>
    )
}
