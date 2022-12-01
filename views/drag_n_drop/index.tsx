import { useReducer, useState } from "react";
import reducer, { Outline } from "./utils/reducer";

const outLinesList: Array<Outline> = [
  { title: "Shopping in Barcelona" },
  { title: "Famous shopping steets" },
  { title: "Shopping Malls" },
  { title: "Markets" },
  { title: "Opening Times" },
  { title: "Sales tax Refunds" },
];

export default function DNDApp() {
  const [outlines, dispatch] = useReducer(reducer, outLinesList);

  function onDragOver(e: any) {
    e.preventDefault();
  }

  function onDrop(ev: any) {
    let sourceIndex = parseInt(ev.dataTransfer.getData("text/plain"));
    let destinationIndex = parseInt(ev.target.getAttribute("data-index"));
    // console.log("Source ", sourceIndex);
    // console.log("Destination ", destinationIndex);
    dispatch({
      type: "reorderList",
      source: sourceIndex,
      destination: destinationIndex,
    });
  }

  function onDragStart(ev: any, sourceIndex: number) {
    //console.log("dragstart:", sourceIndex.toString());
    ev.dataTransfer.setData("text/plain", sourceIndex);
  }

  return (
    <ul onDragOver={(e) => onDragOver(e)}>
      {outlines.map((outline: Outline, index: number) => (
        <li
          className="block w-full p-3 bg-gray-100 border border-gray-200 rounded-lg mb-2 mw-1/2"
          key={outline.title}
          id={index.toString()}
          data-index={index}
          draggable
          onDragStart={(e) => onDragStart(e, index)}
          onDrop={(e) => onDrop(e)}
        >
          {outline.title}
        </li>
      ))}
    </ul>
  );
}
