// import React, { useMemo } from "react";
// import { useTable } from "react-table";
// import { COLUMNS } from "../columns";

// export default function PaymentCardTable() {
//   const columns = useMemo(() => COLUMNS, []);
//   const data = useMemo(() => , []);

//   const tableInstance = useTable({
//     columns,
//     data,
//   });

//   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
//     tableInstance;

//   return (
//     <table {...getTableProps()}>
//       <thead>
//         {headerGroups.map((headerGroup) => (
//           <tr {...headerGroup.getFooterGroupProps()}>
//             {headerGroup.headers.map((column) => (
//               <th {...column.getHeaderProps()}>{cell.render("Header")}</th>
//             ))}
//             <th></th>
//           </tr>
//         ))}
//       </thead>

//       <tbody {...getTableBodyProps()}>
//         {rows.map((row) => {
//           prepareRow(row);
//           return (
//             <tr {...row.getRowProps()}>
//               {row.cells.map((cell) => {
//                 return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
//               })}
//             </tr>
//           );
//         })}
//         <tr>
//           <td></td>
//         </tr>
//       </tbody>
//     </table>
//   );
// }
