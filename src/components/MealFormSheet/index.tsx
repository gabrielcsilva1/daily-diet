import { ReactNode } from "react";
import { Container } from "./style";

type MealFormSheetComponentProps = {
    children: ReactNode
}

export function MealFormSheet({ children }: MealFormSheetComponentProps) {
    return (
        <Container>
            {children}
        </Container>
    )
}