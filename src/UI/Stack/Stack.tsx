import { ReactNode, CSSProperties } from "react";

interface IStack {
    title?: string;
    children?: ReactNode | ReactNode[];
    className?: string;
    titleSize?: number;
    titleStyles?: CSSProperties;
}

const Stack = ({
    title,
    children,
    className,
    titleSize,
    titleStyles,
}: IStack) => {
    return (
        <div className={className || ""}>
            <div
                style={{ ...titleStyles, fontSize: `${titleSize || 14}px` }}
                className={`text-main font-bold mb-3`}
            >
                {title?.toUpperCase()}
            </div>
            <div className="flex flex-wrap gap-2">{children}</div>
        </div>
    );
};

export default Stack;
