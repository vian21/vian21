/**
 * Note: The following component is written in JSX instead of TSX because figlet does not fully support types
 */
import figlet from "figlet";
import standard from "figlet/importable-fonts/Standard";

figlet.parseFont("Standard", standard);

export default function NotFound() {
  let text = "404 Not Found";
  figlet.text(text, { font: "Standard" }, function (err, data) {
    text = data;
  });
  return (
    <div className="bg-black h-screen grid m-auto place-content-center py-1/2 text-green-700 w-full">
      <pre className=" py-1/2 text-green-700 w-11/12">{text}</pre>
    </div>
  );
}
