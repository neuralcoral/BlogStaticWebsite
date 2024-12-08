
export interface EntriesTableProps {
    entries: {title: string, component: React.FC}[],
    selectEntry: Function
}

const EntriesTable: React.FC<EntriesTableProps> = ({entries, selectEntry}) => {
    const numDigits = entries.length > 0 ? Math.max(2, Math.ceil(Math.log10(entries.length))) : 2;
    const formatIndex = (index: number) => {
        return index.toString().padStart(numDigits, '0');
    };
    return (
        <ul className="Entries">
            {
                entries.map(({title, component}, index) => (
                    <li key={index}>
                        <button onClick={() => selectEntry(component)}>
                            {formatIndex(index)} - {title}
                        </button>
                    </li>
                ))
            }
        </ul>
    );
}

export default EntriesTable;