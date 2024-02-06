"use client"
import { GithubIcon, TwitterIcon, InstagramIcon } from "@/components/icons/icons";
import { sociallinks } from "@/config/site";
import { Button, Link } from "@nextui-org/react";



export default function ContactPage() {
	const sendEmail = () => {
		const emailAddress = 'nirmalkumar22@hotmail.com';
		const subject = 'Hello from Void !';
		const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`;
		window.location.href = mailtoLink;
	};



	return (
		<div>
			<section className="body-font relative">
				<div className="container px-5 py-24 mx-auto">
					<div className="flex flex-col text-center w-full mb-12">
						<h1 className=" bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent sm:text-4xl text-2xl font-bold title-font mb-4">
							Contact Mission Control
						</h1>
						<p className="lg:w-1/2 mx-auto leading-relaxed text-base">
							Navigate the cosmic web with us! Questions about the universe or just want to make contact? Your cosmic message will reach us, and we will respond across the cosmic frequencies.	</p>
					</div>
					<div className="lg:w-1/2 md:w-2/3 mx-auto">
						<div className="p-2 w-full">
							<Button className="flex mx-auto " variant="shadow" color="secondary" size="lg" onClick={sendEmail} >
								Hit Me Up !
							</Button>
						</div>
						<div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
							<p className="leading-normal my-5">
								Ramamoorthi Nagar AvalurePet Road
								<br />
								Thiruvannamaial,Tamil Nadu.INDIA-606601
							</p>
						</div>
						<div className="p-2 w-full flex gap-5 justify-center">
							{sociallinks.map((data, index) => (
								<Link

									key={index}
									isExternal
									showAnchorIcon
									href={data.link}
									anchorIcon={data.iconName === "github" ? <GithubIcon /> : data.iconName === "twitter" ? <TwitterIcon /> : <InstagramIcon />}
								>

								</Link>
							))}
						</div>


					</div>
				</div>
			</section >
		</div >
	);
}
