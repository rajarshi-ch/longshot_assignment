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
    //console.log("onDragOver");
  }

  function onDrop(ev: any) {
    let sourceIndex = parseInt(ev.dataTransfer.getData("text/plain"));
    let destinationIndex = parseInt(ev.target.getAttribute("data-index"));
    console.log("Source ", sourceIndex);
    console.log("Destination ", destinationIndex);
  }

  function onDropTop(ev: any) {
    let sourceIndex = parseInt(ev.dataTransfer.getData("text/plain"));
    let destinationIndex = 0;
    console.log("Source ", sourceIndex);
    console.log("Destination ", destinationIndex);
  }

  function onDragStart(ev: any, sourceIndex: number) {
    console.log("dragstart:", sourceIndex.toString());
    ev.dataTransfer.setData("text/plain", sourceIndex);
  }

  // The default behaviour is that the element droppped is added to the next index
  // So we add a buffer element on top of the list to , catch a drop event above the list

  return (
    <ul onDragOver={(e) => onDragOver(e)}>
      <li className="h-10 w-full" onDrop={(e) => onDropTop(e)}></li>
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
