import React from 'react';
import { Smartphone } from 'lucide-react';
import { Field, ErrorMessage } from 'formik';
import { Button } from '@/components/ui/button';

const MobileMoneyForm = ({ method, onMethodChange }) => (
  <div className={`space-y-4 text-left ${method !== "mobile" ? "opacity-50" : ""}`}>
    <Button
      onClick={() => onMethodChange("mobile")}
      variant={method === "mobile" ? "default" : "secondary"}
      className={`flex items-center gap-2 px-4 py-2 rounded-full border mb-4 ${
        method === "mobile"
          ? "bg-blue-500 text-white hover:bg-blue-600"
          : "bg-blue-200 text-white hover:bg-blue-300"
      }`}
    >
      <Smartphone className="w-4 h-4" />
      Mobile Money
    </Button>
    <h2 className="text-lg font-semibold text-slate-700 text-left">
      Mobile Money Details
    </h2>
    <div className="space-y-1">
      <div className="space-y-1">
        <label className="text-sm text-slate-600 block">Mobile Number</label>
        <Field
          name="mobile"
          as="input"
          type="text"
          placeholder="053 **********"
          className="w-3/4 border-0 border-b-2 border-slate-500 p-2 text-left"
        />
        <ErrorMessage name="mobile" component="div" className="text-red-500 text-sm" />
      </div>
    </div>
  </div>
);

export default MobileMoneyForm;