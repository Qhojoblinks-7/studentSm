import React from 'react';
import { Checkbox } from '@/components/ui/checkbox';

const ConfirmationSection = ({ confirmed, onConfirmChange }) => (
  <div className="space-y-2">
    <div className="flex items-start gap-2 text-sm text-slate-700">
      <Checkbox
        checked={confirmed}
        onCheckedChange={onConfirmChange}
        className="mt-1"
      />
      <label>
        YOU ARE ABOUT TO MAKE PAYMENT. ARE YOU SURE OF THE DETAILS?
        <br />
        <span className="text-red-500 font-semibold">
          Money paid is non-refundable
        </span>
      </label>
    </div>
  </div>
);

export default ConfirmationSection;