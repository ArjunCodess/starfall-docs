import { buttonVariants } from "@/components/ui/button";
import { page_routes } from "@/lib/routes-config";
import { ArrowRightIcon, MoveUpRightIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
    return (
        <div className="flex sm:min-h-[91vh] min-h-[88vh] flex-col items-center justify-center text-center px-2 py-8">
            <Link
                href="https://github.com/ArjunCodess/neon-oss-starter-kit"
                target="_blank"
                className="mb-5 sm:text-lg flex items-center gap-2 underline underline-offset-4"
            >
                Starfall Starter Kit{" "}
                <MoveUpRightIcon className="w-4 h-4 font-extrabold" />
            </Link>
            <h1 className="text-3xl font-bold mb-4 sm:text-7xl">
                Build Your Next Big Project with the Starfall Starter Kit
            </h1>
            <p className="mb-8 sm:text-xl max-w-[800px] text-muted-foreground">
                Starfall is a Next.js starter kit designed to accelerate your development process with a modern tech stack, streamlined workflows, and ready-to-use components.
            </p>
            <div className="flex flex-row items-center gap-5">
                <Link
                    href={`/docs${page_routes[0].href}`}
                    className={buttonVariants({ className: "px-6", size: "lg" })}
                >
                    Get Started<ArrowRightIcon className="w-4 h-4 font-extrabold" />
                </Link>
            </div>
        </div>
    );
}