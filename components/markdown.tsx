/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useEffect } from "react";
import * as MarkdownJSX from "markdown-to-jsx";
import { RuleType } from "markdown-to-jsx";
import hljs from "highlight.js";
import mermaid from "mermaid";
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
import { DisclaimerCallout, ErrorCallout, InfoCallout, TipCallout, WarningCallout } from "./ui/callout";

mermaid.initialize({
  startOnLoad: false,
  theme: "dark",
  securityLevel: "loose",
  themeVariables: {
    darkMode: true,
    background: "#1d1d1d",
    primaryColor: "#3b82f6",
    primaryTextColor: "#e5e5e5",
    primaryBorderColor: "#525252",
    lineColor: "#a3a3a3",
    secondaryColor: "#374151",
    edgeLabelBackground: "rgba(0,0,0,0)",
    tertiaryColor: "#1f2937",
    fontSize: "14px",
    fontFamily: '"Fira Code", "Cascadia Code", Consolas, monospace',
  },
  themeCSS: [
    ".cluster rect, .cluster polygon { fill: transparent !important; stroke: none !important; }",
    ".cluster text { fill: #e5e5e5 !important; }",
    ".cluster .cluster-label p { color: #a3a3a3 !important; }",
    ".edgeLabel .labelBkg, .edgeLabel div { background: rgba(0,0,0,0) !important; border: none !important; opacity: 1 !important; }",
    ".edgeLabel foreignObject { background: transparent !important; }",
  ].join("\n"),
  flowchart: { useMaxWidth: true, curve: "basis" },
  sequence: { useMaxWidth: true, mirrorActors: false },
  gantt: { useMaxWidth: true },
  journey: { useMaxWidth: true },
  timeline: { useMaxWidth: true },
});

function renderLatex(content: string) {
  content = content.replace(/\$\$([^\$]+)\$\$/g, (match, formula) => {
    try {
      return katex.renderToString(formula, { displayMode: true, output: "html" });
    } catch (e) {
      return match;
    }
  });
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
  useEffect(() => {
    hljs.unregisterLanguage("bash");
    hljs.unregisterLanguage("cmd");
    hljs.registerLanguage("bash", () => bash);
    hljs.registerLanguage("cmd", () => bash);
    hljs.highlightAll();

    void (async () => {
      const els = document.querySelectorAll(".mermaid:not([data-processed])");
      if (els.length > 0) {
        try {
          await mermaid.run({ nodes: Array.from(els) as HTMLElement[] });
        } catch {
          // Mermaid handles errors internally
        }
      }
    })();
  }, [children]);

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
      },
      renderRule(next, node, renderChildren, state) {
        if(node.type === RuleType.blockQuote && node.alert) {
          switch(node.alert.toLowerCase()) {
            case "info": return <InfoCallout key={state.key}>{renderChildren(node.children[0], state)}</InfoCallout>;
            case "tip": return <TipCallout key={state.key}>{renderChildren(node.children[0], state)}</TipCallout>;
            case "disclaimer": return <DisclaimerCallout key={state.key}>{renderChildren(node.children[0], state)}</DisclaimerCallout>;
            case "warning": return <WarningCallout key={state.key}>{renderChildren(node.children[0], state)}</WarningCallout>;
            case "error": return <ErrorCallout key={state.key}>{renderChildren(node.children[0], state)}</ErrorCallout>;
          }
        }
        return next();
      }
    }}>
      {enableKatex ? renderLatex(children) : children}
    </MarkdownJSX.default>
  );
}