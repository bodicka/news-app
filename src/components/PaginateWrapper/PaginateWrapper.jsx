import Paginate from "../Paginet/Paginate"

const PaginateWrapper = ({top, bottom, children, ...paginateProps}) => {
  return (
    <>
      { top && <Paginate {...paginateProps} /> }
        {children}
      { bottom && <Paginate {...paginateProps} /> }
    </>
  )
}

export default PaginateWrapper