const HeroSection = () => {
    return (
    <div className="h-screen flex flex-col justify-center items-center bg-[#eeffff]">
        <div className="h-1/2 w-screen bg-[#063838] text-white flex flex-col items-center justify-center px-6 text-center">
            <h1 className="text-8xl md:text-5xl font-bold">
                Track all your SaaS metrics and<br></br>events with Datlee 📈
            </h1>
            <p className="mt-8 max-w-2xl text-lg">
                Connect 10+ data sources, manage multiple SaaS projects, make data-driven decisions and get notified when things change.
            </p>
        </div>
        <div className="h-1/4 flex flex-col items-center justify-center text-center px-6 text-black">
            <h2 className="text-2xl font-semibold">
            Struggling to keep up with your SaaS analytics?
            </h2>
            <p className="mt-6 opacity-75 text-lg font-semibold">Join the waitlist →</p>
            <div className="mt-4 flex items-center gap-2 bg-[#F9F9FA]">
                <input 
                    type="email" 
                    placeholder="e.g., johndoe@gmail.com" 
                    className="px-8 py-2 border-2 rounded-3xl focus:outline-none cursor-pointer"
                    required
                />
                <button className="bg-[#063838] text-white px-8 py-2 rounded-3xl border-2 hover:bg-[#F9F9FA] hover:text-[#063838] hover:border-2 cursor-pointer transition duration-150 ease-in-out">
                    Submit
                </button>
            </div>
      </div>
    </div>
    );
}

export default HeroSection;