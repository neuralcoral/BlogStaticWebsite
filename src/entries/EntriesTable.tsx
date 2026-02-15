import './EntriesTable.css'

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
        <ul className="entries">
            {
                entries.map(({title, component}, index) => (
                    <li key={index}>
                        <div className="entry-title" onClick={() => selectEntry(component)}>
                            {formatIndex(index)} - {title}
                        </div>
                    </li>
                )).reverse()
            }
        </ul>
    );
}

export default EntriesTable;