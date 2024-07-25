const Home = () => {
    return (
        <>
            <div
                className="grid md:grid-cols-2 items-center justify-center gap-40  mx-5 px-3 min-h-screen"
                id="home">
                <div className="px-5 pt-20">
                    <p className="text-blue-500 text-xl">Hi,</p>
                    <h1 className="text-white md:text-7xl text-4xl font-bold font-serif">
                        I'M ABDULAZEEZ, SAHEED OLAWALE
                    </h1>
                    <h2 className="text-2xl text-blue-400">
                        SOFTWARE DEVELOPER
                    </h2>
                    <p className="text-blue-200 text-lg">
                        I am a Full Stack Developer with a strong focus on
                        backend development. With extensive experience in
                        building robust and scalable APIs, I am now expanding my
                        skill set to include frontend development.
                    </p>
                </div>
                <div>
                    <img
                        src="/assets/program.svg"
                        alt="."
                        width="70%"
                        className="hidden md:block rounded-lg"
                    />
                </div>
            </div>
        </>
    );
};

export default Home;