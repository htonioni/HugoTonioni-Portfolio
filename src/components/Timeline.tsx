import React from 'react';

interface TimelineItem {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies?: string[];
  type: 'work' | 'education' | 'certification';
}

interface TimelineProps {
  items: TimelineItem[];
}

export const Timeline: React.FC<TimelineProps> = ({ items }) => {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'work':
        return '💼';
      case 'education':
        return '🎓';
      case 'certification':
        return '📜';
      default:
        return '📌';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'work':
        return 'bg-blue-500';
      case 'education':
        return 'bg-green-500';
      case 'certification':
        return 'bg-purple-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500"></div>

      {/* Timeline Items */}
      <div className="space-y-8">
        {items.map((item, index) => (
          <div key={index} className="relative flex items-start gap-6 md:gap-8">
            {/* Timeline Dot */}
            <div className={`relative z-10 flex items-center justify-center w-8 h-8 rounded-full ${getTypeColor(item.type)} text-white font-bold text-sm flex-shrink-0`}>
              <span className="text-xs">{getTypeIcon(item.type)}</span>
            </div>

            {/* Content */}
            <div className="flex-1 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl transition-shadow duration-300">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {item.title}
                  </h3>
                  <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
                    {item.company}
                  </h4>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium">
                    {item.period}
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="mb-4">
                <ul className="space-y-2">
                  {item.description.map((desc, descIndex) => (
                    <li key={descIndex} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                      <span className="text-blue-500 mt-1.5 text-xs">•</span>
                      <span className="text-sm leading-relaxed">{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              {item.technologies && item.technologies.length > 0 && (
                <div>
                  <h5 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    Technologies:
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};