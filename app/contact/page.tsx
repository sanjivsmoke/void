"use client"
import { useState } from "react";

export default function ContactPage() {

	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});

	const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleFormSubmit = (e: { preventDefault: () => void; }) => {
		e.preventDefault();
		// Do something with the form data, e.g., save to an array
		console.log(formData);
	};
	return (
		// <div>
		// 	<section className=" body-font relative">
		// 		<div className="container px-5 py-24 mx-auto">
		// 			<div className="flex flex-col text-center w-full mb-12">
		// 				<h1 className="sm:text-3xl text-2xl font-medium title-font mb-4">
		// 					Contact Us
		// 				</h1>
		// 				<p className="lg:w-1/3 mx-auto leading-relaxed text-base">
		// 					Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.
		// 				</p>
		// 			</div>
		// 			<div className="lg:w-1/2 md:w-2/3 mx-auto">
		// 				<div className="flex flex-wrap -m-2">
		// 					<div className="p-2 w-1/2">
		// 						<div className="relative">
		// 							<label className="leading-7 text-sm text-gray-600">
		// 								Name
		// 							</label>
		// 							<input
		// 								type="text"
		// 								id="name"
		// 								name="name"
		// 								className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
		// 							/>
		// 						</div>
		// 					</div>
		// 					<div className="p-2 w-1/2">
		// 						<div className="relative">
		// 							<label

		// 								className="leading-7 text-sm text-gray-600"
		// 							>
		// 								Email
		// 							</label>
		// 							<input
		// 								type="email"
		// 								id="email"
		// 								name="email"
		// 								className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
		// 							/>
		// 						</div>
		// 					</div>
		// 					<div className="p-2 w-full">
		// 						<div className="relative">
		// 							<label

		// 								className="leading-7 text-sm text-gray-600"
		// 							>
		// 								Message
		// 							</label>
		// 							<textarea
		// 								id="message"
		// 								name="message"
		// 								className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
		// 							></textarea>
		// 						</div>
		// 					</div>
		// 					<div className="p-2 w-full">
		// 						<button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
		// 							Hit Me Up
		// 						</button>
		// 					</div>
		// 					<div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
		// 						<a className="text-indigo-500">nirmalkumar22@hotmail.com</a>
		// 						<p className="leading-normal my-5">
		// 							Ramamoorthi Nagar AvalurePet Road
		// 							<br />
		// 							Thiruvannamaial,Tamil Nadu.INDIA-606601
		// 						</p>
		// 					</div>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</section>
		// </div>
		<div>
			<section className="body-font relative">
				<div className="container px-5 py-24 mx-auto">
					<div className="flex flex-col text-center w-full mb-12">
						<h1 className=" bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent sm:text-4xl text-2xl font-bold title-font mb-4">
							Contact Mission Control
						</h1>
						<p className="lg:w-1/3 mx-auto leading-relaxed text-base">
							Navigate the cosmic web with us! Questions about the universe or just want to make contact? Your cosmic message will reach us, and we will respond across the cosmic frequencies.	</p>
					</div>
					<div className="lg:w-1/2 md:w-2/3 mx-auto">
						<form onSubmit={handleFormSubmit}>
							<div className="flex flex-wrap -m-2">
								<div className="p-2 w-1/2">
									<div className="relative">
										<label className="leading-7 text-sm text-gray-600">
											Name
										</label>
										<input
											type="text"
											id="name"
											name="name"
											value={formData.name}
											onChange={handleInputChange}
											className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
										/>
									</div>
								</div>
								<div className="p-2 w-1/2">
									<div className="relative">
										<label
											className="leading-7 text-sm text-gray-600"
										>
											Email
										</label>
										<input
											type="email"
											id="email"
											name="email"
											value={formData.email}
											onChange={handleInputChange}
											className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
										/>
									</div>
								</div>
								<div className="p-2 w-full">
									<div className="relative">
										<label
											className="leading-7 text-sm text-gray-600"
										>
											Message
										</label>
										<textarea
											id="message"
											name="message"
											value={formData.message}
											onChange={handleInputChange}
											className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
										></textarea>
									</div>
								</div>
								<div className="p-2 w-full">
									<button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" type="submit">
										Hit Me Up !
									</button>
								</div>
								<div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
									<a className="text-indigo-500">nirmalkumar22@hotmail.com</a>
									<p className="leading-normal my-5">
										Ramamoorthi Nagar AvalurePet Road
										<br />
										Thiruvannamaial,Tamil Nadu.INDIA-606601
									</p>
								</div>
							</div>
						</form>
					</div>
				</div>
			</section>
		</div>
	);
}
// <div className="grid grid-row sm:grid-cols-4 sm:grid-rows-1  gap-5 h-full w-full p-2">
// 	<div className="container flex flex-col justify-evenly bg-slate-200 ">
// 		<h1 className=" bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent  text-2xl sm:text-4xl font-bold   text-center" >Docs</h1>
// 		<h1 className={title({ size: "sm", color: "violet" })} >Docs</h1>
// 		<h1 className={title({ size: "sm", color: "violet" })} >Docs</h1>
// 		<h1 className={title({ size: "sm", color: "violet" })} >Docs</h1>
// 	</div>
// 	<div className="containerc sm:col-span-3 bg-red-100">	<h1 className={title({ size: "sm", color: "cyan" })}>Docs</h1></div>
// </div>