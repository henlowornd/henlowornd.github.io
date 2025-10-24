import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-20 text-sm text-center space-y-2">
      <p>Designed & Maintained by Deed9189</p>
      <p>Developed by Norcleeh</p>
      <p>Copyright (c) Deed9189 {new Date().getFullYear()}</p>
      <div className="space-x-6">
        <Link href="https://github.com/henlowornd/henlowornd.github.io" target="_blank">
          Source Code
        </Link>
        <Link href="https://netlify.com" target="_blank">
          Netlify
        </Link>
      </div>
    </footer>
  );
}
