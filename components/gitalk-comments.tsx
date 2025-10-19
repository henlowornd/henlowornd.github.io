"use client";

import { useEffect, useRef } from "react";
import Gitalk from "gitalk";

export function GitalkComments({
  issue
}: {
  issue: number
}) {
  const gitalkOptions: Gitalk.GitalkOptions = {
    clientID: process.env["NEXT_PUBLIC_GITALK_CLIENT_ID"] ?? "",
    clientSecret: process.env["NEXT_PUBLIC_GITALK_CLIENT_SECRET"] ?? "",
    repo: "henlowornd.github.io",
    owner: "henlowornd",
    admin: ["henlowornd"],
    number: issue
  };
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if(!containerRef.current) return;

    const gitalk = new Gitalk(gitalkOptions);
    gitalk.render(containerRef.current);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div ref={containerRef}/>;
}
