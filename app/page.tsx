import Link from "next/link";
import { AppWindow, Github, Tv, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { githubAccount } from "@/lib/global";
import Avatar from "@/assets/images/avatar.png";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen px-[25%] py-50">
      <div className="w-full h-full flex justify-between">
        {/* Left side */}
        <div className="flex flex-col gap-14">
          <div className="flex flex-col gap-4">
            <h2 className="flex items-center gap-2">
              <User />
              <span className="text-2xl font-semibold">关于我</span>
            </h2>
            <div className="flex flex-col">
              <span>A Chinese college student;</span>
              <span>A cyber-security majored;</span>
              <span>An interest-driven author;</span>
              <span>A music lover;</span>
              <span>A thinking reed.</span>
            </div>
            <div className="flex gap-6 [&>*]:!p-0 [&>*]:text-lg [&>*]:text-muted-foreground [&_svg]:stroke-foreground">
              <Button variant="link" asChild>
                <Link href="https://space.bilibili.com/595331568" target="_blank">
                  <Tv />
                  bilibili
                </Link>
              </Button>
              <Button variant="link" asChild>
                <Link href={githubAccount} target="_blank">
                  <Github />
                  github
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="flex items-center gap-2">
              <AppWindow />
              <span className="text-2xl font-semibold">关于此页面</span>
            </h2>
            <div className="flex flex-col">
              <span>已运行天数：</span>
              <span>文章数：</span>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="flex flex-col gap-20">
          <Image src={Avatar} alt="avatar" className="w-40 border-[12px] rounded-full mx-auto"/>
          <div className="flex flex-col gap-10 [&>*]:text-2xl [&>*]:text-muted-foreground">
            <span>&#47;&#47; 你好，很高兴见到你！</span>
            <span>&#47;&#47; What a thing</span>
          </div>
        </div>
      </div>
    </div>
  );
}
