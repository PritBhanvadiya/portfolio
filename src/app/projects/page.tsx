"use client";
import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { invertColor } from '@/utils/colorUtils';

const data = [
  {
    id: 1,
    color: "#0153FB", // Background color
    textColor: "text-yellow-100",
    contentColor: "text-orange-400",
    hexa: "#FFA500",
    varColor: "text-yellow-400",
    projectType: "informative",
    techStack: "NextJs, TailwindCSS, GSAP",
    description: "Details about card one"
  },
  {
    id: 2,
    color: "#FCEE00", // Background color
    textColor: "text-blue-600",
    contentColor: "text-blue-800",
    hexa: "#0000FF",
    varColor: "text-red-600",
    projectType: "e-commerce",
    techStack: "NextJs, TailwindCSS, GSAP",
    description: "Details about card two"
  },
  {
    id: 3,
    color: "#FE2F60", // Background color
    textColor: "text-gray-800",
    contentColor: "text-white",
    hexa: "#FF69B4",
    varColor: "text-black",
    projectType: "google map integration",
    techStack: "NextJs, TailwindCSS, GSAP",
    description: "Details about card three"
  },
  {
    id: 4,
    color: "#E40816", // Background color
    textColor: "text-white",
    contentColor: "text-black",
    hexa: "#9B870C",
    varColor: "text-black",
    projectType: "google map integration",
    techStack: "NextJs, TailwindCSS, GSAP",
    description: "Details about card three"
  }
];

export default function Projects() {
  const [selectedCard, setSelectedCard] = useState<null | number>(null);

  const handleCardClick = (id: number) => {
    setSelectedCard(id);
    console.log("Card clicked:", id);
  }

  // Get the selected card data
  const selectedItem = selectedCard ? data.find((d) => d.id === selectedCard) : null;

  // Invert the color for the selected card background
  const invertedColor = selectedItem ? invertColor(selectedItem.color) : "#000000"; // Fallback to black if no card is selected

  return (
    <main className="full min-h-screen p-4 sm:p-20 flex items-center justify-center">
      <div className="max-w-7xl flex items-center justify-center gap-20 flex-wrap">
        {data.map((item) => (
          <ProjectCard
            key={item.id}
            id={item.id}
            item={item}
            handleCardClick={handleCardClick}
          />
        ))}
      </div>

      {/* Modal */}
      {selectedCard !== null && selectedItem && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div
            className={`bg-[${selectedItem.color}] p-6 rounded-xl shadow-lg max-w-4xl w-full relative`}
            style={{ backgroundColor: selectedItem.color }}
          >
            <button
              className="absolute top-2 right-2 text-gray-600"
              onClick={() => setSelectedCard(null)}
            >
              ✕
            </button>
            <h2
              className={`text-xl font-semibold ${invertedColor === "#000000" ? 'text-white' : 'text-black'}`}
              style={{ color: invertedColor }}
            >
              {selectedItem.projectType}
            </h2>
            <pre
              className={`mt-2 ${invertedColor === "#000000" ? 'text-white' : 'text-black'}`}
              style={{ color: invertedColor }}
            >
              {selectedItem.description}
            </pre>
          </div>
        </div>
      )}
    </main>
  );
}
