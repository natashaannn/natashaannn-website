import { PropsWithChildren, DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "./ResponsiveGrid.module.css";

type ResponsiveGridProps = {
    columns?: number;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

const ResponsiveGrid = ({children, columns = 2, className, ...rest}: PropsWithChildren<ResponsiveGridProps>) => {
  return (
    <>
        <div className={`${styles.gridContainer} ${className ?? ""}`} {...rest}>
        {children}
        </div>
    </>
  )
}

export default ResponsiveGrid;