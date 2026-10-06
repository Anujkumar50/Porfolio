import { useEffect, useState } from "react";
import { TypeAnimation } from 'react-type-animation';
import emailjs from "@emailjs/browser";


function Navbar() {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

   const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_fw2v77d",
        "template_8ieb6tq",
        e.target,
        "hz_zmygQxZRN8B9n0",
      )
      .then(
        () => {
          alert("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error);
          alert("Message failed to send!");
        },
      );
  };







  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const projects = [
    {
      title: "E-commers",
      description:
        "Secure login and registration system with JWT authentication, password hashing and email verification.",
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800",
      tech: "React • Node.js • Express • MongoDB",
      url:"null",
    },
    {
      title: "Amazon Store Clone",
      description:
        "E-commerce website with products, categories, cart and responsive user interface.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800",
      tech: "React • JavaScript • CSS",
      url:"null",
    },
    {
      title: "Food Delivery Website",
      description:
        "Modern food delivery website with food categories and responsive design.",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
      tech: "React • JavaScript • API",
      url:"https://first-project-seven-tau.vercel.app/",
    },
    {
      title: "Bank Management System",
      description:
        "Bank management application for handling customer and banking operations.",
      image:
        "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=800",
      tech: "React • Node.js • MongoDB",
      url:null,
    },
    {
      title: "Video Library",
      description:
        "Video library application with organized content and modern responsive UI.",
      image:
        "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800",
      tech: "React • Node.js • MongoDB",
      url:null,
    },
    {
      title: "Face Recognition Attendance",
      description:
        "Attendance system using Python and OpenCV face recognition technology.",
      image:
        "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800",
      tech: "Python • OpenCV",
      url:null,
    },
  ];

  const skills = [
    ["React.js", "90%"],
    ["JavaScript", "85%"],
    ["HTML5", "95%"],
    ["CSS3 / Tailwind", "90%"],
    ["Node.js", "80%"],
    ["Express.js", "80%"],
    ["MongoDB", "80%"],
    ["Git / GitHub", "75%"],
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* NAVBAR */}

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-slate-950/90 backdrop-blur-lg shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <a href="#home" className="text-3xl font-bold">
            Anuj<span className="text-blue-500">.</span>
          </a>

          {/* Desktop Menu */}

          <div className="hidden items-center gap-8 md:flex">
            <a href="#home" className="hover:text-blue-400">
              Home
            </a>

            <a href="#about" className="hover:text-blue-400">
              About
            </a>

            <a href="#skills" className="hover:text-blue-400">
              Skills
            </a>

            <a href="#projects" className="hover:text-blue-400">
              Projects
            </a>

            <a href="#education" className="hover:text-blue-400">
              Education
            </a>
            <a href="https://porfolio-six-gray.vercel.app/" className="hover:text-blue-400">
              Portfolio
            </a>

            <a
              href="#contact"
              className="rounded-full bg-blue-600 px-5 py-2 hover:bg-blue-700"
            >
              Contact
            </a>
           
          </div>

          {/* Mobile Button */}

          <button
            onClick={() => setMenu(!menu)}
            className="text-2xl md:hidden"
          >
            {menu ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}

        {menu && (
          <div className="border-t border-slate-800 bg-slate-950 px-6 py-5 md:hidden">

            <div className="flex flex-col gap-5">

              <a href="#home" onClick={() => setMenu(false)}>
                Home
              </a>

              <a href="#about" onClick={() => setMenu(false)}>
                About
              </a>

              <a href="#skills" onClick={() => setMenu(false)}>
                Skills
              </a>

              <a href="#projects" onClick={() => setMenu(false)}>
                Projects
              </a>

              <a href="#education" onClick={() => setMenu(false)}>
                Education
              </a>

              <a href="#contact" onClick={() => setMenu(false)}>
                Contact
              </a>

            </div>

          </div>
        )}
      </nav>

      {/* HERO */}

      <section
        id="home"
        className="flex min-h-screen items-center px-6 pt-24"
      >
        <div id="main" className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">

          <div id="main"className="animate-[fadeIn_1s_ease-out]">

            <p id="main" className="mb-4 text-blue-400">
              WELCOME TO MY PORTFOLIO
            </p>

            <h1 className="text-5xl font-bold leading-tight md:text-7xl">
              Hi, I'm
              <span className="block text-blue-500">
                
       <TypeAnimation
  sequence={[
    "Anuj Kumar",
    1000,
    "",
    500,
    "Anuj Kumar",
    1000,
    "",
    500,
  ]}
  wrapper="span"
  speed={50}
  repeat={Infinity}
  style={{
    fontSize: "1em",
    display: "inline-block",
    color: "blue",
  }}
/>
                    </span>
            </h1>

            <h2 className="mt-5 text-2xl font-semibold text-slate-300 md:text-3xl">
              MERN Stack Developer
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
              I build modern, responsive and user-friendly web applications
              using MongoDB, Express.js, React and Node.js.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href="#projects"
                className="rounded-full bg-blue-600 px-7 py-3 font-semibold transition hover:-translate-y-1 hover:bg-blue-700"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="rounded-full border border-blue-500 px-7 py-3 font-semibold transition hover:-translate-y-1 hover:bg-blue-600"
              >
                Contact Me
              </a>

            </div>

            <div className="mt-8 flex gap-5">

              <a
                href="https://github.com/Anujkumar50"
                target="_blank"
                rel="noreferrer"
                className="text-2xl hover:text-blue-400"
              >
                GitHub
              </a>

              <a
                href="mailto:itzanujkumar.2005@gmail.com"
                className="text-2xl hover:text-blue-400"
              >
                Email
              </a>

            </div>

          </div>

          {/* image section */}

          <div className="flex justify-center">

            <div className="relative">

              <div className="absolute rounded-full bg-blue-600 blur-3xl opacity-30"></div>

              <img
                src="3.png"
                alt="Anuj Kumar"
                className="relative h-72 w-72 rounded-full border-4 border-blue-500 object-cover shadow-2x"
              />

            </div>

          </div>

        </div>
      </section>

      {/* ABOUT */}

      <section id="about" className="px-6 py-24">

        <div id="main" className="mx-auto max-w-6xl">

          <div className="mb-14 text-center">

            <p className="text-blue-400">
              ABOUT ME
            </p>

            <h2 className="mt-2 text-4xl font-bold md:text-5xl">
              Who I Am
            </h2>

          </div>

          <div className="grid gap-12 md:grid-cols-2 md:items-center">

            <div>

              <img
                src="3.png"
                alt="Anuj Kumar"
                style={{marginTop:20}}
                className="mx-auto h-80 w-80 rounded-2xl object-cover shadow-2xl"
              />

            </div>

            <div>

              <h3 className="text-3xl font-bold">
                I'm Anuj Kumar
              </h3>

              <h4 className="mt-3 text-xl text-blue-400">
                MERN Stack Developer
              </h4>

              <p className="mt-6 leading-8 text-slate-400">
                I have completed my B.Tech in Computer Science Engineering
                and have hands-on knowledge of MERN Stack Development.
              </p>

              <p className="mt-4 leading-8 text-slate-400">
                I enjoy creating modern web applications using React,
                Node.js, Express.js and MongoDB. I also work with REST APIs,
                JWT authentication and responsive UI development.
              </p>

              <div id="main" className="mt-8 grid grid-cols-2 gap-4">

                <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
                  <p className="text-sm text-slate-400">
                    Education
                  </p>
                  <p className="mt-2 font-bold">
                    B.Tech CSE
                  </p>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
                  <p className="text-sm text-slate-400">
                    Specialization
                  </p>
                  <p className="mt-2 font-bold">
                    MERN Stack
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* SKILLS */}

      <section id="skills" className="bg-slate-900 px-6 py-24">

        <div id="main" className="mx-auto max-w-6xl">

          <div className="mb-14 text-center">

            <p className="text-blue-400">
              MY SKILLS
            </p>

            <h2 className="mt-2 text-4xl font-bold md:text-5xl">
              Technologies I Use
            </h2>

          </div>

          <div  className="grid gap-6 md:grid-cols-2">

            {skills.map(([name, percentage]) => (
              <div
                key={name}
                className="rounded-2xl border border-slate-800 bg-slate-950 p-6 transition hover:-translate-y-1 hover:border-blue-500"
              >

                <div className="mb-3 flex justify-between">

                  <span className="font-semibold">
                    {name}
                  </span>

                  <span className="text-blue-400">
                    {percentage}
                  </span>

                </div>

                <div  className="h-3 overflow-hidden rounded-full bg-slate-800">

                  <div
                    className="h-full rounded-full bg-blue-600"
                    style={{
                      width: percentage,
                    }}
                  ></div>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* SERVICES */}

      <section id="main" className="px-6 py-24">

        <div className="mx-auto max-w-6xl">

          <div className="mb-14 text-center">

            <p className="text-blue-400">
              WHAT I DO
            </p>

            <h2 className="mt-2 text-4xl font-bold md:text-5xl">
              My Services
            </h2>

          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-7 transition hover:-translate-y-2 hover:border-blue-500">

              <div className="text-4xl">💻</div>

              <h3 className="mt-5 text-xl font-bold">
                Frontend Development
              </h3>

              <p className="mt-4 text-slate-400">
                Modern responsive interfaces using React, JavaScript,
                HTML and CSS.
              </p>

            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-7 transition hover:-translate-y-2 hover:border-blue-500">

              <div className="text-4xl">⚙️</div>

              <h3 className="mt-5 text-xl font-bold">
                Backend Development
              </h3>

              <p className="mt-4 text-slate-400">
                REST APIs and backend applications using Node.js and
                Express.js.
              </p>

            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-7 transition hover:-translate-y-2 hover:border-blue-500">

              <div className="text-4xl">🔐</div>

              <h3 className="mt-5 text-xl font-bold">
                Authentication
              </h3>

              <p className="mt-4 text-slate-400">
                JWT authentication, password hashing and email verification.
              </p>

            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-7 transition hover:-translate-y-2 hover:border-blue-500">

              <div className="text-4xl">📱</div>

              <h3 className="mt-5 text-xl font-bold">
                Responsive Design
              </h3>

              <p className="mt-4 text-slate-400">
                Responsive websites for desktop, tablet and mobile.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* PROJECTS */}

      <section id="projects" className="bg-slate-900 px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="mb-14 text-center">

            <p className="text-blue-400">
              MY WORK
            </p>

            <h2 className="mt-2 text-4xl font-bold md:text-5xl">
              Recent Projects
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-slate-400">
              Some of the projects I have built while learning and
              developing with modern web technologies.
            </p>

          </div>

          <div id="main" className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {projects.map((project) => (

              <div id="main"
                key={project.title}
                className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 transition duration-300 hover:-translate-y-2 hover:border-blue-500"
              >

                <div id="main" className="overflow-hidden">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-52 w-full object-cover transition duration-500 group-hover:scale-110"
                  />

                </div>

                <div id="main" className="p-6">

                  <h3 className="text-xl font-bold">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {project.description}
                  </p>

                  <p className="mt-5 text-sm font-semibold text-blue-400">
                    {project.tech}
                  </p>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-block rounded-lg bg-blue-600 px-5 py-2 hover:bg-blue-700"
                  >
                    View Project
                  </a>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* EDUCATION */}

      <section id="education" className="px-6 py-24">

        <div id="main" className="mx-auto max-w-5xl">

          <div className="mb-14 text-center">

            <p className="text-blue-400">
              MY JOURNEY
            </p>

            <h2 className="mt-2 text-4xl font-bold md:text-5xl">
              Education
            </h2>

          </div>

          <div id="main" className="relative border-l-2 border-blue-600 pl-8">

            <div className="mb-12">

              <div className="absolute -left-3 h-5 w-5 rounded-full bg-blue-600"></div>

              <p className="text-blue-400">
                2022 - 2026
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                Bachelor of Technology
              </h3>

              <h4 className="mt-2 text-lg text-slate-300">
                Computer Science Engineering
              </h4>

              <p className="mt-3 text-slate-400">
                IIMT College of Engineering, Saharanpur (AKTU)
              </p>

            </div>

            <div>

              <div className="absolute -left-3 h-5 w-5 rounded-full bg-blue-600"></div>

              <p className="text-blue-400">
                2026
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                MERN Full Stack Development
              </h3>

              <p className="mt-3 text-slate-400">
                Practical development with React, Node.js, Express.js
                and MongoDB.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CONTACT */}

      <section id="contact" className="bg-slate-900 px-6 py-24">

        <div className="mx-auto max-w-6xl">

          <div className="mb-14 text-center">

            <p className="text-blue-400">
              CONTACT
            </p>

            <h2 className="mt-2 text-4xl font-bold md:text-5xl">
              Let's Work Together
            </h2>

          </div>

          <div className="grid gap-12 md:grid-cols-2">

            <div>

              <h3 className="text-3xl font-bold">
                Get In Touch
              </h3>

              <p className="mt-5 leading-8 text-slate-400">
                I'm open to entry-level Full Stack Developer opportunities,
                internships and web development projects.
              </p>

              <div className="mt-8 space-y-6">

                <div>
                  <p className="text-sm text-blue-400">
                    Email
                  </p>

                  <a
                    href="mailto:itzanujkumar.2005@gmail.com"
                    className="mt-1 block hover:text-blue-400"
                  >
                    itzanujkumar.2005@gmail.com
                  </a>
                </div>

                <div>
                  <p className="text-sm text-blue-400">
                    Phone
                  </p>

                  <a
                    href="tel:+919105337850"
                    className="mt-1 block hover:text-blue-400"
                  >
                    +91 9105337850
                  </a>
                </div>

                <div>
                  <p className="text-sm text-blue-400">
                    Location
                  </p>

                  <p className="mt-1 text-slate-300">
                    Uttar Pradesh, India
                  </p>
                </div>

              </div>

            </div>

            <form
              className="rounded-2xl border border-slate-800 bg-slate-950 p-6"
              onSubmit={sendEmail}
            >

              <input
                type="text"
                placeholder="Your Name"
                required
                className="mb-4 w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 outline-none focus:border-blue-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                required
                className="mb-4 w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 outline-none focus:border-blue-500"
              />

              <input
                type="text"
                placeholder="Subject"
                required
                className="mb-4 w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 outline-none focus:border-blue-500"
              />

              <textarea
                rows="6"
                placeholder="Your Message"
                required
                className="mb-4 w-full resize-none rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 outline-none focus:border-blue-500"
              ></textarea>

              <button
                type="submit"
               
                className="w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="border-t border-slate-800 px-6 py-10">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 md:flex-row">

          <div>

            <h2 className="text-2xl font-bold">
              Anuj<span className="text-blue-500">.</span>
            </h2>

            <p className="mt-1 text-slate-500">
              MERN Stack Developer
            </p>

          </div>

          <div className="flex gap-5">

            <a
              href="https://github.com/Anujkumar50"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400"
            >
              GitHub
            </a>

            <a
              href="mailto:itzanujkumar.2005@gmail.com"
              className="hover:text-blue-400"
            >
              Email
            </a>

          </div>

          <p className="text-sm text-slate-500">
            © 2026 Anuj Kumar
          </p>

        </div>

      </footer>

    </div>
  );
}

export default Navbar;