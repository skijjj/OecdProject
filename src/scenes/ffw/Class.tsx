import { Link as RouterLink } from "react-router-dom";

type Props = {
  name: string;
  description?: string;
  image: string;
  link: string; 
};

const Class = ({ name, description, image, link }: Props) => {
  const overlayStyles = `p-5 absolute z-30 flex
  h-[380px] w-[450px] flex-col items-center justify-center
  whitespace-normal bg-secondary-500 text-center text-white
  opacity-0 transition duration-500 hover:opacity-90`;

  return (
    <li className="relative mx-5 inline-block h-[380px] w-[450px]">
      <div className={overlayStyles}>
        <p className="text-2xl">{name}</p>
        <p className="mt-5">{description}</p>
        {link && (
          <RouterLink to={link} className="text-primary-500 hover:underline mt-5">
            Learn More
          </RouterLink>
        )}
      </div>
      <img alt={`${image}`} src={image} />
    </li>
  );
};

export default Class;