const HeroSection = () => {
    return (
    <div className="h-screen flex flex-col justify-center items-center bg-[#eeffff]">
        <div className="h-1/2 w-screen bg-[#063838] text-white flex flex-col items-center justify-center px-6 text-center">
            <h1 className="text-8xl md:text-5xl font-bold">
                {`Too Many Dashboards? Too Little Clarity?`}
            </h1>
            <h1 className="mt-2 text-8xl md:text-5xl font-bold">
                {`Your Startup's Metrics—In Your Pocket 📱`}
            </h1>
            <p className="mt-8 max-w-2xl text-lg">
                Connect 10+ data sources, manage multiple SaaS projects, make data-driven decisions and get notified when things change.
            </p>
        </div>
        <div className="h-1/4 flex flex-col items-center justify-center text-center px-6 text-black">
            <h2 className="text-2xl font-semibold">
            Struggling to keep up with your SaaS analytics?
            </h2>
            <p className="mt-6 opacity-75 text-lg font-semibold">Sign Up for Early Access →</p>
        </div>
    </div>
    );
}

export default HeroSection;