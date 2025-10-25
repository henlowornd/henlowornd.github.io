import Link from "next/link";
import { Page } from "@/components/page";
import { blogName, blogDescription } from "@/lib/global";
import { LinkCard } from "./link-card";
import { GitalkComments } from "@/components/gitalk-comments";

import links from "@/data/info/links.json";

export default function Links() {
  return (
    <Page title="友情链接">
      <p>若有意愿交换友链，请在下方留言awa</p>

      <div className="flex flex-col gap-4 mb-10">
        {links.map((item, i) => <LinkCard {...item} key={i}/>)}
      </div>

      <h3 className="text-2xl font-semibold">本站信息</h3>
      <div className="space-y-2">
        <p><b>名称</b>：{blogName}</p>
        <p><b>简介</b>：{blogDescription}</p>
        <p><b>URL</b>：<Link href="/">https://henlo.cc</Link></p>
        <p><b>图标</b>：<Link href="https://henlo.cc/static/icon.png">https://henlo.cc/static/icon.png</Link></p>
      </div>

      <GitalkComments issue={3}/>
    </Page>
  );
}
