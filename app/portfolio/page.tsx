"use client"
import { galleryImage } from "@/config/site";
import { Image } from "@nextui-org/react";
import { Key } from "react";


let gallery: any = []

galleryImage.gImage.forEach(function (value: string) {
	gallery.push("/images/" + value)
});



export default function PortfolioPage() {
	return (
		<div className="grid grid-cols-6 grid-rows-10 gap-2 sm:gap-4 h-full w-full items-center justify-center ">
			{gallery.map((data: any, index: Key | null | undefined) => (
				< div key={index} className="col-span-2 row-span-3 bg-slate-50">
					<Image
						isZoomed
						loading="lazy"
						radius="none"
						removeWrapper
						alt="NextUI hero Image"
						src={data}
					/></div>))}
		</div >

	);
}
