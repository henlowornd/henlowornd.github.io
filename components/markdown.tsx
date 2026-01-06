/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useEffect } from "react";
import * as MarkdownJSX from "markdown-to-jsx";
import hljs from "highlight.js";
import "katex/dist/katex";
import "katex/contrib/mhchem";
import katex from "katex";
import { CodeBlock } from "./code-block";
import { ArticleImage } from "./article-image";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "./ui/table";
import bash from "@/lib/hljs/bash";

function renderLatex(content: string) {
  // block latex
  content = content.replace(/\$\$([^\$]+)\$\$/g, (match, formula) => {
    try {
      return katex.renderToString(formula, { displayMode: true, output: "html" });
    } catch (e) {
      return match;
    }
  });

  // inline latex
  content = content.replace(/\$([^\$]+)\$/g, (match, formula) => {
    try {
      return katex.renderToString(formula, { displayMode: false, output: "html" });
    } catch (e) {
      return match;
    }
  });

  return content;
}

export function Markdown({ wrapper, children, enableKatex = true }: {
  wrapper?: boolean
  children: string
  enableKatex?: boolean
}) {
  // Highlight.js & Katex Rendering
  useEffect(() => {
    hljs.unregisterLanguage("bash");
    hljs.unregisterLanguage("cmd");
    hljs.registerLanguage("bash", () => bash);
    hljs.registerLanguage("cmd", () => bash);
    hljs.highlightAll();
  }, []);

  return (
    <MarkdownJSX.default options={{
      wrapper: wrapper ? "article" : undefined,
      overrides: {
        pre: CodeBlock,
        img: ArticleImage,
        table: Table,
        thead: TableHeader,
        tbody: TableBody,
        th: TableHead,
        tr: TableRow,
        td: TableCell
      }
    }}>
      {enableKatex ? renderLatex(children) : children}
    </MarkdownJSX.default>
  );
}
