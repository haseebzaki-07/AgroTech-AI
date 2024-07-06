import { Link } from "react-router-dom";
import about from '../assets/aboutus.png';
import bgHero from "../assets/bgHero.png";

function About() {
  return (
    <div className="w-full text-[#000435] bg-white dark:text-white dark:bg-green-500 py-16 px-4" style={{ backgroundImage: `url(${bgHero})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8 items-center">
        <img className="w-[550px] mx-auto md:my-4" src={about} alt="About Us" />
        <div className="flex flex-col justify-center">
          <p className="bg-gradient-to-r from-green-950 via-green-900 to-green-850 inline-block text-transparent bg-clip-text text-4xl font-bold py-1">
            🌾 About AgroTech AI
          </p>
          <h1 className='md:text-4xl sm:text-3xl font-bold py-4 text-white'>
            Empowering Farmers with AI-Driven Solutions
          </h1>
          <p className="text-lg text-[#000435] bg-white dark:text-white dark:bg-green-500 text-justify">
            🌱 Our mission is to provide advanced AI tools to farmers, helping them optimize their agricultural practices. Whether you are a small-scale farmer or managing large farmlands, our platform offers a range of resources tailored to enhance productivity and sustainability.
          </p>
          <p className='md:text-3xl sm:text-3xl text-2xl font-bold py-4 text-[#000435] bg-white dark:text-white dark:bg-green-500'>
            🤔 How it Works!
          </p>
          <p className="text-lg text-[#000435] bg-white dark:text-white dark:bg-green-500">
            <span> ☑️ Access various machine learning models for crop prediction and soil analysis.</span><br />
            <span> ☑️ Use the platform to make informed decisions on crop management and pest control.</span><br />
            <span> ☑️ And that is it, you are ready to maximize your yield and efficiency.</span><br />
            <span> ☑️ Additional features coming soon.</span><br />
          </p>
          <Link
            to="/app/posts"
            className='bg-gradient-to-r from-green-700 to-green-500 hover:from-green-600 hover:to-green-400 text-white py-3 px-6 rounded-md shadow-md transition-transform transform hover:-translate-y-1 hover:shadow-lg w-[170px] text-center font-medium my-6 mx-auto md:mx-0'
          >
            Explore Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;