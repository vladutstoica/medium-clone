function Hero() {
    return (
        <div className={"bg-accent"}>
            <div className={"max-w-7xl mx-auto px-6 py-24 space-y-12"}>
                <h1 className={"font-serif text-7xl"}>Stay curious.</h1>
                <p className={"max-w-md font-light text-2xl leading-none"}>Discover stories, thinking, and expertise from writers on any
                    topic.</p>

                <button className={"px-12 py-2 bg-neutral-900 rounded-full text-xl text-neutral-200 "}>Start reading</button>
            </div>
        </div>
    )
}

export default Hero;