import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

import pfp from "../../../public/pfp.png";

import { faGlobe, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import {
	faDiscord,
	faTwitter,
	faGithub,
} from "@fortawesome/free-brands-svg-icons";

import { useState } from "react";

export default function Navbar() {
	const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

	return (
		<nav className="container w-50 m-auto flex">
			<div id="title" className="flex flex-row ml-3 md:ml-0">
				<Link
					href="/"
					className="text-navtext font-inter font-bold ml-1 mt-nav-height"
				>
					<Image
						src={pfp}
						alt="pfp"
						width={50}
						height={50}
						className="m-0 rounded-full"
					/>
				</Link>
				<Link
					href="/"
					className="text-navtext hover:text-navhover font-inter font-bold ml-5 mt-nav-text-height"
				>
					Michal
				</Link>
			</div>
			<div id="navigation" className="justify-end ml-auto NAVCLOSED">
				<ul className="flex flex-row justify-end">
					<li className="text-navtext hover:text-navhover font-inter font-bold ml-5 mt-nav-text-height">
						<Link href="/about">About</Link>
					</li>
					<li className="text-navtext hover:text-navhover font-inter font-bold ml-5 mt-nav-text-height">
						<Link href="/projects">Projects</Link>
					</li>
					<li className="text-navtext hover:text-navhover font-inter font-bold ml-5 mt-nav-text-height">
						<Link href="/contact">Contact</Link>
					</li>
				</ul>
			</div>
			<div
				id="divider"
				className="ml-4 border-2 border-navdivider opacity-25 h-12 mt-nav-height NAVCLOSED"
			></div>
			<div
				id="language"
				className="text-navtext font-bold mt-nav-text-height NAVCLOSED"
			>
				<FontAwesomeIcon icon={faGlobe} size="1x" className="ml-4" />
				<FontAwesomeIcon
					icon={faCaretDown}
					size="1x"
					className="ml-3"
				/>
			</div>
			<div
				id="divider"
				className="ml-4 border-2 border-navdivider opacity-25 h-12 mt-nav-height NAVCLOSED"
			></div>
			<div id="socialIcons" className="NAVCLOSED">
				<ul className="flex flex-row">
					<li className="text-navtext font-bold mt-nav-text-height">
						<Link href="https://discord.com">
							<FontAwesomeIcon
								icon={faDiscord}
								size="1x"
								className="ml-3"
							/>
						</Link>
					</li>
					<li className="text-navtext font-bold mt-nav-text-height">
						<Link href="https://twitter.com">
							<FontAwesomeIcon
								icon={faTwitter}
								size="1x"
								className="ml-3"
							/>
						</Link>
					</li>
					<li className="text-navtext font-bold mt-nav-text-height">
						<Link href="https://github.com">
							<FontAwesomeIcon
								icon={faGithub}
								size="1x"
								className="ml-3"
							/>
						</Link>
					</li>
				</ul>
			</div>

			{/* MOBILE MENU */}
			<section className="MOBILE-MENU flex ml-auto mr-8 mt-3 lg:hidden">
				<div
					className="HAMBURGER-ICON space-y-2 mt-nav-height"
					onClick={() => setIsNavOpen((prev) => !prev)}
				>
					<span className="block h-0.5 w-8 bg-white"></span>
					<span className="block h-0.5 w-8 bg-white"></span>
					<span className="block h-0.5 w-8 bg-white"></span>
				</div>

				<div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
					<div
						className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
						onClick={() => setIsNavOpen(false)}
					>
						<svg
							className="h-8 w-8 text-white"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<line x1="18" y1="6" x2="6" y2="18" />
							<line x1="6" y1="6" x2="18" y2="18" />
						</svg>
					</div>
					<ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between">
						<li className="border-b border-gray-400 my-8 uppercase">
							<a href="/about">About</a>
						</li>
						<li className="border-b border-gray-400 my-8 uppercase">
							<a href="/portfolio">Projects</a>
						</li>
						<li className="border-b border-gray-400 my-8 uppercase">
							<a href="/contact">Contact</a>
						</li>
					</ul>
					<ul className="flex flex-row justify-center ml-auto mr-auto">
						<li className="">
							<Link href="https://discord.com">
								<FontAwesomeIcon
									icon={faDiscord}
									size="2x"
									className="ml-3"
								/>
							</Link>
						</li>
						<li className="ml-3">
							<Link href="https://twitter.com">
								<FontAwesomeIcon
									icon={faTwitter}
									size="2x"
									className="ml-3"
								/>
							</Link>
						</li>
						<li className="ml-3">
							<Link href="https://github.com">
								<FontAwesomeIcon
									icon={faGithub}
									size="2x"
									className="ml-3"
								/>
							</Link>
						</li>
					</ul>
				</div>
				<style>
					{`
      				.hideMenuNav {
        				display: none;
      				}
      				.showMenuNav {
        				display: block;
        				position: absolute;
        				width: 100%;
        				height: 60vh;
        				top: 0;
        				left: 0;
						background-color: #111827;
        				z-index: 10;
        				display: flex;
        				flex-direction: column;
        				justify-content: space-evenly;
       					align-items: center;
      				}
				`}
				</style>
			</section>
		</nav>
	);
}
