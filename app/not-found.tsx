import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[99vh] px-2 py-8 flex flex-col gap-3 items-center justify-center">
      <div>
        <h2 className="text-5xl font-bold">404</h2>
        <p className="text-muted-foreground">Page not found</p>
      </div>

      <Link href="/" className={buttonVariants({})}>
        Back to homepage
      </Link>

      {/* Ask Visitor to COntribute to issue if they know about it in a fun and casual way */}
      <div className="text-muted-foreground">
        <p>Think you can help in this issue?</p>
        <p>Feel free to contribute to 
              <Link href="#" className="px-1 underline underline-offset-2">Github</Link>
        </p>
      </div>
    </div>
  );
}
