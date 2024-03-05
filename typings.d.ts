interface NavDataType {
  name: string;
  path: string;
  icon: JSX.Element;
}

interface TestimonialDataType {
  image: string;
  name: string;
  position: string;
  message: string;
}

interface Image {
  title: string;
  path: string;
  link: string;
}

interface Slide {
  images: Image[];
}

interface WorkDataType {
  slides: Slide[];
}

interface ServicesDataType {
  icon: JSX.Element;
  title: string;
  description: string;
}
