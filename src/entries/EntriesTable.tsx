import './EntriesTable.css'

export interface EntriesTableProps {
    entries: {title: string, component: React.FC}[],
    selectEntry: (id: string) => void // Better typing than 'Function'
}

const EntriesTable: React.FC<EntriesTableProps> = ({entries, selectEntry}) => {
    const numDigits = entries.length > 0 ? Math.max(2, Math.ceil(Math.log10(entries.length))) : 2;

    const formatIndex = (index: number) => {
        return index.toString().padStart(numDigits, '0');
    };

    return (
        <ul className="entries">
            {
                entries.map(({title}, index) => {
                    const id = formatIndex(index);
                    return (
                        <li key={index}>
                            {/* Pass 'id' (e.g. "001") instead of 'component' */}
                            <div className="entry-title" onClick={() => selectEntry(id)}>
                                {id} - {title}
                            </div>
                        </li>
                    );
                }).reverse()
            }
        </ul>
    );
}

export default EntriesTable;