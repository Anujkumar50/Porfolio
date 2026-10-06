
import emailjs from "@emailjs/browser";

const About = () => {
  const sendEmail = (e) => { e.preventDefault(); emailjs .sendForm( "service_fw2v77d", "template_8ieb6tq", e.target, "hz_zmygQxZRN8B9n0" ) .then( () => { alert("Message sent successfully!"); e.target.reset(); }, (error) => { console.log("FAILED...", error); alert("Message failed to send!"); } ); };
 

  return (
<>    
<section id="contact" className="py-20 px-6"> <div className="max-w-2xl mx-auto"> <h2 className="text-4xl font-bold text-center mb-10"> Contact Me </h2> <form onSubmit={sendEmail} className="space-y-5" > {/* Name */} <input type="text" name="name" placeholder="Your Name" required className="w-full border rounded-lg px-4 py-3 outline-none" /> {/* Email */} <input type="email" name="email" placeholder="Your Email" required className="w-full border rounded-lg px-4 py-3 outline-none" /> {/* Message */} <textarea name="message" placeholder="Your Message" rows="6" required className="w-full border rounded-lg px-4 py-3 outline-none" ></textarea> {/* Submit */} <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition" > Send Message </button> </form> </div> </section>

 
 

    </>

  )
}

export default About;