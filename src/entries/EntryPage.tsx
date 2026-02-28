import React from "react";
import "./EntryPage.css";

export interface EntryPageProps {
    returnToTable: () => void, // Explicit typing for clarity
    pageContents: React.FC | undefined
}

const EntryPage: React.FC<EntryPageProps> = ({returnToTable, pageContents}) => {
    return (
        <div className="page">
            <header className="entry-header">
                <button className="return-button" onClick={returnToTable} aria-label="Return to table">
                    &lt;
                </button>
                <div className="entry-title-wrapper">
                    {/* If your pageContents starts with an <h1>,
                        the CSS below will align it with the button.
                    */}
                    { pageContents && React.createElement(pageContents) }
                </div>
            </header>
        </div>
    );
}

export default EntryPage;