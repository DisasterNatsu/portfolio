import Bulb from "@/components/Bulb";
import Circles from "@/components/Circles";
import Form from "@/components/contact/Form";
import ContactHeading from "@/components/contact/Heading";

import { BsArrowRight } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="h-full bg-primary/30">
      <Circles />
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* text and form */}

        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}

          <ContactHeading />

          {/* form */}

          <Form />
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Contact;
