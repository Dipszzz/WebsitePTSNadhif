import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TeamJPG from "../img/team.jpeg";

const About = () => {
  return (
    <>
      <Header />
      <section id="about" className="min-h-screen bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          {/* Title */}
          <h1 className="text-5xl font-bold mb-8">About DipsTechnology</h1>
          <p className="text-gray-400 text-lg mb-12">
            Empowering businesses with the latest in technology, innovation, and
            security.
          </p>

          {/* About Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Company Vision and Mission */}
            <div className="space-y-6 text-left">
              <h2 className="text-3xl font-semibold">Our Vision</h2>
              <p className="text-gray-400">
                is to be a leading force in the technology landscape, driving
                innovation and excellence. We aspire to empower businesses with
                cutting-edge solutions that transform challenges into
                opportunities, fostering a future where technology enhances
                every aspect of life and work. By prioritizing sustainability,
                collaboration, and continuous improvement, we aim to create a
                positive impact on our clients, communities, and the world.
              </p>

              <h2 className="text-3xl font-semibold">Our Mission</h2>
              <p className="text-gray-400">
                to deliver transformative technology solutions that drive
                success and efficiency for our clients. We are dedicated to
                understanding the unique needs of each business, providing
                personalized support and innovative strategies that empower
                growth. Through our commitment to excellence, integrity, and
                collaboration, we strive to be a trusted partner in navigating
                the ever-evolving digital landscape.
              </p>
            </div>

            {/* Company History Image */}
            <div className="relative flex flex-col items-center">
              <img
                src={TeamJPG}
                alt="TechGuard Team"
                className="rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
              />
              <p className="mt-4 text-gray-500 text-sm italic">
                Our team of innovators dedicated to pushing the boundaries of
                technology.
              </p>
            </div>
          </div>

          {/* Company History */}
          <div className="mt-12 text-left">
            <h2 className="text-3xl font-semibold mb-4">Our History</h2>
            <p className="text-gray-400 mb-6">
              Founded in 2024, DipsTechnology started as a small tech
              consultancy focused on providing cybersecurity solutions. Over the
              years, we have grown into a full-service technology company that
              helps clients across the globe navigate the complex world of IT
              and digital transformation.
            </p>
            <p className="text-gray-400">
              With a passionate team of experts and a client-first approach,
              DipsTechnology continues to evolve and innovate, driving success
              for businesses of all sizes through technology.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
