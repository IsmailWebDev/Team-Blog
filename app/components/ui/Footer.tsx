import Image from "next/image";
import Input from "./Input";

export default function Footer() {
  return (
    <footer className="bg-darkBlue pt-24 text-offWhite">
      <div className="mx-auto flex w-[1440px] max-w-[90%] flex-wrap items-start gap-16 max-xl:flex-col">
        <div className="flex flex-col gap-4">
          <a href="/">
            <Image
              src="images/icons/Logo.svg"
              alt="Logo"
              width={132}
              height={52}
            />
          </a>

          <p>Collaboration platform for mordern team </p>
        </div>
        <div className="flex items-start gap-8 max-sm:text-xs lg:gap-44 xl:gap-24">
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl text-softBlue">Company</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <a href="#">Product</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl text-softBlue">Features</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <a href="#">Screen Sharing</a>
              </li>
              <li>
                <a href="#">iOS & Android Apps</a>
              </li>
              <li>
                <a href="#">File Sharing</a>
              </li>
              <li>
                <a href="#">User Managment</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl text-softBlue">Contact Us</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <a href="#">info@teamapp.com</a>
              </li>
              <li>
                <a href="#">1-800-200-300</a>
              </li>
              <li>
                <a href="#">
                  1010 Sunset Blv. <br />
                  Palo Alto, California
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl text-softBlue">Stay up to date </h3>
          <p>Subscribe to our newseller</p>
          <Input
            type="text"
            placeholder="Email"
            className="bg-slate-600 placeholder:text-white"
            icon="images/icons/arrow_forward_24px-white.svg"
          />
        </div>
      </div>
      <div className="mx-auto mt-24 w-[1440px] max-w-[90%] pb-16">
        <span>© Copyright Team Inc.</span>
      </div>
    </footer>
  );
}
