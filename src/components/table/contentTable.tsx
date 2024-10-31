import * as React from "react";

export interface IContentTableProps {
  titles: string[];
  tableData: {
    category: string;
    examples: string;
  }[];
  localActive?: string; // Added optional prop
}

export default function ContentTable(props: IContentTableProps) {
  // Determine if we need to reverse the content based on localActive
  const isReversed = props.localActive === "ar";

  return (
    <div className="overflow-x-auto">
      {/* Enables horizontal scrolling on small screens */}
      <table className="min-w-full bg-white border-collapse border-2 border-gray-400">
        <thead>
          <tr>
            {props.titles.map((title, index) => (
              <th
                key={index}
                className={`${
                  isReversed ? "text-right" : ""
                } border-2 border-gray-400 p-4 text-left font-bold`}
              >
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.tableData.map((row, index) => (
            <tr key={index}>
              {isReversed ? (
                <>
                  <td className="w-1/3 p-4 border-2 border-gray-400 font-bold">
                    {row.category}
                  </td>
                  <td className="w-2/3 p-4 border-2 border-gray-400">
                    {row.examples}
                  </td>
                </>
              ) : (
                <>
                  <td className="w-1/3 p-4 border-2 border-gray-400 font-bold">
                    {row.category}
                  </td>
                  <td className="w-2/3 p-4 border-2 border-gray-400">
                    {row.examples}
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
