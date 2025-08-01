function EventCard ({ event }) {
  return (
    <div className={`bg-gray-800 bg-opacity-40 border ${event.theme.borderColor} rounded-lg p-6 flex flex-col justify-between text-gray-300 inset-shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300`}>
      <div>
        {/* Card Header */}
        <div className="flex justify-between items-start mb-4">
          <span className={`border ${event.theme.borderColor} text-${event.theme.color} text-xs font-bold px-3 py-1 rounded-full`}>
            {event.category}
          </span>
          <div className={`text-${event.theme.color}`}>
            {event.icon}
          </div>
        </div>

        {/* Card Body */}
        <h2 className="avenger text-2xl font-extralight text-white mb-1 space-x-10">{event.title}</h2>
        <p className="avenger text-gray-400 font-extralight mb-4">{event.subtitle}</p>
        <p className="text-gray-400 text-sm mb-6 h-20 font-mono">{event.description}</p>
        
        {/* Details Section */}
        <div className="space-y-3 text-sm">
          <div className="flex items-center">
            <span className="w-6 mr-2 text-gray-500">🗓️</span>
            <p><strong>Difficulty:</strong> <span className={`font-bold text-${event.theme.color}`}>{event.difficulty}</span></p>
          </div>
          <div className="flex items-center">
            <span className="w-6 mr-2 text-gray-500">👥</span>
            <p><strong>Agents:</strong> {event.agents}</p>
          </div>
          <div className="flex items-center">
            <span className="w-6 mr-2 text-gray-500">🏆</span>
            <p><strong>Reward:</strong> {event.reward}</p>
          </div>
        </div>
      </div>

      {/* Card Footer Button */}
      <button className={`avenger font-extralight mt-8 w-full bg-gradient-to-r ${event.theme.gradientFrom} ${event.theme.gradientTo} text-white font-bold py-3 rounded-lg hover:opacity-90 transition-opacity duration-300`}>
        <span className="mr-2"> ACCEPT</span> MISSION
      </button>
    </div>
  );
};

export default EventCard;