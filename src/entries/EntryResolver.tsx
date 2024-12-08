import React, {useState} from "react";
import EntriesTable from "./EntriesTable";
import EntryPage from "./EntryPage";

export interface EntriesResolverProps {}
const EntryResolver:React.FC<EntriesResolverProps> = () => {
    const components = [
        { title: "Hello", component: () => <h1>01 - hello</h1> },
        { title: "Goodbye", component: () => <h1>02 - goodbye</h1> },
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