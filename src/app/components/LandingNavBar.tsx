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

        {/* TODO: add link hover effects under list items */}
        <div className="hidden sm:block lg:text-lg">
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
