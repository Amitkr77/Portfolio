import JelloAnimation from "../components/JelloAnimation";

const About = () => {
  return (
    <section className="h-screen w-full bg-black flex flex-col lg:flex-row justify-center gap-8 lg:gap-32 items-center text-white">
      <div className="lg:text-left text-center text-4xl lg:text-6xl font-bold ml-9">
        <div>
          <JelloAnimation text="Hi, I'm Amit" />
        </div>
        <div>
          <JelloAnimation text="Web Developer" />
        </div>
        <p className="text-lg font-thin mt-6">
          Front End Developer / JavaScript Fan / Wordpress Expert
        </p>
      </div>
      <div className="lg:text-left text-center space-y-4 lg:space-y-6 w-full lg:w-1/2 mr-0 lg:mr-40 text-base px-4">
        <p>Professionally connected with the web development industry.</p>
        <p>
          Problem solver, well-organised person, loyal employee with high attention to detail. 
          Fan of Boxing, outdoor activities, video games, and coding, of course.
        </p>
        <p>
          Interested in the entire frontend spectrum and working on ambitious 
          projects with interesting people.
        </p>
      </div>
    </section>
  );
};

export default About;
