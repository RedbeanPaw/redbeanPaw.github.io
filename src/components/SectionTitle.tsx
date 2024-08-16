import { useState, useCallback, useEffect, FC, useRef } from "react";

export const SectionTitle: FC<any> = ({ main, sub }) => {
  return (
    <section>
      <p className="text-gray-400 font-semibold">{sub}</p>
      <h2 className="text-gray-900 text-3xl mb-3">{main}</h2>
    </section>
  );
};
