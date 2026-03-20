"use client";
import React, { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import Link from "next/link";

type FormState = {
  errors: {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    date?: string;
    timeZone?: string;
    time?: string;
  };
};

const validateForm = async (
  prevState: FormState,
  formData: FormData,
): Promise<FormState> => {
  const errors: FormState["errors"] = {};

  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const date = formData.get("date") as string;
  const timeZone = formData.get("timeZone") as string;
  const time = formData.get("time") as string;

  if (!firstName?.trim()) errors.firstName = "First name is required";
  if (!lastName?.trim()) errors.lastName = "Last name is required";
  if (!email?.trim()) errors.email = "Email is required";
  if (!phone?.trim()) errors.phone = "Phone number is required";
  if (!date) errors.date = "Please select the Date";
  if (!timeZone) errors.timeZone = "Please select the time Zone";
  if (!time || time === "Select Time") errors.time = "Please select a time";

  return { errors };
};

const ConsultationForm = () => {
  const [state, formAction] = useActionState(validateForm, { errors: {} });
  return (
    <section className="py-10 px-4">
      <form action={formAction}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
          {/* col-1 */}
          <div>
           <div className="mt-8">
  <label className="font-medium">First Name</label>

  <Input
    name="firstName"
    type="text"
    placeholder="First Name"
    className="bg-[#EAEAEA] dark:bg-[#101010] font-medium px-5 py-5 w-full mt-4"
  />

  {state?.errors?.firstName && (
    <p className="text-red-500 text-sm mt-2">
      {state.errors.firstName}
    </p>
  )}
</div>
            <div className="mt-8">
              <label className="font-medium">Last Name</label>
              <Input
            
                name="lastName"
                type="text"
                placeholder="Last Name"
                className="bg-[#EAEAEA] px-5 py-5 dark:bg-[#101010]   font-medium w-full mt-4"
              />

              {state?.errors?.lastName && (
                <p className="text-red-500 text-sm mt-2">
                  {state.errors.lastName}
                </p>
              )}
            </div>

            <div className="mt-8">
              <label className="font-medium">Email Address</label>
              <Input
             
                name="email"
                type="email"
                placeholder="Email Address"
                className=" bg-[#EAEAEA]  font-medium px-5 py-5 w-full mt-4"
              />
              {state?.errors?.email && (
                <p className="text-red-500 text-sm mt-2">
                  {state.errors.email}
                </p>
              )}
            </div>

            <div className="mt-8">
              <label className="font-medium">Phone Number</label>
              <Input
            
                name="phone"
                type="tel"
                placeholder="Phone Number"
                className="bg-[#eaeaea]  font-medium px-5 py-5 w-full mt-4"
              />
              {state?.errors?.phone && (
                <p className="text-red-500 text-sm mt-2">
                  {state.errors.phone}
                </p>
              )}
            </div>
          </div>

          {/* col-2 */}
          <div>
            <div className="mt-8">
              <label className="font-medium">Select Date</label>
              <Input

                name="date"
                type="date"
                className=" px-5 py-5 bg-[#eaeaea]  font-medium w-full mt-4"
              />

              {state?.errors?.date && (
                <p className="text-red-500 text-sm mt-2">{state.errors.date}</p>
              )}
            </div>

            <div className="mt-8">
              <label className="font-medium">Select Time Zone</label>
              <Select name="timeZone">
                <SelectTrigger  className="w-full mt-4 bg-[#eaeaea] px-5 py-6">
                  <SelectValue
                    placeholder="Select time"
                    className="  font-medium"
                  />
                </SelectTrigger>

                <SelectContent side="bottom">
                  <SelectItem value="-12:00">
                    (GMT -12:00) Eniwetok, Kwajalein
                  </SelectItem>
                  <SelectItem value="-11:00">
                    (GMT -11:00) Midway Island, Samoa
                  </SelectItem>
                  <SelectItem value="-10:00">(GMT -10:00) Hawaii</SelectItem>
                  <SelectItem value="-09:50">(GMT -9:30) Taiohae</SelectItem>
                  <SelectItem value="-09:00">(GMT -9:00) Alaska</SelectItem>
                  <SelectItem value="-08:00">
                    (GMT -8:00) Pacific Time (US &amp; Canada)
                  </SelectItem>
                  <SelectItem value="-07:00">
                    (GMT -7:00) Mountain Time (US &amp; Canada)
                  </SelectItem>
                  <SelectItem value="-06:00">
                    (GMT -6:00) Central Time (US &amp; Canada), Mexico City
                  </SelectItem>
                  <SelectItem value="-05:00">
                    (GMT -5:00) Eastern Time (US &amp; Canada), Bogota, Lima
                  </SelectItem>
                  <SelectItem value="-04:50">(GMT -4:30) Caracas</SelectItem>
                  <SelectItem value="-04:00">
                    (GMT -4:00) Atlantic Time (Canada), Caracas, La Paz
                  </SelectItem>
                  <SelectItem value="-03:50">
                    (GMT -3:30) Newfoundland
                  </SelectItem>
                  <SelectItem value="-03:00">
                    (GMT -3:00) Brazil, Buenos Aires, Georgetown
                  </SelectItem>
                  <SelectItem value="-02:00">
                    (GMT -2:00) Mid-Atlantic
                  </SelectItem>
                  <SelectItem value="-01:00">
                    (GMT -1:00) Azores, Cape Verde Islands
                  </SelectItem>
                  <SelectItem value="+00:00">
                    (GMT) Western Europe Time, London, Lisbon, Casablanca
                  </SelectItem>
                  <SelectItem value="+01:00">
                    (GMT +1:00) Brussels, Copenhagen, Madrid, Paris
                  </SelectItem>
                  <SelectItem value="+02:00">
                    (GMT +2:00) Kaliningrad, South Africa
                  </SelectItem>
                  <SelectItem value="+03:00">
                    (GMT +3:00) Baghdad, Riyadh, Moscow, St. Petersburg
                  </SelectItem>
                  <SelectItem value="+03:50">(GMT +3:30) Tehran</SelectItem>
                  <SelectItem value="+04:00">
                    (GMT +4:00) Abu Dhabi, Muscat, Baku, Tbilisi
                  </SelectItem>
                  <SelectItem value="+04:50">(GMT +4:30) Kabul</SelectItem>
                  <SelectItem value="+05:00">
                    (GMT +5:00) Ekaterinburg, Islamabad, Karachi, Tashkent
                  </SelectItem>
                  <SelectItem value="+05:50">
                    (GMT +5:30) Bombay, Calcutta, Madras, New Delhi
                  </SelectItem>
                  <SelectItem value="+05:75">
                    (GMT +5:45) Kathmandu, Pokhara
                  </SelectItem>
                  <SelectItem value="+06:00">
                    (GMT +6:00) Almaty, Dhaka, Colombo
                  </SelectItem>
                  <SelectItem value="+06:50">
                    (GMT +6:30) Yangon, Mandalay
                  </SelectItem>
                  <SelectItem value="+07:00">
                    (GMT +7:00) Bangkok, Hanoi, Jakarta
                  </SelectItem>
                  <SelectItem value="+08:00">
                    (GMT +8:00) Beijing, Perth, Singapore, Hong Kong
                  </SelectItem>
                  <SelectItem value="+08:75">(GMT +8:45) Eucla</SelectItem>
                  <SelectItem value="+09:00">
                    (GMT +9:00) Tokyo, Seoul, Osaka, Sapporo, Yakutsk
                  </SelectItem>
                  <SelectItem value="+09:50">
                    (GMT +9:30) Adelaide, Darwin
                  </SelectItem>
                  <SelectItem value="+10:00">
                    (GMT +10:00) Eastern Australia, Guam, Vladivostok
                  </SelectItem>
                  <SelectItem value="+10:50">
                    (GMT +10:30) Lord Howe Island
                  </SelectItem>
                  <SelectItem value="+11:00">
                    (GMT +11:00) Magadan, Solomon Islands, New Caledonia
                  </SelectItem>
                  <SelectItem value="+11:50">
                    (GMT +11:30) Norfolk Island
                  </SelectItem>
                  <SelectItem value="+12:00">
                    (GMT +12:00) Auckland, Wellington, Fiji, Kamchatka
                  </SelectItem>
                  <SelectItem value="+12:75">
                    (GMT +12:45) Chatham Islands
                  </SelectItem>
                  <SelectItem value="+13:00">
                    (GMT +13:00) Apia, Nukualofa
                  </SelectItem>
                  <SelectItem value="+14:00">
                    (GMT +14:00) Line Islands, Tokelau
                  </SelectItem>
                </SelectContent>
              </Select>
              {state?.errors?.timeZone && (
                <p className="text-red-500 text-sm mt-2">
                  {state.errors.timeZone}
                </p>
              )}
            </div>
            <div className="mt-8">
              <label className="font-medium">Select Time</label>

              <div className="space-y-3 max-h-[300px] overflow-y-auto  mt-6 flex flex-col items-center">
                {[
                  "Select Time",
                  "9:30 am",
                  "10:00 am",
                  "10:30 am",
                  "11:00 am",
                  "11:30 am",
                  "2:00 pm",
                  "2:30 pm",
                  "3:00 pm",
                  "3:30 pm",
                  "4:00 pm",
                  "4:30 pm",
                  "5:00 pm",
                  "5:30 pm",
                ].map((time) => (
                  <label
                    key={time}
                    className={`block p-3 border-black dark:border-white border md:w-[300px] w-[200px] text-center cursor-pointer 
      hover:bg-gray-200 dark:hover:text-black
      ${time === "Select Time" ? "bg-[#EAEAEA] text-black cursor-not-allowed" : ""}`}
                  >
                    <Input
                      type="radio"
                      name="time"
                      value={time}
                      className="hidden"
                      disabled={time === "Select Time"}
                    />

                    {time}
                  </label>
                ))}
              </div>
              {state?.errors?.time && (
                <p className="text-red-500 text-sm mt-2">{state.errors.time}</p>
              )}
            </div>
          </div>
          <div className="col-span-1 lg:col-span-2 mt-">
            <div className="max-w-[300px] h-20 dark:bg-[#222] rounded dark:text-white  border border-[#d3d3d3] bg-[#f9f9f9] text-black flex justify-between items-center p-1.5 shadow">
              {/* checkbox */}
              <div className="flex items-center gap-3">
                <Checkbox name="captcha" />
                <p className="font-medium text-sm sm:text-base">
                  I'm not a robot
                </p>
              </div>

              {/* captcha logo */}
              <div className="text-[#555] dark:text-white text-[10px] flex flex-col items-center">
                <Image
                  src={"/logo_48.png"}
                  height={40}
                  width={40}
                  alt="captcha"
                />
                <span>reCAPTCHA</span>
                <span>
                  Privacy <span>-</span> Terms
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-8 mt-16 px-4">
          <Button
            type="submit"
            className="font-bold text-lg sm:text-base md:text-lg 
                     px-8 sm:px-12 py-4  text-white 
                     hover:bg-white hover:text-primary 
                     transition-all duration-500 
                     hover:border-2 hover:border-black"
          >
            Click to Schedule
          </Button>

          <h4 className="text-xl sm:text-2xl md:text-4xl  font-bold">
            Our Team will contact you!
          </h4>
        </div>
      </form>
    </section>
  );
};

export default ConsultationForm;
