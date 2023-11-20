"use client";
import React from "react";
import classnames from "classnames";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { AiFillBug } from "react-icons/ai";
import { PiBugDroidFill } from "react-icons/pi";
import { useSession } from "next-auth/react";
import {
  Avatar,
  Box,
  Container,
  DropdownMenu,
  Flex,
  Text,
} from "@radix-ui/themes";
import { Skeleton } from "@/app/components";

const NavBar = () => {
  return (
    <nav className=" border-b px-5 h-14 mb-5 py-3">
      <Container className="overflow-hidden">
        <Flex justify="between">
          <Flex align="center" gap="3">
            <Link href="/">
              <PiBugDroidFill size="30" className=" text-[#6c5ce7]" />
            </Link>
            <NavLinks />
          </Flex>
          <AuthStatus />
        </Flex>
      </Container>
    </nav>
  );
};
const NavLinks = () => {
  const currentPath = usePathname();
  const links = [
    { label: "Home", href: "/" },
    { label: "Issues", href: "/issues/list" },
  ];
  return (
    <ul className="flex space-x-6">
      {links.map((link, index) => (
        <li key={index}>
          <Link
            // khong dung thu vien classnames
            // className={`${
            //   link.href === currentPath ? "text-zinc-900" : "text-zinc-500"
            // }   hover:text-zinc-800  transition-colors`}
            // dung thu vien classname
            className={classnames({
              "nav-link": true,
              "!text-zinc-900": link.href === currentPath,
            })}
            href={link.href}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};
const AuthStatus = () => {
  const { status, data: session } = useSession();

  if (status === "loading") return null;

  if (status === "unauthenticated")
    return (
      <Link className="nav-link" href="/api/auth/signin">
        Login
      </Link>
    );

  return (
    <Box>
      {/* {status === "authenticated" && ( */}
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <Avatar
            src={session?.user?.image ?? ``}
            fallback="?"
            size="2"
            radius="full"
            className="cursor-pointer "
          ></Avatar>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Label>
            <Text>{session?.user?.email}</Text>
          </DropdownMenu.Label>
          <DropdownMenu.Item>
            <Link href="/api/auth/signout">Log out</Link>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
      {/* )} */}
    </Box>
  );
};

export default NavBar;
