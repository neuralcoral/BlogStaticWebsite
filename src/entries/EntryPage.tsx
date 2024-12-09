import React from "react";
import "./EntryPage.css";

export interface EntryPageProps {
    returnToTable: Function,
    pageContents: React.FC | undefined
}

const EntryPage: React.FC<EntryPageProps> = ({returnToTable, pageContents})=> {
    return (
        <div className="page">
            <div className="return-button" onClick={() => returnToTable()}>
                &lt;
            </div>
            <div className="content">
                { pageContents !== undefined && React.createElement(pageContents) }
            </div>
        </div>
    );
}

export default EntryPage;