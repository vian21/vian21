import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { commands } from "./commands";

export default function About() {
  return (
    <>
      <div className="flex flex-col">
        <div className=" flex justify-center">
          About The best Programmer ever
        </div>
        {/* <ReactMarkdown
          children={commands["about"].trim()}
          remarkPlugins={[remarkGfm]}
        /> */}
      </div>
    </>
  );
}
