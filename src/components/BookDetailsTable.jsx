import React from "react";

const BookDetailsTable = ({ name, value }) => {
  return (
    <tr>
      <td className="text-[#131313B3] font-medium">{name}</td>
      <td className="font-bold text-[#131313]">{value}</td>
    </tr>
  );
};

export default BookDetailsTable;
