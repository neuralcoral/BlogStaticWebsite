import React from "react";

export interface EntryPageProps {
    returnToTable: Function,
    pageContents: React.FC | undefined
}

const EntryPage: React.FC<EntryPageProps> = ({returnToTable, pageContents})=> {
    return (
        <div>
            <button onClick={() => returnToTable()}>
                Show Table
            </button>
            { pageContents !== undefined && React.createElement(pageContents) }
        </div>
    );
}

export default EntryPage;