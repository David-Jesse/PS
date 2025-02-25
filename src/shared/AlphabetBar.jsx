

// eslint-disable-next-line react/prop-types
const AlphabetBar = ({currentRange}) => {
    const ranges = [
        {id: 'a-e', label: 'A-E'},
        {id: 'f-j', label: 'F-J'},
        {id: 'l-p', label: 'L-P'},
        {id: 'q-u', label: 'Q-U'},
        {id: 'v-z', label: 'V-Z'},
    ];
  return (
    <div className="relative">
        <div className="flex justify-between bg-light-blue px-6 py-3">
            {ranges.map((range) => (
                <span
                    key={range.id}
                    className={`text-blue-50 ${currentRange === range.id ? 'font-semibold' : ''}`}
                >
                    {range.label}
                </span>
            ))}
        </div>

        {/* Tab-Indicator */}
        <div className="relative h-1 bg-transparent">
            {currentRange && (
                <div
                    className="absolute h-1 bg-blue-50 transition-all duration-300 ease-in-out"
                    style={{
                        width: '20%',
                        left: ranges.findIndex(r => r.id === currentRange) * 20 + '%',
                    }}
                />
            )}
        </div>
    </div>
  )
}

export default AlphabetBar
