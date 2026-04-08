import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import EntriesTable from "./EntriesTable";
import EntryPage from "./EntryPage";
import Post001 from "../content/post001/Post001";
import Post002 from "../content/post002/Post002";
import Post003 from "../content/post003/Post003";

const entries = [
    { title: "RISC-V Emulation", component: Post001 },
    { title: "What is Emulation?", component: Post002 },
    { title: "Starting a Simple Robotics Project", component: Post003}
];

const EntryResolver: React.FC = () => {
    const { postId } = useParams<{ postId: string }>();
    const navigate = useNavigate();

    // Helper to match the logic in your EntriesTable
    const numDigits = entries.length > 0 ? Math.max(2, Math.ceil(Math.log10(entries.length))) : 2;
    const formatIndex = (index: number) => index.toString().padStart(numDigits, '0');

    // FIND THE ENTRY:
    // We compare the URL (postId) to the formatted index of our array
    const entry = entries.find((_, index) => formatIndex(index) === postId);

    const selectEntry = (id: string) => {
        if (navigator.vibrate) navigator.vibrate(10);
        navigate(`/${id}`);
    };

    const returnToTable = () => {
        navigate("/");
    };

    // If no postId in URL, show the table
    if (!postId) {
        return <EntriesTable entries={entries} selectEntry={selectEntry} />;
    }

    // If we have a postId but NO matching entry, show error instead of crashing
    if (!entry) {
        return (
            <div style={{ textAlign: 'center', padding: '2rem' }}>
                <h2>Post {postId} not found</h2>
                <button onClick={returnToTable}>Return to Table</button>
            </div>
        );
    }

    return (
        <EntryPage
            returnToTable={returnToTable}
            pageContents={entry.component}
        />
    );
}

export default EntryResolver;