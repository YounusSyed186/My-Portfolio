import React from "react";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import Image from "next/image";

// Image components with shared styles
interface BentoImageProps {
  src: string;
  alt: string;
}

const BentoImage = ({ src, alt }: BentoImageProps) => {
  if (!src) {
    console.error("Invalid image src:", src);
    return null; // Don't render if the src is invalid
  }

  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black">
      <Image
        className="w-full h-full object-cover"
        src={src}
        alt={alt || "Image"} // Provide a fallback for alt
        width={500}
        height={300}
        loading="lazy"
      />
    </div>
  );
};


interface GridItem {
  title: string;
  description: string;
  header: React.ReactNode;
  className: string;
  icon: React.ReactNode;
}

const items: GridItem[] = [
  {
    title: "I prioritize client collaboration, fostering open communication",
    description: "Client-focused development with transparent workflows",
    header: <BentoImage src="/b1.svg" alt="Collaboration illustration" />,
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "My tech stack",
    description: "MERN Stack (MongoDB, Express, React, Node.js)",
    header: <BentoImage src="/mern.png" alt="MERN stack technologies" />,
    className: "md:col-span-1",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Do you want to start a project together?",
    description: "Let's discuss your next big idea",
    header: <BentoImage src="/p3.svg" alt="Project collaboration" />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "I'm very flexible with time zone communications",
    description: "Available across multiple time zones",
    header: <BentoImage src="/p1.svg" alt="Time zone flexibility" />,
    className: "md:col-span-2",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
];

export function BentoGridDemo() {
  return (
    <section id="about" className="mb-10">
      <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={item.className}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </section>
  );
}