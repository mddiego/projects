"use client";

import { useEffect, useReducer, useRef } from "react";
import Link from "next/link";

const _menu = [
  {
    href: "/home",
    title: "Home",
  },
  {
    href: "/resume",
    title: "Resume",
  },
].map((v, k) => ({
  key: k,
  value: v,
}));

export default function Page() {
  const _menuMobile = useRef(null);

  const [_showMenu, toggleMenu] = useReducer((_showMenu) => !_showMenu, false);
  useEffect(() => {
    if (_showMenu) {
      _menuMobile.current?.classList.remove("hidden");
      _menuMobile.current?.classList.add("block");
    } else {
      _menuMobile.current?.classList.remove("block");
      _menuMobile.current?.classList.add("hidden");
    }
  }, [_showMenu, _menuMobile]);

  return (
    <header className="xl:w-7xl w-auto shrink-0">
      <div className="grid xl:grid-cols-12 grid-cols-2 py-4">
        <Link
          href="/"
          className="xl:col-span-9 xl:col-start-1 text-2xl underline underline-offset-8 decoration-double decoration-2 font-light font-features-['smcp']"
        >
          Diego Lopes
        </Link>
        <nav className="xl:col-span-3 xl:col-start-10 text-right sm:block hidden">
          {_menu.map((v) => {
            return (
              <Link className="px-3 py-2" key={v.key} href={v.value.href}>
                {v.value.title}
              </Link>
            );
          })}
        </nav>
        <div className="relative">
          <a
            className='sm:hidden flex justify-end items-center text-["18px"] cursor-pointer'
            onClick={toggleMenu}
          >
            &bull;&bull;&bull;
          </a>
          <nav
            ref={_menuMobile}
            className="hidden text-right absolute right-0 z-999"
          >
            {_menu.map((v) => {
              return (
                <Link className="px-3 py-2" key={v.key} href={v.value.href}>
                  {v.value.title}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
