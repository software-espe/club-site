import SocialMedia from '../atoms/SocialMedia';

const Footer = () => {
  return (
    <footer className="flex flex-col absolute w-full items-center gap-4 bottom-0 px-3 py-14 bg-green">
      <SocialMedia />
      <p className="font-medium text-small not-italic leading-5 text-center max-w-[31.25rem]">
        Club de Software de la Universidad de las Fuerzas Armadas ESPE 2022. All
        rights reserverd
      </p>
    </footer>
  );
};

export default Footer;
