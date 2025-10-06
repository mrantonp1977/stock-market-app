'use client';



import { CountrySelectField } from '@/components/forms/CountrySelectField';
import InputField from '@/components/forms/InputField';
import SelectField from '@/components/forms/SelectField';
import { Button } from '@/components/ui/button';
import { INVESTMENT_GOALS, PREFERRED_INDUSTRIES, RISK_TOLERANCE_OPTIONS } from '@/lib/constants';
import React from 'react';
import { useForm } from 'react-hook-form';

function SignUp() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      country: 'US',
      investmentGoals: 'Growth',
      riskTolerance: 'Medium',
      preferredIndustry: 'Technology',
    },
    mode: 'onBlur',
  });

  const onSubmit = async (data: SignUpFormData) => {
    try {
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1 className="form-title">Sign Up & Personalize</h1>
      <form action="" onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <InputField 
          name="fullName"
          label="Full Name"
          placeholder="John Doe"
          register={register}
          error={errors.fullName}
          validation={{ required: 'Full Name is required', minLength: { value: 2, message: 'Full Name must be at least 2 characters' } }}
        />
        <InputField 
          name="email"
          type='email'
          label="Email Address"
          placeholder="contact@example.com"
          register={register}
          error={errors.email}
          validation={{ required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } }}
        />
        <InputField 
          name="password"
          type='password'
          label="Password"
          placeholder='Enter your password'
          register={register}
          error={errors.password}
          validation={{ required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters' } }}
        />
        <CountrySelectField
          name="country"
          label="Country"
          control={control}
          error={errors.country}
          required
        />
        <SelectField 
          name="investmentGoals"
          label="Investment Goals"
          placeholder="Select your investment goals"
          options={INVESTMENT_GOALS}
          control={control}
          error={errors.investmentGoals}
          required
        />
        <SelectField 
          name="riskTolerance"
          label="Risk Tolerance"
          placeholder="Select your risk tolerance"
          options={RISK_TOLERANCE_OPTIONS}
          control={control}
          error={errors.riskTolerance}
          required
        />
        <SelectField 
          name="preferredIndustry"
          label="Preferred Industry"
          placeholder="Select your preferred industry"
          options={PREFERRED_INDUSTRIES}
          control={control}
          error={errors.preferredIndustry}
          required
        />
      <Button type="submit" className="yellow-btn w-full mt-8" disabled={isSubmitting}>
        {isSubmitting ? 'Creating Account...' : 'Start Your Investing Journey'}
      </Button>
      </form>
    </>
  );
}

export default SignUp;
