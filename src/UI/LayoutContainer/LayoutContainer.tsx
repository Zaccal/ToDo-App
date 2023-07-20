import { ReactElement } from "react";
import { isNotUndefind } from "../../types/Guards/isNotUndefind";
import { GetTemplateColums, TypeGetTemplateColums } from "./GetTemplateColums";

type TypeIndents = Record<
    | "marginBottom"
    | "marginTop"
    | "marginRight"
    | "marginLeft"
    | "paddingTop"
    | "paddingBottom"
    | "paddingRight"
    | "paddingLeft",
    number
>;

interface ILayoutContainer extends Partial<TypeIndents> {
    children: ReactElement | ReactElement[];
    spacing?: number;
    col?: TypeGetTemplateColums;
    typeSize?: "rem" | "px";
}

const LayoutContainer = ({
    children,
    col,
    spacing,
    paddingTop,
    paddingBottom,
    paddingRight,
    paddingLeft,
    marginTop,
    marginBottom,
    typeSize = "rem",
    marginLeft,
    marginRight,
}: ILayoutContainer) => {
  
    const containerStyles = {
        gridTemplateColumns: GetTemplateColums(isNotUndefind(col)),
        gridGap: `${isNotUndefind(spacing)}${typeSize}`,

        padding: `${isNotUndefind(paddingTop)}${typeSize} 
                  ${isNotUndefind(paddingRight)}${typeSize} 
                  ${isNotUndefind(paddingBottom)}${typeSize} 
                  ${isNotUndefind(paddingLeft)}${typeSize}`,

        margin: `${isNotUndefind(marginTop)}${typeSize} 
                ${isNotUndefind(marginRight)}${typeSize} 
                ${isNotUndefind(marginBottom)}${typeSize} 
                ${isNotUndefind(marginLeft)}${typeSize}`,
    };

    return (
        <div style={containerStyles} className="lg:grid h-screen">
            {children}
        </div>
    );
};

export default LayoutContainer;
