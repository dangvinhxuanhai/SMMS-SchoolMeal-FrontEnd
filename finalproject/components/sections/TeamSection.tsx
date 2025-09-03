import React from 'react';
import { TeamSectionProps, TeamMember } from '@/components/types';

const TeamSection: React.FC<TeamSectionProps> = ({ teamMembers }) => {
  return (
    <section id="about" className="py-16">
      <h2 className="text-5xl font-bold text-orange-900 mb-4 text-center drop-shadow-md">
        Những Người Bạn Của Bé
      </h2>
      <p className="text-xl text-orange-800 mb-12 text-center">
        Luôn yêu thương và chăm sóc cho từng bữa ăn của các con
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {teamMembers.map((member: TeamMember, index: number) => (
          <div 
            key={index}
            className="text-center bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-3xl shadow-xl border-4 border-orange-200 hover:transform hover:-translate-y-3 hover:shadow-2xl transition-all duration-300"
          >
            <div 
              className="w-32 h-32 mx-auto mb-5 text-7xl leading-32 rounded-full bg-gradient-to-br from-orange-200 to-orange-300 shadow-xl border-4 border-orange-400 flex items-center justify-center"
              role="img" 
              aria-label={member.title}
            >
              {member.avatar}
            </div>
            <h4 className="text-2xl font-bold text-orange-900 mb-3">
              {member.title}
            </h4>
            <p className="text-orange-800">
              {member.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;