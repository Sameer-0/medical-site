import ContactForm from "./contact-form";

const ContactCard = () => {

  return (
    <section className="text-gray-600 body-font relative">
      <div className="absolute inset-0 py-10 pl-10 rounded-md">
        <iframe
          width="100%"
          height="100%"
          title="map"
          style={{
            border: 0,
            borderRadius: '15px',
          }}
          src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=707%2023rd%20Street,%20Galveston,%20TX&ie=UTF8&t=&z=14&iwloc=B&output=embed"
        ></iframe>
      </div>
     <ContactForm />
    </section>
  );
};

export default ContactCard;
