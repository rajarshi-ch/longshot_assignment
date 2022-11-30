import { BsFilterLeft } from "react-icons/bs";
import { data } from "../utils/data";
import keywordDifficulty from "../utils/keywordDifficultyMapper";
import { IntentLetterBadge } from "./intentBadge";
import { BsCircleFill } from "react-icons/bs";

function CheckBox() {
  return (
    <input
      id="default-checkbox"
      type="checkbox"
      value=""
      className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
    />
  );
}

function DifficultyChip({ difficulty }: { difficulty: number }) {
  const d = keywordDifficulty(difficulty);

  return <BsCircleFill color={d.color} size={10} className="my-auto ml-2" />;
}

//Note : Would be implemented using a library like react-table in production

export default function Table() {
  return (
    <div className="overflow-x-auto bg-white border border-gray-200 sm:rounded-lg mt-2">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
          <tr>
            <th scope="col" className="py-3 px-6">
              <CheckBox />
            </th>
            <th scope="col" className="py-3 px-6">
              Keyword
            </th>
            <th scope="col" className="py-3 px-6">
              Intent
            </th>
            <th scope="col" className="py-3 px-6">
              <div className="flex items-center">
                Volume
                <BsFilterLeft className="ml-1 w-3 h-3" />
              </div>
            </th>
            <th scope="col" className="py-3 px-6">
              <div className="flex items-center">
                KD%
                <BsFilterLeft className="ml-1 w-3 h-3" />
              </div>
            </th>
            <th scope="col" className="py-3 px-6">
              <div className="flex items-center">
                CPC(USD)
                <BsFilterLeft className="ml-1 w-3 h-3" />
              </div>
            </th>
            <th scope="col" className="py-3 px-6">
              <div className="flex items-center">
                Com.
                <BsFilterLeft className="ml-1 w-3 h-3" />
              </div>
            </th>
            <th scope="col" className="py-3 px-6">
              <div className="flex items-center">
                Results
                <BsFilterLeft className="ml-1 w-3 h-3" />
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.raw_broadmatch_data.map((item) => (
            <tr
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              key={item[0]}
            >
              <td className="py-4 px-6">
                <CheckBox />
              </td>
              <td className="py-4 px-6">{item[0]}</td>
              <td className="py-4 px-6">
                <IntentLetterBadge intent={parseInt(item[2])} />
              </td>
              <td className="py-4 px-6">{item[1]}</td>
              <td className="py-4 px-6">
                <div className="flex flex-row spacing-x-2 ">
                  {item[7]}
                  <DifficultyChip difficulty={parseInt(item[7])} />
                </div>
              </td>
              <td className="py-4 px-6">{item[3]}</td>
              <td className="py-4 px-6">{item[4]}</td>
              <td className="py-4 px-6">{parseInt(item[5]) / 1000000} M</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
