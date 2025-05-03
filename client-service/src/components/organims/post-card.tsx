import Image from "next/image";
const image = "https://api-picture.banhcuonanhvu.com/picture/3/image";

export default function PostCard() {
    return (
        <div className="w-full mx-auto">
            <div className="relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100">
                <div className="w-full h-32 aspect-w-16 aspect-h-10 bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative">
                    <Image
                        src={image}
                        alt="thumbnail"
                        layout="fill"
                        objectFit="cover"
                        className={`group-hover:scale-95 group-hover:rounded-2xl transform object-cover transition duration-200 `}
                    />
                </div>
                <div className="px-4 py-6 flex flex-col">
                    <h3 className="font-bold text-lg text-zinc-700 line-clamp-2">
                        {blogContent.title}
                    </h3>
                    <span className="text-xs text-black">{blogContent.date}</span>
                    <p className="mt-1 font-normal text-sm text-zinc-500 line-clamp-3">
                        {blogContent.description}
                    </p>
                    <div className="mt-2 flex flex-row justify-between items-center">
                        <div className="relative z-10 px-6 py-2 bg-black text-white font-bold rounded-xl block text-xs">
                            Read More
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const blogContent = {
    slug: "amazing-tailwindcss-grid-layouts",
    author: "Manu Arora",
    date: "28th March, 2023",
    title: "Ví dụ tuyệt vời về bố cục lưới Tailwindcss",
    description:
        `🍱 Grids rất tuyệt – nhưng Grids với TailwindCSS còn tuyệt như một bữa ăn được bày biện tinh tế.
Nếu coi UI là món ăn thì grid layout chính là chiếc đĩa – nó không chỉ để đựng, mà còn định hình cách trải nghiệm món ăn đó.`,
    image: "/demo/thumbnail.png",
    authorAvatar: "/manu.png",
};

const TitleComponent = ({
    title,
    avatar,
}: {
    title: string;
    avatar: string;
}) => (
    <div className="flex space-x-2 items-center">
        <Image
            src={avatar}
            height="20"
            width="20"
            alt="thumbnail"
            className="rounded-full border-2 border-white"
        />
        <p>{title}</p>
    </div>
);
