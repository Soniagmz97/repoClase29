
interface OfferCardProps {
    title: string;
    company: string;
    location: string;
    isUrgent: boolean;
}

const OfferCard = ({ title, company, location, isUrgent }: OfferCardProps) => {
  return (
    <div className="bg-white p-5 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow flex justify-between items-center">
      <div>
        <h3 className="text-xl font-bold text-gray-800">
            {title}
        </h3>
        <p className="text-gray-500">{company}</p>
        
        <div className="flex gap-3 mt-3">
            {/* Conditionally render the location badge */}
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                location === 'Remote' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
            }`}>
                {location}
            </span>
            {/* Conditionally render the urgent badge */}
            {isUrgent && (
                <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">
                   🔥 Urgent
                </span>
            )}
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-medium transition-colors" onClick={()=> alert(`Applying for ${title} at ${company}`)}>
                Apply Now
            </button>
        </div>
      </div>
    </div>
  )
}

export default OfferCard