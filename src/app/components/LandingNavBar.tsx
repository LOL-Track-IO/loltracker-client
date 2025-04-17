import Link from "next/link";
import loltrackerLogo from "../assets/loltracker-logo.png";

export default function LandingNavBar() {
  return (
    <nav className="py-2 bg-gray-700">
      <div className="flex justify-between items-center max-w-screen w-[100%] h-[100%] m-auto">
        <figure className="flex items-center justify-center px-2.5">
          <Link href="/">
            <img
              id="loltracker-logo"
              src={loltrackerLogo.src}
              alt="loltracker-logo"
            />
            {/* TODO: edit background color of logo to be consistent with nav-bar background color */}
          </Link>
          <h1 className="font-bold text-xl px-2 text-white hover:text-[#4dacdf] transition-colors duration-300 ease-in-out">
            {/* LOLTracker */}
          </h1>
        </figure>

        <div className="flex px-2.5 sm:hidden group">
          <div className="block">
            <div className="text-xl hover:cursor-pointer">
              <svg
                stroke="currentColor"
                fill="none"
                className="hover:cursor-pointer"
                stroke-width="0"
                viewBox="0 0 15 15"
                height="1.5em"
                width="2em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  className="fill-current group-hover:fill-gray-500 transition-colors duration-300 ease-in-out"
                  d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 
                  3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 
                  1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 
                  8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 
                  11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 
                  12H1.5C1.22386 12 1 11.7761 1 11.5Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        {/* TODO: add link hover effects under list items */}
        <div className="hidden sm:block text-xl">
          <ul className="gap-6 px-4 flex">
            <li className="">
              <Link
                href="/"
                className="underline-animation hover:text-[#4dacdf] transition-colors duration-300 ease-in-out"
              >
                Home
              </Link>
            </li>
            <li className="">
              <Link
                href="/match-history"
                className="underline-animation hover:text-[#4dacdf] transition-colors duration-300 ease-in-out"
              >
                Match History
              </Link>
              {/* TODO: add routing to match-history page */}
            </li>
            <li className="">
              <Link
                href="/champions"
                className="underline-animation hover:text-[#4dacdf] transition-colors duration-300 ease-in-out"
              >
                Champions
              </Link>
              {/* TODO: add routing to champions page*/}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
