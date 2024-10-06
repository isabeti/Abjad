const TableItem = ({ children, cln }) => {
  return (
    <div className={`flex justify-center w-1/5 my-[1.28125rem] ${cln}`}>
      {children}
    </div>
  );
};

export default TableItem;
