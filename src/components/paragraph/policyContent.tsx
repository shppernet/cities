import * as React from "react";
interface topicsType {
  topic?: string;
  description: string;
  subLists?: subTopicsType[];
}
interface subTopicsType {
  topic?: string;
  description: string;
}
export interface IPolicyContentProps {
  title: string;
  description: string | string[];
  lists: topicsType[];
}

export default function PolicyContent(props: IPolicyContentProps) {
  return (
    <section className="text-[#777777]    ">
      <h1 className="font-semibold mb-5 text-xl">{props.title}</h1>

      {!Array.isArray(props.description) ? (
        <h6 className="">{props.description}</h6>
      ) : (
        props.description.map((item, index) => (
          <p className="  pb-4" key={index}>
            {item}
          </p>
        ))
      )}

      <ol className="list-decimal pl-3 py-5 space-y-4  ">
        {/* {props.lists.map((list,index)=>
        <li key={index}>
          <strong>{list.title}</strong> {list.description}
          </li>
          })} */}
        {props.lists.map((list, index) => (
          <>
            <li key={index} className=" ">
              <strong className="">{list.topic} </strong> {list.description}
            </li>

            {
              <ol className="pl-6 list-disc ">
                {list.subLists?.map(
                  (subList, index) =>
                    (subList.topic || subList.description) && (
                      <li key={index} className="pb-2">
                        <strong>{subList.topic} </strong>
                        <span>{subList.description}</span>
                      </li>
                    )
                )}
              </ol>
            }
          </>
        ))}
      </ol>
    </section>
  );
}
