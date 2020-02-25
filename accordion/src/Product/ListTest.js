import React from "react";

export default function ListTest() {
  let listItems = ["Lorem, ipsum.", "Ipsa, natus!", "Illum, accusamus!", "Recusandae, quae?"];

  return (
    <ul>
      {listItems.map((palabra, idx) => (
        <li>
          #{idx + 1}: {palabra} {Math.random()}
        </li>
      ))}
    </ul>
  );
}
