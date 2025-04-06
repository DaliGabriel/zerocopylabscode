
import { AlertCircle } from 'lucide-react';
import React from 'react';

const ErrorAlert = ({ error }) => {
    if (!error) return null;

    return (
        <div
            className="flex items-start gap-2 bg-red-100 border border-red-300 text-red-800 text-sm rounded-lg p-3 mb-4"
            role="alert"
        >
            <AlertCircle className="w-5 h-5 mt-0.5" />
            <span className='mt-1'>{error}</span>
        </div>
    );
};

export default ErrorAlert;