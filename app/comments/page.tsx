import { Page } from "@/components/page";
import { GitalkComments } from "@/components/gitalk-comments";

export default function Links() {
  return (
    <Page title="留言板">
      <GitalkComments issue={2}/>
    </Page>
  );
}
