import BlogCards from "../components/ui/BlogCards";
import Button from "../components/ui/Button";
import Footer from "../components/ui/Footer";
import Navigation from "../components/ui/Navigation";

export default function Blog() {
  return (
    <>
      <Navigation
        className="py-12 text-darkBlue"
        logo="/images/icons/Logo-black.svg"
        menuLogo="/images/icons/menu_24px-black.svg"
      />
      <main className="mx-auto mt-7 w-[1440px] max-w-[90%]">
        <h1 className="mb-5 text-5xl font-bold text-darkBlue">Blog</h1>
        <p className="mb-16 text-darkBlue">
          Open-source threaded team chat that helps teams stay productive and
          focused.
        </p>
        <BlogCards />
        <a href="/blog/create">
          <Button className="mb-8 bg-softBlue text-offWhite">
            Create Post
          </Button>
        </a>
      </main>
      <Footer />
    </>
  );
}
