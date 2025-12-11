import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { setMethod, setConfirmed } from '../../store/feesPaymentsSlice';
import CardDetailsForm from './components/CardDetailsForm';
import MobileMoneyForm from './components/MobileMoneyForm';
import ConfirmationSection from './components/ConfirmationSection';
import ActionButtons from './components/ActionButtons';

const FeesPayments = ({ onCancel }) => {
  const { method, confirmed } = useSelector(state => state.feesPayments);
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    cardNumber: Yup.string().required('Card number is required'),
    mm: Yup.string().required('Month is required'),
    yy: Yup.string().required('Yeah is required'),
    cvv: Yup.string().required('CVV is required'),
    cardHolder: Yup.string().required('Card holder name is required'),
    mobile: Yup.string().required('Mobile number is required'),
  });

  const onSubmit = (values) => {
    console.log(values);
    // Handle form submission
  };

  return (
    <Formik
      initialValues={{
        cardNumber: '',
        mm: '',
        yy: '',
        cvv: '',
        cardHolder: '',
        mobile: '',
      }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {formik => (
        <form onSubmit={formik.handleSubmit}>
        <div className=" p-6 font-sans flex justify-center pt-10">
          <div className="max-w-4xl w-full bg-white rounded-xl shadow-lg p-6 space-y-6">
            <h1 className="text-2xl pl-10 font-bold text-slate-800">Fees and Payments</h1>

            {/* Payment Details Side by Side */}
            <div className="grid pl-10 grid-cols-2 gap-6">
              <CardDetailsForm method={method} onMethodChange={(method) => dispatch(setMethod(method))} />
              <MobileMoneyForm method={method} onMethodChange={(method) => dispatch(setMethod(method))} />
            </div>


        {/* Confirmation Checkbox */}
        <ConfirmationSection confirmed={confirmed} onConfirmChange={(confirmed) => dispatch(setConfirmed(confirmed))} />

        {/* Action Buttons */}
        <ActionButtons onCancel={onCancel} confirmed={confirmed} />
      </div>
      </div>
      </form>
    )}
  </Formik>
  );
};

export default FeesPayments;



