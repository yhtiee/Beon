import Image from "next/image";

const Footer = () => {
  return (
    <footer className="h-[70px] flex_row items-center justify-center text-[20px] font-semibold">
      <h2 className="mr-3">Powered by</h2>
      <Image
        className="rounded-full"
        height={30}
        width={30}
        src="/images/flow-logo.png"
      ></Image>
      <h2 className="ml-3">Flow Blockchain</h2>
    </footer>
  );
};

export default Footer;
