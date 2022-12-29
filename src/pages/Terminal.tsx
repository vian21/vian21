import React from "react";

import { commands } from "./commands";
import { useState, useEffect } from "react";

import ReactMarkdown from "https://esm.sh/react-markdown@7";

function Prompt(props) {
  return (
    <div className="flex text-white">
      <div className="text-green-600"> Guest@portfolio:~$</div>
      <div className="px-2">{props.value}</div>
    </div>
  );
}

function Output(props) {
  return <ReactMarkdown className=" text-white">{props.value}</ReactMarkdown>;
}

export default class Terminal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      output: [],
      prompt: "",
    };
    this.execute = this.execute.bind(this);
  }

  execute(event: any) {
    event.preventDefault();

    const command: string = event.target[0].value.toLowerCase().trim();

    let temp = this.state.output;
    if (command == "clear") {
      temp = [];
    } else {
      temp.push([command, commands[command]]);
    }

    this.setState({ output: temp });
    this.setState({ prompt: "" });
  }

  render() {
    return (
      <div className="bg-black h-screen text-lg">
        <div>
          {this.state.output?.map((element, index) => {
            return (
              <div className="" key={index}>
                <Prompt value={element[0]} />
                <Output value={element[1]} />
              </div>
            );
          })}
        </div>
        <form className="flex text-green-600 " onSubmit={this.execute}>
          Guest@portfolio:~$
          <input
            autoFocus
            className="bg-black outline-none px-2 text-white"
            onChange={(event) => {
              this.setState({ prompt: event.target.value });
            }}
            type="text"
            value={this.state.prompt}
          />
        </form>
      </div>
    );
  }
}
