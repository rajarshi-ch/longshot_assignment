import { useEffect } from "react";

export default function RowCards({ rows, headers }) {
  useEffect(() => {
    console.log(rows);
    console.log(headers[0].headers);
  }, []);

  return (
    <>
      {rows.map((row) => {
        return <RowCard values={row.values} />;
      })}
    </>
  );
}

function RowCard({ values }) {
  return (
    <div className="w-full p-6 sm:hidden bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-3 hover:bg-gradient-to-r from-indigo-300 from-10% via-sky-300 via-30% to-emerald-300 to-90% hover:text-white">
      {Object.keys(values).map((key) => {
        return (
          <tr className="flex justify-between border-b-2">
            <td className="left-0 p-4 font-semibold">{key}</td>
            <td className="right-0 p-4">{values[key]}</td>
          </tr>
        );
      })}
    </div>
  );
}
