import Card from "@/components/Card";
import Image from "next/image";
import { BsArrowDown } from "react-icons/bs";
import { ImArrowRight } from "react-icons/im";
import { IoLogoYoutube } from "react-icons/io";

export const cards = [
  {
    imageUrl: "/tumbnail1.jpg",
    improvementPoints: [
      {
        title: "2 Vague Text Elements:",
        bullets:
          "The text is too generic and will not stand out or get people to click. Also never have 2 text elements saying separate things, because this confuses people.",
      },
      {
        title: "Missing Eye Contact",
        bullets:
          "You're looking down in the selected image instead of at the camera; this makes it less personal.",
      },
      {
        title: "Unprofessional:",
        bullets:
          "The thumbnail looks cheap, which makes fewer people click on it and hurts your brand.",
      },
    ],
  },
  {
    imageUrl: "/tumbnail2.jpg",
    improvementPoints: [
      {
        title: "1. Thumbnail Text is Too Vague",
        bullets:
          "The thumbnail text is too generic and not specific enough to create intrigue/curiosity.",
      },
      {
        title: "2. Text Doesn't Pop Enough",
        bullets:
          "The thumbnail text doesn't catch the eye and stand out. It needs more contrast and a bigger font.",
      },
      {
        title: "3. No Title & Thumbnail Synergy",
        bullets:
          "They're both vague and don’t work together to create a curiosity gap. The thumbnail should catch the eye and the title should provide context.",
      },
    ],
  },
  {
    imageUrl: "/tumbnail3.jpg",
    improvementPoints: [
      {
        title: "1. Too Many Small Text Elements",
        bullets:
          "The text is extremely small and split into 2 pieces, so there's no center of focus in the thumbnail.",
      },
      {
        title: "2. Unprofessional",
        bullets:
          "The thumbnail looks cheap, which makes fewer people click on it and hurts your brand.",
      },
      {
        title: "3. It’s Confusing",
        bullets:
          "There’s too much happening in the thumbnail and it's confusing for the eye, so people look past it.",
      },
    ],
  },
];

export default function HomePage() {
  return (
    <div className="bg-[url('/bg.jpg')] bg-cover bg-center text-white font-sans py-10">
      <div className="max-w-screen-xl mx-auto px-5">
        {/* HERO SECTION */}
        <section className="text-center py-24">
          <h1 className="text-4xl md:text-5xl mb-5 font-bold">
            Grant Mitterlehner
          </h1>

          <span className="flex items-center justify-center font-semibold text-lg gap-2 mb-3">
            <p>Watch this first</p>
            <BsArrowDown />
          </span>

          <div
            className="
            grid grid-cols-1 
            sm:grid-cols-3 
            md:grid-cols-4 
            gap-5 sm:gap-10 
            max-w-[1000px] mx-auto
          "
          >
            <Image
              src={"/instagram.png"}
              alt="instagram"
              width={100}
              height={300}
              className="w-full h-full object-cover"
            />

            <div
              className="
              bg-red-700 text-xl sm:text-2xl 
              w-full h-full 
              col-span-1 sm:col-span-2 md:col-span-3
              flex items-center justify-center 
              p-5 text-center
            "
            >
              **** Video of me walking <br /> through the website
            </div>
          </div>
        </section>

        {/* PACKAGING */}
        <section>
          <span className="flex items-center justify-center gap-3 text-4xl md:text-5xl mb-10">
            <h2 className="text-2xl md:text-5xl text-center font-bold">
              YouTube
            </h2>
            <IoLogoYoutube className="text-red-500" />
          </span>

          <p className="text-xl md:text-2xl font-semibold text-center mb-4">
            1 Packaging
          </p>

          <Image
            src={"/packaging.png"}
            alt="packaging"
            width={750}
            height={500}
            className="
              w-full h-auto 
              max-w-[1050px] mx-auto object-cover 
              rounded-md
            "
          />
        </section>

        {/* CARDS SECTION */}
        <section className="flex flex-col gap-5 mt-20">
          <p className="text-xl md:text-2xl font-semibold text-center">
            Specific improvement
          </p>

          <div
            className="
            flex flex-col sm:flex-row 
            gap-4 
            max-w-[1000px] mx-auto
          "
          >
            {cards.map((card, index) => (
              <Card
                key={index}
                imageUrl={card.imageUrl}
                descriptions={card.improvementPoints}
              />
            ))}
          </div>
        </section>

        {/* BEFORE → AFTER SECTION */}
        <section>
          <p className="text-xl md:text-2xl font-semibold text-center mt-20">
            Specific improvement
          </p>

          <div
            className="
            flex flex-col sm:flex-row 
            gap-4 
            max-w-[800px] mx-auto mt-5 
            items-center
          "
          >
            <div className="w-full bg-red-700 rounded-md p-2 flex flex-col items-center">
              <Image
                src={"/tumbnail1.jpg"}
                height={400}
                width={400}
                className="w-full h-full object-cover max-h-[250px]"
                alt="previous thumbnail"
              />
              <p className="font-semibold mt-2">Previous Thumbnail</p>
            </div>

            <ImArrowRight className="text-4xl sm:text-9xl rotate-90 sm:rotate-0" />

            <div className="w-full bg-green-700 rounded-md p-2 flex flex-col items-center">
              <Image
                src={"/rise.png"}
                height={400}
                width={400}
                className="w-full h-full object-cover max-h-[250px]"
                alt="new thumbnail"
              />
              <p className="font-semibold mt-2">Thumbnail We Made</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
