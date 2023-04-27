import React from "react";
import { useTable } from "react-table";
import RowCards from "./components/row_card";

export default function ReactTable() {
  const data = React.useMemo(
    () => [
      {
        col1: "Hello",
        col2: "World",
        col3: "How",
        col4: "Are",
        col5: "You",
      },
      {
        col1: "Hello",
        col2: "World",
        col3: "How",
        col4: "Are",
        col5: "You",
      },
      {
        col1: "Hello",
        col2: "World",
        col3: "How",
        col4: "Are",
        col5: "You",
      },
      {
        col1: "Hello",
        col2: "World",
        col3: "How",
        col4: "Are",
        col5: "You",
      },
      {
        col1: "Hello",
        col2: "World",
        col3: "How",
        col4: "Are",
        col5: "You",
      },
      {
        col1: "Hello",
        col2: "World",
        col3: "How",
        col4: "Are",
        col5: "You",
      },
      {
        col1: "Hello",
        col2: "World",
        col3: "How",
        col4: "Are",
        col5: "You",
      },
      {
        col1: "Hello",
        col2: "World",
        col3: "How",
        col4: "Are",
        col5: "You",
      },
      {
        col1: "Hello",
        col2: "World",
        col3: "How",
        col4: "Are",
        col5: "You",
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "Column 1",
        accessor: "col1", // accessor is the "key" in the data
      },
      {
        Header: "Column 2",
        accessor: "col2",
      },
      {
        Header: "Column 3",
        accessor: "col3", // accessor is the "key" in the data
      },
      {
        Header: "Column 4",
        accessor: "col4",
      },
      {
        Header: "Column 5",
        accessor: "col5", // accessor is the "key" in the data
      },
    ],
    []
  );

  const tableInstance = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <>
      <table {...getTableProps()} className="w-full hidden sm:table">
        <thead className="sticky top-0  border-separate">
          {
            // Loop over the header rows
            headerGroups.map((headerGroup) => (
              // Apply the header row props
              <tr {...headerGroup.getHeaderGroupProps()}>
                {
                  // Loop over the headers in each row
                  headerGroup.headers.map((column) => (
                    // Apply the header cell props
                    <th {...column.getHeaderProps()} className="p-4 bg-white">
                      {
                        // Render the header
                        column.render("Header")
                      }
                    </th>
                  ))
                }
              </tr>
            ))
          }
        </thead>
        {/* Apply the table body props */}
        <tbody {...getTableBodyProps()}>
          {
            // Loop over the table rows
            rows.map((row, index) => {
              // Prepare the row for display
              prepareRow(row);
              return (
                // Apply the row props
                <tr
                  {...row.getRowProps()}
                  key={`${index} row`}
                  className={`${
                    index % 2 == 0 ? "bg-blue-50" : ""
                  } hover:bg-gradient-to-r from-indigo-300 from-10% via-sky-300 via-30% to-emerald-300 to-90% hover:text-white`}
                >
                  {
                    // Loop over the rows cells
                    row.cells.map((cell) => {
                      // Apply the cell props
                      return (
                        <td {...cell.getCellProps()} className="p-10">
                          {
                            // Render the cell contents
                            cell.render("Cell")
                          }
                        </td>
                      );
                    })
                  }
                </tr>
              );
            })
          }
        </tbody>
      </table>
      <RowCards rows={rows} headers={headerGroups} />
    </>
  );
}
