"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type TechnologyFilterContextValue = {
  selectedTechnology: string | null;
  toggleTechnology: (technology: string) => void;
};

const TechnologyFilterContext = createContext<TechnologyFilterContextValue | null>(null);

export function TechnologyFilterProvider({ children }: { children: ReactNode }) {
  const [selectedTechnology, setSelectedTechnology] = useState<string | null>(null);

  function toggleTechnology(technology: string) {
    setSelectedTechnology((selected) => selected === technology ? null : technology);
  }

  return (
    <TechnologyFilterContext.Provider value={{ selectedTechnology, toggleTechnology }}>
      {children}
    </TechnologyFilterContext.Provider>
  );
}

export function useTechnologyFilter() {
  return useContext(TechnologyFilterContext) ?? {
    selectedTechnology: null,
    toggleTechnology: () => undefined,
  };
}

export function TechnologyPill({ technology, projectCount }: { technology: string; projectCount: number }) {
  const { selectedTechnology, toggleTechnology } = useTechnologyFilter();

  if (projectCount === 0) {
    return <span className="technology-pill">{technology}</span>;
  }

  return (
    <button
      aria-pressed={selectedTechnology === technology}
      className="technology-pill technology-pill--interactive"
      onClick={() => toggleTechnology(technology)}
      title={`Highlight ${projectCount} ${projectCount === 1 ? "project" : "projects"} using ${technology}`}
      type="button"
    >
      {technology}
    </button>
  );
}

export function TechnologyFilterStatus() {
  const { selectedTechnology, toggleTechnology } = useTechnologyFilter();

  return (
    <p aria-live="polite" className="technology-filter-status">
      {selectedTechnology ? (
        <>
          Highlighting project cards tagged {selectedTechnology}.{" "}
          <a href="#work">See highlighted projects</a>{" "}
          <button onClick={() => toggleTechnology(selectedTechnology)} type="button">Clear highlight</button>
        </>
      ) : "Select a technology to highlight the projects where it appears."}
    </p>
  );
}
