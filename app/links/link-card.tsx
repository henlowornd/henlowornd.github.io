"use client";

import Image from "next/image";
import type { ArrayElement } from "@/lib/utils";
import type links from "@/data/info/links.json";
import { Button } from "@/components/ui/button";

export function LinkCard({
  name,
  description,
  url,
  avatar
}: ArrayElement<typeof links>) {
  const handleClick = () => {
    window.open(url, "_blank");
  };

  return (
    <div
      className="h-28 p-0 pb-4 border-b last:border-b-0 flex flex-row gap-4 overflow-hidden group cursor-pointer"
      title={url}
      onClick={() => handleClick()}>
      <Image className="m-2 rounded-lg aspect-square" src={avatar} alt={name} width={80} height={0}/>
      <div className="flex flex-col justify-center items-start gap-2">
        <Button className="text-xl text-foreground p-0 cursor-pointer group-hover:underline" variant="link">
          {name}
        </Button>
        <span className="text-sm text-muted-foreground">{description}</span>
      </div>
    </div>
  );
}
