'use client'

import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { Field, Label, Switch } from '@headlessui/react'

export default function ContactForm() {
  const [agreed, setAgreed] = useState(false)

  return (
    <div className="bg-white px-6 py-24 sm:py-32 lg:px-8 text-right font-vazir" dir="rtl">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">ارتباط با ما</h2>
        <p className="mt-2 text-lg text-gray-600">
          لطفاً اطلاعات خود را وارد کنید. همکاران ما در اسرع وقت با شما تماس خواهند گرفت.
        </p>
      </div>

      <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm font-semibold text-gray-900">
              نام
            </label>
            <div className="mt-2.5">
              <input
                id="first-name"
                name="first-name"
                type="text"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                placeholder="مثلاً علی"
              />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold text-gray-900">
              نام خانوادگی
            </label>
            <div className="mt-2.5">
              <input
                id="last-name"
                name="last-name"
                type="text"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600"
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
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                placeholder="مثلاً یاران قرآن"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-900">
              ایمیل
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                placeholder="example@email.com"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-sm font-semibold text-gray-900">
              شماره تماس
            </label>
            <div className="mt-2.5">
              <input
                id="phone-number"
                name="phone-number"
                type="text"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                placeholder="09123456789"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold text-gray-900">
              پیام شما
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600"
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
              با ارسال این فرم، <a href="#" className="font-semibold text-indigo-600">قوانین و حریم خصوصی</a> را می‌پذیرم.
            </Label>
          </Field>
        </div>

        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          >
            ارسال پیام
          </button>
        </div>
      </form>
    </div>
  )
}
