import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import { ViewUpdate } from "@codemirror/view";
import { dracula } from "@uiw/codemirror-theme-dracula";
import CodeMirror from "@uiw/react-codemirror";
import type { NextPage } from "next";
import { useCallback } from "react";

const code = `## Title

\`\`\`jsx
function Demo() {
  return <div>demo</div>
}
\`\`\`

\`\`\`bash
# Not dependent on uiw.
npm install @codemirror/lang-markdown --save
npm install @codemirror/language-data --save
\`\`\`

[weisit ulr](https://uiwjs.github.io/react-codemirror/)

\`\`\`go
package main
import "fmt"
func main() {
  fmt.Println("Hello, 世界")
}
\`\`\`
`;

const Home: NextPage = () => {
  const onChange = useCallback((value: string, viewUpdate: ViewUpdate) => {
    console.log("viewUpdate ", viewUpdate);

    console.log("value:", value);
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 after:bg-white h-screen">
      <div>
        <CodeMirror
          value={code}
          height="100vh"
          theme={dracula}
          extensions={[
            markdown({ base: markdownLanguage, codeLanguages: languages }),
          ]}
          onChange={onChange}
        />
      </div>
      <div className="min-h-screen">Hello world</div>
    </div>
  );
};

export default Home;
