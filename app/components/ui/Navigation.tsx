import Image from "next/image";
import Button from "./Button";

interface NavigationProps {
  className: string;
  logo: string;
  menuLogo: string;
}
export default function Navigation({
  className,
  logo,
  menuLogo,
}: NavigationProps) {
  return (
    <header className={`mx-auto w-[1440px] max-w-[90%] ${className}`}>
      <nav className="flex items-center justify-between">
        <a href="/">
          <Image src={logo} alt="Logo" width={132} height={52} />
        </a>
        <ul className={`flex items-center gap-14 underline max-lg:hidden`}>
          <li>
            <a href="#">Product</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
          <li>
            <a href="/login">Log In</a>
          </li>
          <li>
            <Button className="bg-softBlue bg-opacity-50 hover:bg-opacity-100">
              Get Access
            </Button>
          </li>
        </ul>
        <div className="cursor-pointer lg:hidden">
          <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              <label htmlFor="my-drawer" className="drawer-button">
                <Image
                  src={menuLogo}
                  alt="Menu"
                  width={24}
                  height={24}
                  className="cursor-pointer"
                />
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu min-h-full w-80 bg-darkBlue p-4 text-base-content">
                <li>
                  <a href="#">Product</a>
                </li>
                <li>
                  <a href="/blog">Blog</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
                <li>
                  <a href="/login">Log In</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
