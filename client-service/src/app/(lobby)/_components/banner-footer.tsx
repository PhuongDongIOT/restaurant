import Image from "next/image";

type BannerFooterProps = {
    src: string;
}
export default function BannerFooter({ src }: BannerFooterProps) {
    return (
        <div className="w-full h-80">
            <Image src={src} alt="banner" height={400} width={1200} className="w-full h-full object-cover rounded-2xl" />
        </div>
    )
}