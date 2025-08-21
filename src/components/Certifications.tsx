import React from "react";
import { certifications } from "../data/certifications";

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Certifications</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="border rounded-xl p-5 shadow hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold">{cert.title}</h3>
              <p className="text-sm text-muted-foreground">{cert.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
