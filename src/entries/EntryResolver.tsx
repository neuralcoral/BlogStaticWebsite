import React, {useState} from "react";
import EntriesTable from "./EntriesTable";
import EntryPage from "./EntryPage";
import Post000 from "../content/Post000";

export interface EntriesResolverProps {}
const EntryResolver:React.FC<EntriesResolverProps> = () => {
    const components = [
        { title: "My First Post", component: Post000},
    ];
    const [isShowTable, setIsShowTable] = useState(true);
    const [selectedEntry, setSelectedEntry] = useState<React.FC>();

    function selectEntry(entry: React.FC) {
        setIsShowTable(false);
        setSelectedEntry(() => entry);
    }
    return (
        <div>
            {
                isShowTable ? (
                    <EntriesTable
                        entries={components}
                        selectEntry={selectEntry}
                    />
                ) : (
                    <EntryPage
                        returnToTable={() => setIsShowTable(true)}
                        pageContents={selectedEntry}
                    />
                )
            }
        </div>
    );
}

export default EntryResolver;