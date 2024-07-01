"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, type Variants } from "framer-motion";
import type { LucideIcon } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const iconDefaultAnimation: Variants = {
  hidden: {
    x: -20,
    rotate: 15,
    transition: {
      type: "spring",
      damping: 24,
      stiffness: 500,
      bounce: 0.5,
    },
  },
  visible: {
    x: 0,
    rotate: 0,
    transition: {
      type: "spring",
      damping: 24,
      stiffness: 500,
      bounce: 0.5,
      delay: 0.2,
    },
  },
  active: {
    x: 0,
    rotate: 0,
    scale: 1.2,
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      type: "spring",
      damping: 16,
      stiffness: 500,
    },
  },
};

const textDefaultAnimation: Variants = {
  hidden: {
    x: -20,
    transition: {
      type: "spring",
      damping: 16,
      stiffness: 500,
      bounce: 0.5,
    },
  },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      damping: 16,
      stiffness: 500,
      bounce: 0.5,
      delay: 0.2,
    },
  },
};

interface NavProps {
  links: {
    title: string;
    label?: string;
    href: string;
    icon: LucideIcon;
    variant: "default" | "ghost";
  }[];
}

export function Nav({ links }: NavProps) {
  return (
    <div className="group flex flex-col gap-4 py-2">
      <nav className="grid gap-1 px-2">
        {links.map((link, index) => (
          <NavLink key={index} link={link} />
        ))}
      </nav>
    </div>
  );
}

interface NavLinkProps {
  link: NavProps["links"][0];
}

function NavLink({ link }: NavLinkProps) {
  const [isHovered, setIsHovered] = useState(false);
  const pathname = usePathname();
  const isActive = pathname === link.href;

  return (
    <Link
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      href={link.href}
      className={cn(
        buttonVariants({ variant: link.variant, size: "sm" }),
        link.variant === "default" &&
          "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white",
        "justify-start text-muted-foreground",
        isActive && "text-foreground",
      )}
    >
      <div className={cn(!isActive && "overflow-hidden")}>
        <motion.div
          initial={isActive ? "visible" : "hidden"}
          animate={
            isActive
              ? isHovered
                ? "active"
                : "visible"
              : isHovered
                ? "visible"
                : "hidden"
          }
          variants={iconDefaultAnimation}
        >
          <link.icon className="mr-2 h-4 w-4" />
        </motion.div>
      </div>

      <motion.span
        initial={isActive ? "visible" : "hidden"}
        animate={isActive ? "visible" : isHovered ? "visible" : "hidden"}
        variants={textDefaultAnimation}
      >
        {link.title}
      </motion.span>

      {link.label && (
        <span
          className={cn(
            "ml-auto",
            link.variant === "default" && "text-background dark:text-white",
          )}
        >
          {link.label}
        </span>
      )}
    </Link>
  );
}
