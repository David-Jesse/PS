/* eslint-disable react/prop-types */
import { ChevronDown } from "lucide-react"


const GlossaryItem = ({title, isOpen, onClick}) => {
  return (
    <div className="mb-4 last:mb-0">
      <button
        onClick={onClick}
        className="w-full max-w-2xl py-4 px-6 flex justify-between items-center bg-sky-blue hover:bg-gray-100 rounded-lg transition-colors duration-200 border border-gray-200"
      >
        <span className="text-left font-medium text-gray-700">{title}</span>
        <ChevronDown 
            className={`w-5 h-5 text-blue-50 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div className="px-6 py-4 mt-2 bg-white rounded-lg border border-gray-200">
            <p className="text-blue-50">{title}</p>
        </div>
      )}
    </div>
  )
}

export default GlossaryItem
