import React from 'react';

const ResultField = ({ label, value, large = false }) => (
    <div className={`flex flex-col ${large ? 'col-span-3' : 'col-span-1'}`}>
        <p className="text-xs sm:text-sm lg:text-base font-semibold text-slate-700">{label}</p>
        <div className="w-full h-6 sm:h-7 lg:h-8 border-b border-green-300 flex items-center">
            <span className="text-xs sm:text-sm lg:text-base text-slate-900">{value}</span>
        </div>
    </div>
);

export default ResultField;