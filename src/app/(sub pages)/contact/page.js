import Image from "next/image";
import bg from "../../../../public/background/contact-background.png";
import Form from "@/components/contact/Form";

export const metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <>
      <Image
        src={bg}
        alt="Next.js Portfolio website's contact page background image"
        priority
        sizes="100vw"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
            Contact ME
          </h1>
        </div>
        <Form />
        <div className="flex space-x-4">
          <a
            href="https://wa.link/ui5mwk"
            className="footer__social"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="uil uil-whatsapp"></i>
          </a>
          <a
            href="https://www.instagram.com/rajalakshmi_official_24"
            className="footer__social"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="uil uil-instagram"></i>
          </a>
        </div>
      </article>
    </>
  );
}
