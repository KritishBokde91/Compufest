import React from 'react';

const timelineEvents = [
    {
        date: "22/08/2025",
        title: "Ultron Challenge",
        description: "The ultimate test of your coding abilities. Can you build something before Ultron awakens?",
    },
    {
        date: "22/08/2025",
        title: "Vision Image-Net",
        description: "Join us for a hackathon where you'll build AI models to recognize and classify images, just like Vision.",
    },
    {
        date: "22/08/2025",
        title: "Prompt-A-Thon",
        description: "Join us for a hackathon where you'll create websites/application using AI tools.",
    },
    {
        date: "22/08/2025",
        title: "Versus Coding",
        description: "Compete against the best coders in a timed challenge. Can you outsmart your opponents?",
    },
    {
        date: "22/08/2025",
        title: "Scripted Secret",
        description: "Uncover hidden secrets and vulnerabilities in a simulated environment. Can you find the flag?",
    },
    {
        date: "22/08/2025",
        title: "Fastest Coding First",
        description: "Compete against the best coders in a timeed challenge. Can you outsmart your opponents?",
    },
    {
        date: "22/08/2025",
        title: "Expert Session",
        description: "Join industry experts as they share their knowledge and insights in this interactive workshop.",
    }
];

const TimelineItem = ({ event, isLeft }) => {
    const contentContainerBase = "w-full pl-12 md:w-1/2 py-2";

    const alignmentClasses = isLeft
        ? "md:text-right md:pr-8"
        : "md:ml-auto md:text-left md:pl-8";

    return (
        <div className="relative flex">
            <div className="absolute left-5 -translate-x-1/2 md:left-1/2 mt-1.5 w-4 h-4 bg-red-500 rounded-full z-10 border-4 border-gray-900"></div>
            <div className={`${contentContainerBase} ${alignmentClasses}`}>
                <div className="bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-red-500/20 transition-shadow duration-300">
                    <p className="text-sm font-mono text-gray-400 mb-1">{event.date}</p>
                    <h3 className="avenger text-xl tracking-widest text-white">{event.title}</h3>
                    <p className="text-sm mt-2 font-mono text-gray-300">{event.description}</p>
                </div>
            </div>
        </div>
    );
};

export default function App() {
    return (
        <div className="min-h-screen font-sans flex items-center justify-center p-4 sm:p-6 lg:p-8">
            <div className="w-full max-w-4xl mx-auto">
                <h1 className="avenger text-3xl md:text-4xl text-center mb-12 text-gray-100 font-extralight tracking-wider">
                    Events Timeline
                </h1>
                <div className="relative">
                    <div className="absolute left-5 md:left-1/2 -translate-x-1/2 h-full w-0.5 bg-gray-600"></div>
                    <div className="space-y-8 md:space-y-10">
                        {timelineEvents.map((event, index) => (
                            <TimelineItem
                                key={index}
                                event={event}
                                isLeft={index % 2 === 0}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
