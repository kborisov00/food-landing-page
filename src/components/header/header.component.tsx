import { FaSistrix, FaBars } from "react-icons/fa";

const Logo = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="170" height="41" fill="none" className={className}>
    <path
      className="fill-black"
      d="M51.9 28.1h12v-3.6H56V11h-4v17Zm19-2.4c-1.7 0-2.6-1.4-2.6-3.7 0-2.2.9-3.7 2.6-3.7 1.7 0 2.6 1.5 2.6 3.7 0 2.3-.9 3.7-2.6 3.7Zm0 2.8c4 0 6.6-2.8 6.6-6.5s-2.6-6.5-6.6-6.5c-4 0-6.6 2.8-6.6 6.5s2.7 6.5 6.6 6.5Zm13.4 3.9c1.8 0 3.5-.4 4.5-1.4 1-.9 1.7-2.2 1.7-4V15.7h-3.8v1.4a4 4 0 0 0-3.5-1.7c-3 0-5.1 2.5-5.1 6.1 0 3.8 2.5 5.9 5.3 5.9a4 4 0 0 0 3.1-1.4h.1v1.2c0 1.5-.7 2.3-2.3 2.3-1.3 0-2-.5-2.2-1.2h-3.8c.4 2.6 2.6 4 6 4Zm0-7.8c-1.5 0-2.4-1.2-2.4-3 0-2 1-3.2 2.4-3.2 1.6 0 2.5 1.4 2.5 3 0 1.8-.8 3.2-2.5 3.2Zm13.9 1.1c-1.7 0-2.6-1.4-2.6-3.7 0-2.2.9-3.7 2.6-3.7 1.7 0 2.6 1.5 2.6 3.7 0 2.3-1 3.7-2.6 3.7Zm0 2.8c4 0 6.5-2.8 6.5-6.5s-2.5-6.5-6.5-6.5-6.6 2.8-6.6 6.5 2.7 6.5 6.6 6.5Zm7.7-.4h3.9V15.8h-4v12.3Zm0-14h3.9V11h-4v3Zm5.6 18.1h4v-5.3a4 4 0 0 0 3.4 1.6c3.3 0 5.4-2.5 5.4-6.5 0-3.7-2-6.5-5.3-6.5-1.7 0-2.8.7-3.7 1.8v-1.5h-3.8v16.4Zm6.4-6.7c-1.7 0-2.6-1.4-2.6-3.4s.9-3.5 2.6-3.5c1.6 0 2.4 1.4 2.4 3.5s-.9 3.4-2.4 3.4Zm12.8 3c3.2 0 5.5-1.4 5.5-4 0-3.2-2.5-3.8-4.7-4.1-1.5-.3-3-.4-3-1.3 0-.8.8-1.1 1.8-1.1s1.8.3 2 1.4h3.6c-.2-2.4-2.1-4-5.6-4-2.9 0-5.3 1.4-5.3 4 0 3 2.3 3.5 4.4 3.8 1.7.3 3.2.4 3.2 1.6 0 .7-.8 1.2-2 1.2-1.3 0-2-.6-2.2-1.8h-3.7c.1 2.7 2.4 4.3 6 4.3Zm10.9 0c1.7 0 2.7-.7 3.6-1.9h.1v1.5h3.7V15.8h-3.9v7c0 1.4-.8 2.4-2.1 2.4s-1.9-.8-1.9-2.1v-7.3h-3.9V24c0 2.8 1.5 4.6 4.4 4.6Zm9.2-.4h3.9v-6.9c0-1.4.7-2.4 2-2.4 1 0 1.6.7 1.6 2v7.3h4v-6.9c0-1.4.6-2.4 1.9-2.4 1.2 0 1.7.7 1.7 2v7.3h4v-8c0-2.7-1.5-4.6-4.2-4.6-1.6 0-3 .7-4 2.1a3.7 3.7 0 0 0-3.4-2.1 4 4 0 0 0-3.7 2.1h-.1v-1.8h-3.8v12.3Z"
    />
    <path
      fill-rule="evenodd"
      d="M20.7 40.1a20 20 0 1 0 0-40 20 20 0 0 0 0 40Zm6.2-30.6c.3-1.1-.7-1.8-1.7-1L12 17.8c-1 .8-.9 2.2.2 2.2h10.4L17 22l-2.5 8.7c-.3 1.1.8 1.7 1.7 1l13.4-9.5c1-.7.9-2.2-.3-2.2H24l3-10.6Z"
      clip-rule="evenodd"
      className="fill-primary"
    />
  </svg>
);

const Header = () => {
  return (
    <header className="flex justify-between items-center">
      <Logo className="cursor-pointer" />

      <ul className="flex gap-8">
        <li className="font-bold text-black cursor-default">Home</li>
        <li className="font-semibold text-[#808080] cursor-pointer">
          Why Food?
        </li>
        <li className="font-semibold text-[#808080] cursor-pointer">Menu</li>
        <li className="font-semibold text-[#808080] cursor-pointer">
          Location
        </li>
      </ul>

      <div className="flex gap-4">
        <FaSistrix className="text-xl text-[#808080] cursor-pointer" />
        <FaBars className="text-xl text-[#808080] cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;
