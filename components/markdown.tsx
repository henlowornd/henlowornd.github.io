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

// Mermaid initialization (runs once at module evaluation)
mermaid.initialize({
  startOnLoad: false,
  theme: "dark",
  securityLevel: "loose",
});

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
  // Highlight.js + Mermaid Rendering
  useEffect(() => {
    hljs.unregisterLanguage("bash");
    hljs.unregisterLanguage("cmd");
    hljs.registerLanguage("bash", () => bash);
    hljs.registerLanguage("cmd", () => bash);
    hljs.highlightAll();

    // Render Mermaid diagrams
    void (async () => {
      const els = document.querySelectorAll(".mermaid:not([data-processed])");
      if (els.length > 0) {
        try {
          await mermaid.run({ nodes: Array.from(els) as HTMLElement[] });
        } catch {
          // Mermaid handles errors internally with a red box
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