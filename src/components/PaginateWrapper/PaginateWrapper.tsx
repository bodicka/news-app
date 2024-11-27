import React from "react";
import Paginate from "../Paginet/Paginate";
import { PaginateProps } from "../../interfase/interfase";

interface Props {
  top?: boolean;
  bottom?: boolean;
  children: React.ReactNode;
}

const PaginateWrapper = ({top, bottom, children, ...paginateProps}: Props & PaginateProps) => {
  return (
    <>
      { top && <Paginate {...paginateProps} /> }
        {children}
      { bottom && <Paginate {...paginateProps} /> }
    </>
  )
}
export default PaginateWrapper;