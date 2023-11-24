import { useRef } from "react";
import { useEffect } from "react";

const Header = () => {
	const headerRef = useRef();
	const navItem = [
		{
			item: "Features",
			path: "home",
		},
		{
			item: "Team",
			path: "team",
		},
		{
			item: "Sign In",
			path: "signin",
		},
	];

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 100) {
				headerRef.current.style.background = "#000";
				headerRef.current.style.padding = "20px 0";
			} else {
				headerRef.current.style.background = "#481878";
				headerRef.current.style.padding = "60px 0";
			}
		});
	}, []);

	return (
		<header
			ref={headerRef}
			className='bg-primary pt-[60px] fixed top-0 right-0 w-full transition-all duration-300'>
			<div className='container mx-auto flex justify-between items-center  gap-[30px] sm:gap-0 flex-col sm:flex-row '>
				<a href='home'>
					<img className='' src='/src/assets/images/logo.svg' alt='logo-img' />
				</a>
				<nav>
					<ul className='flex  items-center gap-[50px]'>
						{navItem.map((item) => (
							<li className='text-white  p-1 hover:bg-purple-500 ' key={item.item}>
								<a href={item.path}>{item.item} </a>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
