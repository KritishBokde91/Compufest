import React from 'react'
import EventCard from './EventCard';
import EventTimeLine from './EventTimeLine';
// import EventTimeline from './EventTimeLine';

function Event() {
  const eventsData = [
    {
      id: 1,
      category: 'HACKATHON',
      title: "Hackathon: Ultron's Challenge",
      subtitle: '8-Hour Hackathon Challenge',
      description: 'The ultimate test of your coding abilities. Can you build something before Ultron awakens?',
      difficulty: 'MAXIMUM THREAT',
      agents: 'Team of 3-5',
      reward: '₹20,000',
      theme: {
        color: '#e23636',
        gradientFrom: 'from-[#e23636]',
        gradientTo: 'to-[#b71c1c]',
        borderColor: 'border-[#e23636]',
      },
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#e23636]" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="#e23636" strokeWidth="2" fill="#222" />
          <ellipse cx="9" cy="10" rx="1" ry="2" fill="#e23636" />
          <ellipse cx="15" cy="10" rx="1" ry="2" fill="#e23636" />
          <path d="M8 16c1.5 1 6.5 1 8 0" stroke="#e23636" strokeWidth="1.5" />
        </svg>
      )
    },
    {
      id: 2,
      category: 'Hackathon',
      title: 'Vision Image-Net',
      subtitle: 'Showcase your AI & ML expertise',
      description: "Join us for a hackathon where you'll build AI models to recognize and classify images, just like Vision.",
      difficulty: 'Medium',
      agents: 'Team of 1-3',
      reward: '₹1,000',
      theme: {
        color: '#ffe066',
        gradientFrom: 'from-[#ffe066]',
        gradientTo: 'to-[#e23636]',
        borderColor: 'border-[#ffe066]',
      },
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#ffe066]" viewBox="0 0 24 24" fill="none">
          <ellipse cx="12" cy="12" rx="7" ry="10" fill="#ffe066" stroke="#e23636" strokeWidth="2" />
          <circle cx="12" cy="12" r="3" fill="#e23636" />
        </svg>
      )
    },
    {
      id: 3,
      category: 'Hackathon',
      title: 'Prompt-a-Thon',
      subtitle: 'Master the Art of Prompt Engineering',
      description: "Join us for a hackathon where you'll create websites/applications using AI tools.",
      difficulty: 'Easy',
      agents: 'Individual',
      reward: '₹3000',
      theme: {
        color: '#8e44ad',
        gradientFrom: 'from-[#8e44ad]',
        gradientTo: 'to-[#e23636]',
        borderColor: 'border-[#8e44ad]',
      },
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#8e44ad]" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" stroke="#8e44ad" strokeWidth="2" fill="none" />
          <path d="M12 3v18M3 12h18" stroke="#e23636" strokeWidth="1.5" />
        </svg>
      )
    },
    {
      id: 4,
      category: 'Competition',
      title: 'Versus Coding',
      subtitle: 'Battle of the Coders',
      description: 'Compete against the best coders in a timed challenge. Can you outsmart your opponents?',
      difficulty: 'Medium',
      agents: 'Individual',
      reward: '₹3250',
      theme: {
        color: '#222',
        gradientFrom: 'from-[#222]',
        gradientTo: 'to-[#e23636]',
        borderColor: 'border-[#222]',
      },
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#e23636]" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="#e23636" strokeWidth="2" fill="#fff" />
          <circle cx="12" cy="12" r="6" stroke="#222" strokeWidth="2" fill="#e23636" />
          <circle cx="12" cy="12" r="2" fill="#fff" />
        </svg>
      )
    },
    {
      id: 5,
      category: 'Hackathon',
      title: 'Scripted Secrets',
      subtitle: 'Capture the Flag',
      description: 'Uncover hidden secrets and vulnerabilities in a simulated environment. Can you find the flag?',
      difficulty: 'Medium',
      agents: 'Team of 2-5',
      reward: '₹1500',
      theme: {
        color: '#e23636',
        gradientFrom: 'from-[#e23636]',
        gradientTo: 'to-[#222]',
        borderColor: 'border-[#e23636]',
      },
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#e23636]" viewBox="0 0 24 24" fill="none">
          <rect x="8" y="4" width="8" height="16" rx="4" stroke="#e23636" strokeWidth="2" fill="#222" />
          <polygon points="12,8 16,12 12,16 8,12" fill="#e23636" />
        </svg>
      )
    },
    {
      id: 6,
      category: 'Hackathon',
      title: 'Fastest-Frontend-First',
      subtitle: 'Battle of the Coders',
      description: 'Compete against the best coders in a timed challenge. Can you outsmart your opponents?',
      difficulty: 'Easy',
      agents: 'Individual',
      reward: '₹1000',
      theme: {
        color: '#e23636',
        gradientFrom: 'from-[#e23636]',
        gradientTo: 'to-[#ffe066]',
        borderColor: 'border-[#e23636]',
      },
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#e23636]" viewBox="0 0 24 24" fill="none">
          <ellipse cx="12" cy="12" rx="7" ry="10" fill="#ffe066" stroke="#e23636" strokeWidth="2" />
          <rect x="9" y="8" width="2" height="2" fill="#222" />
          <rect x="13" y="8" width="2" height="2" fill="#222" />
          <path d="M9 16c1.5 1 4.5 1 6 0" stroke="#e23636" strokeWidth="1.5" />
        </svg>
      )
    },
    {
      id: 7,
      category: 'Workshop',
      title: 'Expert Session',
      subtitle: 'Learn from the Best',
      description: 'Join industry experts as they share their knowledge and insights in this interactive workshop.',
      difficulty: 'Easy',
      agents: 'Individual',
      reward: 'Certificate of Participation',
      theme: {
        color: '#e23636',
        gradientFrom: 'from-[#e23636]',
        gradientTo: 'to-[#8e44ad]',
        borderColor: 'border-[#e23636]',
      },
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#e23636]" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" stroke="#e23636" strokeWidth="2" fill="none" />
          <path d="M12 3v18M3 12h18M6 6l12 12M6 18l12-12" stroke="#e23636" strokeWidth="1" />
        </svg>
      )
    },
    {
      id: 8,
      category: 'Hackathon',
      title: 'Startup Hackathon',
      subtitle: 'Build the Next Big Thing',
      description: "Join us for a hackathon where you'll create innovative solutions to real-world problems.",
      difficulty: 'Difficult',
      agents: 'Team of 2-4',
      reward: '₹5000',
      theme: {
        color: '#e23636',
        gradientFrom: 'from-[#e23636]',
        gradientTo: 'to-[#222]',
        borderColor: 'border-[#e23636]',
      },
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#e23636]" viewBox="0 0 24 24" fill="none">
          <rect x="10" y="4" width="4" height="16" fill="#e23636" />
          <polygon points="10,4 12,2 14,4" fill="#222" />
        </svg>
      )
    }
  ];

  return (
    <div className='min-h-screen w-full font-sans p-4 sm:p-8 bg-[#e23636] opacity-90'>
      <div className="max-w-7xl mx-auto">
        <h1 className="avenger tracking-wide text-4xl md:text-5xl font-bold text-center text-white mb-12">Events</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventsData.map(event => (
            <EventCard key={event.id} event={event} />
          ))}     
        </div>
      </div>
      <div className='h-full w-full mt-12 p-8 rounded-lg'>
        <EventTimeLine />
      </div>
    </div>
  )
}

export default Event