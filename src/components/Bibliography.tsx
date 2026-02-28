import React from "react";
import "./Bibliography.css";

export interface Reference {
    id: number;
    text: string;
    url?: string;
    accessDate?: string; // New optional prop
}

export interface BibliographyProps {
    references: Reference[];
}

const Bibliography: React.FC<BibliographyProps> = ({ references }) => {
    if (!references || references.length === 0) return null;

    return (
        <section className="bibliography">
            <details className="bib-disclosure">
                <summary className="bib-summary">
                    References <span className="bib-count">({references.length})</span>
                </summary>
                <div className="bib-list">
                    {references.map((ref) => (
                        <div key={ref.id} className="bib-entry">
                            <span className="bib-number">[{ref.id}]</span>
                            <div className="bib-content">
                                {ref.text}
                                {ref.url && (
                                    <>
                                        {" "}
                                        {ref.accessDate && `Accessed: ${ref.accessDate}. `}
                                        [Online]. Available:{" "}
                                        <a
                                            href={ref.url}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="bib-link"
                                        >
                                            {ref.url}
                                        </a>
                                    </>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </details>
        </section>
    );
};

export default Bibliography;