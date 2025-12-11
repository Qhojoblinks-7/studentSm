import React from 'react';
import { Button } from '@/components/ui/button';

const ActionButtons = ({ onCancel, confirmed, formik }) => (
  <div className="flex justify-end gap-4">
    <Button variant="destructive" className="px-4 py-2 rounded-full bg-red-600 text-white hover:bg-red-700" onClick={onCancel}>
      Cancel
    </Button>
    <Button
      type="submit"
      disabled={!confirmed}
      className={`px-4 py-2 rounded-full ${
        confirmed
          ? "bg-blue-600 text-white hover:bg-blue-700"
          : "bg-blue-200 text-white cursor-not-allowed"
      }`}
    >
      Confirm Payment
    </Button>
  </div>
);

export default ActionButtons;