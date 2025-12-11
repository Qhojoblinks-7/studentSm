import React from 'react';
import { CreditCard } from 'lucide-react';
import { Field, ErrorMessage } from 'formik';
import { Button } from '@/components/ui/button';

const CardDetailsForm = ({ method, onMethodChange }) => (
  <div className={`space-y-4 ${method !== "card" ? "opacity-50" : ""}`}>
    <Button
      onClick={() => onMethodChange("card")}
      variant={method === "card" ? "default" : "secondary"}
      className={`flex items-center gap-2 px-4 py-2 rounded-full border mb-4 ${
        method === "card"
          ? "bg-blue-500 text-white hover:bg-blue-600"
          : "bg-blue-200 text-white hover:bg-blue-300"
      }`}
    >
      <CreditCard className="w-4 h-4" />
      Credit Card
    </Button>
    <h2 className="text-lg font-semibold text-slate-700 text-left">
      Credit Card Details
    </h2>
    <div className="space-y-1">
      <label className="text-sm text-slate-600 block">Card Number</label>
      <Field
        name="cardNumber"
        as="input"
        type="text"
        placeholder="642 ******** **** **** VISA"
        className="w-3/4 border-0 border-b-2 border-slate-500 p-2 text-left"
      />
      <ErrorMessage name="cardNumber" component="div" className="text-red-500 text-sm" />
    </div>
    <div className="space-y-1">
      <div className="flex gap-24">
        <label className="text-sm text-slate-600">Valid thru</label>
        <label className="text-sm text-slate-600">CVV</label>
      </div>
      <div className="flex gap-4">
        <div className="flex gap-2">
          <div>
            <Field
              name="mm"
              as="input"
              type="text"
              placeholder="MM"
              className="w-12 border-0 border-b-2 border-slate-500 p-2 text-left"
            />
            <ErrorMessage name="mm" component="div" className="text-red-500 text-sm" />
          </div>
          <div>
            <Field
              name="yy"
              as="input"
              type="text"
              placeholder="YY"
              className="w-12 border-0 border-b-2 border-slate-500 p-2 text-left"
            />
            <ErrorMessage name="yy" component="div" className="text-red-500 text-sm" />
          </div>
        </div>
        <div>
          <Field
            name="cvv"
            as="input"
            type="text"
            placeholder="****"
            className="w-1/4 border-0 ml-8 border-b-2 border-slate-500 p-2 text-left"
          />
          <ErrorMessage name="cvv" component="div" className="text-red-500 text-sm" />
        </div>
      </div>
    </div>
    <div className="flex gap-14">
      <div className="space-y-1">
        <label className="flex mt-10 items-center gap-2 text-sm text-slate-700">
          Card holder's name
        </label>
        <div className="space-y-1">
          <label className="flex mt-10 items-center gap-2 text-sm text-slate-700">
            Card holder's name
          </label>
          <Field
            name="cardHolder"
            as="input"
            type="text"
            placeholder="Card holder's name"
            className="w-100 border-0 border-b-2 border-slate-500 p-2 text-left"
          />
          <ErrorMessage name="cardHolder" component="div" className="text-red-500 text-sm" />
        </div>
      </div>
    </div>
  </div>
);

export default CardDetailsForm;