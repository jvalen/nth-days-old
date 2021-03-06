import React from "react";
import Options from "./Options";
import Matches from "./Matches";
import Selection from "./Selection";
import CurrentDay from "./CurrentDay";
import Astronaut from "./Astronaut";

const Results = (props) => {
  return (
    <div className="results">
      <Selection
        messages={props.messages}
        locale={props.locale}
        data={props.data}
      />
      <CurrentDay
        messages={props.messages}
        locale={props.locale}
        data={props.data}
      />
      <Astronaut />
      <Options messages={props.messages} locale={props.locale} />
      <Matches
        messages={props.messages}
        locale={props.locale}
        data={props.data}
      />
    </div>
  );
};

export default Results;
