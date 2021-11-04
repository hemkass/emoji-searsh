import { useState } from "react";
import data from "./data.json";

const Searsh = () => {
  const [searsh, setSearsh] = useState("");

  return (
    <div>
      <form>
        <input
          onChange={(event) => {
            setSearsh(event.target.value);
          }}
          type="searsh"
          name="searsh"
          placeholder="Recherche"
        ></input>
      </form>

      <div>
        {data
          .filter((elem) => {
            return elem.keywords.includes(searsh);
          })
          .map((elem, index) => {
            return (
              <div className="response" key={index}>
                {elem.symbol}
                {elem.title}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Searsh;
