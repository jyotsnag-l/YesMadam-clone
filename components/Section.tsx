
import React from 'react';

interface SectionProps {
    title: string;
    subtitle?: string;
    children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, subtitle, children }) => {
    return (
        <section className="py-8 md:py-12">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-brand-dark">{title}</h2>
                    {subtitle && <p className="text-gray-600 mt-2">{subtitle}</p>}
                </div>
                {children}
            </div>
        </section>
    );
};

export default Section;
