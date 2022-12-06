import SocialMedia from '../atoms/SocialMedia';

const Footer = () => {
  return (
    <footer className="center-col rounded-t-xl w-full gap-4 bottom py-10  bg-green">
      <SocialMedia />
      <p className="md:text-small text-xs text-center px-8 max-w-[30rem]">
        Club de Software de la Universidad de las Fuerzas Armadas ESPE 2022. All
        rights reserved
      </p>
    </footer>
  );
};

export default Footer;
