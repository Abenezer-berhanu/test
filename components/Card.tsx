import Image from "next/image";

function Card({
  imageUrl,
  descriptions,
}: {
  imageUrl: string;
  descriptions?: { title: string; bullets: string }[];
}) {
  return (
    <div className="flex flex-col bg-slate-200 rounded-xl p-5 text-black w-full max-w-[420px] gap-4">
      {/* Thumbnail */}
      <Image
        src={imageUrl}
        width={400}
        height={400}
        alt="image"
        className="w-full h-[200px] object-cover rounded-md"
      />

      {/* Title */}
      <div className="underline font-semibold text-lg">Improvement points</div>

      {/* Description sections */}
      <div className="flex flex-col gap-6">
        {descriptions?.map((item, index) => (
          <div key={index} className="flex flex-col gap-1">
            <div className="font-semibold">{item.title}</div>
            <ul className="list-disc ml-6 text-sm leading-snug">
              <li>{item.bullets}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
