import { CSSProperties, FC, ReactNode } from "react";

interface Props {
    children?: ReactNode;
}

const style: CSSProperties = {
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: '10px',
    borderRadius: '5px'
}

export const DarkLayout: FC<Props> = ({ children }) => {
    return (
        <div style={ style }>
            <h3>Dark Layout</h3>
            <div>
                { children }
            </div>
        </div>
    );
}