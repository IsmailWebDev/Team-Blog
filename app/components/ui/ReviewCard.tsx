import Image from "next/image";

interface ReviewCardProps {
  text: string;
  name: string;
  profession: string;
  picture: string;
  sliderId: number;
}
export default function ReviewCard({
  text,
  name,
  profession,
  picture,
  sliderId,
}: ReviewCardProps) {
  return (
    <div
      id={`slide${sliderId}`}
      className="carousel-item my-11 box-border flex w-64 shrink-0 flex-col gap-8 bg-white px-8 py-11 shadow-xl lg:w-96"
    >
      <div className="flex">
        <Image src="/images/icons/Star.svg" alt="Star" width={32} height={32} />
        <Image src="/images/icons/Star.svg" alt="Star" width={32} height={32} />
        <Image src="/images/icons/Star.svg" alt="Star" width={32} height={32} />
        <Image src="/images/icons/Star.svg" alt="Star" width={32} height={32} />
        <Image src="/images/icons/Star.svg" alt="Star" width={32} height={32} />
      </div>
      <p className="text-darkBlue opacity-90">{text}</p>
      <div className="flex items-center gap-4">
        <Image src={picture} alt="ProfilePic" width={56} height={56} />
        <div className="flex flex-col gap-1">
          <span className="text-lg text-darkBlue">{name}</span>
          <span className="text-sm text-[#7676B2]">{profession}</span>
        </div>
      </div>
    </div>
  );
}
