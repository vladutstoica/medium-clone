import Link from "next/link";

const PostHeader = () => {
    return (
        <header className={"sticky top-0 border-b-2 border-neutral-100"}>
            <div className={"max-w-7xl mx-auto flex justify-between items-center gap-x-5 px-6 py-4"}>
                <Link href="/">
                    <svg viewBox="0 0 1043.63 592.71" className="w-12 object-contain cursor-pointer">
                        <g data-name="Layer 2"><g data-name="Layer 1"><path d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36M911.56 296.36c0 154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279 147.16-279 147.17 124.9 147.17 279M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94"></path></g></g>
                    </svg>
                </Link>

                <div className={"hidden md:inline-flex items-center gap-x-6 text-sm"}>
                    <span className="text-green-600">Sign In</span>
                    <span className={"px-4 py-2 bg-neutral-900 rounded-full text-sm text-neutral-300"}>Get started</span>
                </div>

                <span className={"block md:hidden px-4 py-2 bg-neutral-900 rounded-full text-sm text-neutral-300"}>Get started</span>
            </div>
        </header>
    )
}

export default PostHeader;