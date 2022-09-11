import FormContact from "./FormContact";

const ContactForm = () => {
  return (
    <div className="contact glitch mb-6">
      <div className="title-section my-6">
        <h2 className="normal-case text-2xl tracking-tight font-extrabold sm:text-2xl md:text-4xl">
          Contact me
        </h2>
      </div>
      <FormContact />
    </div>
  );
};

export default ContactForm;
