import Link from "next/link";
import { AppWindow, ChevronDown, Github, Tv, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { githubAccount } from "@/lib/global";
import Avatar from "@/assets/images/avatar.png";
import HomepageBackground from "@/assets/images/homepage-background.svg";
import Barcodes1 from "@/assets/images/barcodes-1.svg";

export default function Home() {
  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <HomepageBackground width="100%" height="100%" className="absolute top-0 left-0 right-0 bottom-0 -z-10"/>
        <Barcodes1 width="210" className="absolute top-52 right-[20%] max-lg:static"/>
        <ChevronDown size={60} className="absolute bottom-10"/>
      </div>
      <div className="h-fit px-[25%] pt-36">
        <div className="w-full h-fit flex justify-between max-lg:flex-col-reverse max-lg:gap-10">
          {/* Left side / Lower part */}
          <div className="flex flex-col gap-14">
            <div className="flex flex-col gap-4 max-lg:items-center">
              <h2 className="flex items-center gap-2">
                <User />
                <span className="text-2xl">About me</span>
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
            <div className="flex flex-col gap-4 max-lg:items-center">
              <h2 className="flex items-center gap-2">
                <AppWindow />
                <span className="text-2xl">About the page</span>
              </h2>
              <div className="flex flex-col">
                <span>已运行天数：</span>
                <span>文章数：</span>
              </div>
            </div>
          </div>

          {/* Right side / Upper part */}
          <div className="flex flex-col gap-6 max-lg:items-center">
            <img src={Avatar.src} alt="avatar" className="w-40 border-[12px] rounded-full mx-auto"/>
            <div className="h-full flex flex-col justify-between max-lg:gap-4 [&>*]:text-2xl [&>*]:text-muted-foreground">
              <span>&#47;&#47; 你好！很高兴见到你！</span>
              <span>&#47;&#47; What a thing</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
