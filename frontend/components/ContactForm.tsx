'use client'

import { useState } from 'react'
import { Field, Label, Switch } from '@headlessui/react'

export default function ContactForm() {
  const [agreed, setAgreed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState({ type: '', text: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!agreed) {
      setMessage({ type: 'error', text: 'لطفاً قوانین را تأیید کنید' })
      return
    }

    setIsLoading(true)
    setMessage({ type: '', text: '' })

    const formData = {
      firstName: (e.target as any)['first-name'].value,
      lastName: (e.target as any)['last-name'].value,
      company: (e.target as any).company.value || '',
      email: (e.target as any).email.value,
      phone: (e.target as any)['phone-number'].value,
      message: (e.target as any).message.value,
    }

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setMessage({ 
          type: 'success', 
          text: 'پیام شما با موفقیت ارسال شد! به زودی با شما تماس خواهیم گرفت.' 
        })
        // ریست فرم
        ;(e.target as HTMLFormElement).reset()
        setAgreed(false)
      } else {
        throw new Error(data.error || 'خطا در ارسال پیام')
      }
    } catch (error) {
      console.error('Error:', error)
      setMessage({ 
        type: 'error', 
        text: 'متأسفانه در ارسال پیام مشکلی پیش آمد. لطفاً دوباره تلاش کنید.' 
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="bg-white px-6 py-24 sm:py-32 lg:px-8 text-right font-vazir" dir="rtl">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">ارتباط با ما</h2>
        <p className="mt-2 text-lg text-gray-600">
          لطفاً اطلاعات خود را وارد کنید. همکاران ما در اسرع وقت با شما تماس خواهند گرفت.
        </p>
      </div>

      {/* نمایش پیام‌های وضعیت */}
      {message.text && (
        <div className={`mx-auto mt-8 max-w-xl p-4 rounded-md ${
          message.type === 'success' 
            ? 'bg-green-50 text-green-800 border border-green-200' 
            : 'bg-red-50 text-red-800 border border-red-200'
        }`}>
          <div className="flex items-center">
            {message.type === 'success' ? (
              <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            )}
            {message.text}
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm font-semibold text-gray-900">
              نام *
            </label>
            <div className="mt-2.5">
              <input
                id="first-name"
                name="first-name"
                type="text"
                required
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition duration-200"
                placeholder="مثلاً علی"
              />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold text-gray-900">
              نام خانوادگی *
            </label>
            <div className="mt-2.5">
              <input
                id="last-name"
                name="last-name"
                type="text"
                required
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition duration-200"
                placeholder="مثلاً محمدی"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-sm font-semibold text-gray-900">
              نام مؤسسه یا سازمان (اختیاری)
            </label>
            <div className="mt-2.5">
              <input
                id="company"
                name="company"
                type="text"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition duration-200"
                placeholder="مثلاً یاران قرآن"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-900">
              ایمیل *
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                required
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition duration-200"
                placeholder="example@email.com"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-sm font-semibold text-gray-900">
              شماره تماس *
            </label>
            <div className="mt-2.5">
              <input
                id="phone-number"
                name="phone-number"
                type="tel"
                required
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition duration-200"
                placeholder="09123456789"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold text-gray-900">
              پیام شما *
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition duration-200"
                placeholder="لطفاً پیام خود را وارد کنید..."
              />
            </div>
          </div>

          <Field className="flex gap-x-4 items-center sm:col-span-2">
            <Switch
              checked={agreed}
              onChange={setAgreed}
              className="group flex w-10 cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-gray-900/5 transition-colors duration-200 ease-in-out data-[checked]:bg-indigo-600"
            >
              <span className="sr-only">تایید قوانین</span>
              <span
                aria-hidden="true"
                className="size-4 transform rounded-full bg-white shadow-xs ring-1 ring-gray-900/5 transition duration-200 ease-in-out group-data-[checked]:translate-x-4"
              />
            </Switch>
            <Label className="text-sm text-gray-600">
              با ارسال این فرم، <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">قوانین و حریم خصوصی</a> را می‌پذیرم.
            </Label>
          </Field>
        </div>

        <div className="mt-10">
          <button
            type="submit"
            disabled={isLoading}
            className="block w-full rounded-md bg-indigo-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 disabled:bg-gray-400 disabled:cursor-not-allowed transition duration-200 transform hover:scale-[1.02] disabled:scale-100"
          >
            {isLoading ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                در حال ارسال...
              </div>
            ) : (
              'ارسال پیام'
            )}
          </button>
        </div>
      </form>
    </div>
  )
}