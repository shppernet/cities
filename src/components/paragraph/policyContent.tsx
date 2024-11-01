import * as React from "react";
interface topicsType {
  topic?: string;
  description: string | string[];
  subLists?: subTopicsType[];
}
interface subTopicsType {
  topic?: string;
  description: string | string[];
}
export interface IPolicyContentProps {
  title?: string;
  description?: string | string[];
  conclusion?: string | string[];
  lists: topicsType[];
  listStyle?: string;
  subListStyle?: string;
}

export default function PolicyContent(props: IPolicyContentProps) {
  const getListStyle = () => {
    switch (props.listStyle) {
      case "alpha":
        return "lower-alpha";
      case "roman":
        return "upper-roman";
      case "dot":
        return "disc";
      case "dash":
        return "none"; // Set to "none" to add custom "-" style
      default:
        return "decimal"; // Default style for unordered list
    }
  };
  const getSubListStyle = () => {
    switch (props.subListStyle) {
      case "alpha":
        return "lower-alpha";
      case "roman":
        return "upper-roman";
      case "decimal":
        return "decimal";
      case "dash":
        return "none"; // Set to "none" to add custom "-" style
      default:
        return "disc"; // Default style for unordered list
    }
  };
  const listStyleType = getListStyle();
  const subListStyleType = getSubListStyle();
  return (
    <section className="text-[#777777]">
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

      <ol
        className="list-decimal pl-3 py-5 space-y-4  ml-4 "
        style={{
          listStyleType,
          paddingLeft: props.listStyle === "dash" ? "1em" : "initial",
        }}
      >
        {/* {props.lists.map((list,index)=>
        <li key={index}>
          <strong>{list.title}</strong> {list.description}
          </li>
          })} */}
        {props.lists.map((list, index) => (
          <>
            <li
              key={index}
              className={`${
                props.listStyle === "dash" ? "flex items-center gap-3" : ""
              } pb-2`}
            >
              {props.listStyle === "dash" ? "- " : ""}
              <strong className="">{list.topic} </strong>
              {!Array.isArray(list.description) ? (
                <h6 className="">{list.description}</h6>
              ) : (
                list.description.map((item, index) => (
                  <p className="  pb-4" key={index}>
                    {item}
                  </p>
                ))
              )}
            </li>

            {
              <ol
                className="pl-6 list-disc space-y-2 ml-4"
                style={{
                  listStyleType: subListStyleType,
                  paddingLeft:
                    props.subListStyle === "dash" ? "1em" : "initial",
                }}
              >
                {list.subLists?.map(
                  (subList, index) =>
                    (subList.topic || subList.description) && (
                      <li
                        key={index}
                        className={`${
                          props.subListStyle === "dash"
                            ? "flex items-center gap-3"
                            : ""
                        } pb-2`}
                      >
                        {props.subListStyle === "dash" ? "- " : ""}
                        <strong>{subList.topic} </strong>
                        {!Array.isArray(subList.description) ? (
                          <h6 className="">{subList.description}</h6>
                        ) : (
                          subList.description.map((item, num) => (
                            <p className="  pb-4" key={num}>
                              <span>{item}</span>
                            </p>
                          ))
                        )}
                      </li>
                    )
                )}
              </ol>
            }
          </>
        ))}
      </ol>
      {!Array.isArray(props.conclusion) ? (
        <h6 className="">{props.conclusion}</h6>
      ) : (
        props.conclusion.map((item, index) => (
          <p className="  pb-4" key={index}>
            {item}
          </p>
        ))
      )}
    </section>
  );
}
