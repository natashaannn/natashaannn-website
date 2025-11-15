import { PropsWithChildren, DetailedHTMLProps, HTMLAttributes } from "react";

type ResponsiveGridProps = {
    columns?: number;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

const ResponsiveGrid = ({children, columns = 2, className, ...rest}: PropsWithChildren<ResponsiveGridProps>) => {
  return (
    <>
        <div className={`grid__container ${className ?? ""}`} {...rest}>
        {children}
        </div>
        <style jsx>{`
        .grid__container {
        display: grid;
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 1fr;
        align-items: center;
        justify-content: center;
        margin-left: center;
        margin-right: center;
        }

        @media screen and (orientation: landscape) {
        .grid__container {
          grid-template-rows: 1fr;
          grid-template-columns: 1fr 1fr;
        }
        }  
        `}</style>
    </>
  )
}

export default ResponsiveGrid;