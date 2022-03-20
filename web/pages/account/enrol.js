import React, { useState } from "react";
import Select from 'react-select'
import { useRouter } from 'next/router';

// layout for page

import Auth from "layouts/Auth.js";
import { useEnrolMutation } from 'generated/graphql';
import { toErrorMap } from 'components/Utils/ToErrorMap.js';


export default function Register() {

  const router = useRouter()

  const [surname, setSurname] = useState('')
  const [otherNames, setOtherNames] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [examLocation, setExamLocation] = useState('')
  const [matricLocation, setMatricLocation] = useState('')
  const [studentSchool, setstudentSchool] = useState('')
  const [courseName, setCourseName] = useState('')
  const [paymentMode, setPaymentMode] = useState('')
  const [amountPaid, setAmountPaid] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [formStep, setFormStep] = useState(1)
  const [usernameError, setUsernameError] = useState(false)
  const [pwdError, setPwdError] = useState(false)

  const [enrol] = useEnrolMutation()

  const examLocations = [
    { label: 'Aba', value: 'aba' },
    { label: 'Abuja', value: 'abuja' },
  ]
  const matricLocations = [
    { label: 'Aba', value: 'aba' },
    { label: 'Abuja', value: 'abuja' },
  ]
  const courses = [
    { label: 'Computer Science', value: 'Computer Science' },
    { label: 'Computer Engineering', value: 'Computer Engineering' },
    { label: 'Environmental Science', value: 'Environmental Science' },
    { label: 'Physics with Electronics', value: 'Physics with Electronics' },
    { label: 'Accounting', value: 'Accounting' },
    { label: 'Mass Communication', value: 'Mass Communication' },
    { label: 'Cyber Security', value: 'Cyber Security' },
    { label: 'Banking and Finance', value: 'Banking and Finance' },
    { label: 'Public Administration', value: 'Public Administration' },
    { label: 'Business Administration', value: 'Business Administration' },
    { label: 'Law', value: 'Law' },
    { label: 'Medicine and Surgery', value: 'Medicine and Surgery' },
    { label: 'Biochemistry', value: 'Biochemistry' },
    { label: 'Microbiology', value: 'Microbiology' },
    { label: 'Political Science', value: 'Political Science' },
    { label: 'International Relations', value: 'International Relations' },
    { label: 'Environmental Science', value: 'Environmental Science' },
    { label: 'Nursing', value: 'Nursing' },
    { label: 'Food Science Technology', value: 'Food Science Technology' },
    { label: 'Theology', value: 'Theology' },
    { label: 'Software Engineering', value: 'Software Engineering' },
    { label: 'Electrical Engineering', value: 'Electrical Engineering' },
    { label: 'Civil Engineering', value: 'Civil Engineering' },
    { label: 'Others', value: 'Others' },
  ]
  const studentSchools = [
    { label: 'Citi Polytechnic Abuja', value: 'Citi Polytechnic Abuja' },
    { label: 'Convenant Polytechnic Owerri', value: 'Convenant Polytechnic Owerri' },
    { label: 'Crown Point College of Health', value: 'ECrown Point College of Health' },
    { label: 'Dorben Polytechnic', value: 'EDorben Polytechnic' },
    { label: 'Evangel University ', value: 'Evangel University ' },
    { label: 'Paul University Awka', value: 'Paul University Awka' },
    { label: 'Mewar International University', value: 'Mewar International University' },
    { label: 'Tansian University Anambra', value: 'Tansian University Anambra' },
  ]
  const paymentModes = [
    { label: 'Cash', value: 'cash' },
    { label: 'Checks', value: 'checks' },
    { label: 'Bank Transfer', value: 'Bank transfer' },
  ]
  const amounts = [
    { label: '50k', value: 10000 },
    { label: '100k', value: 10000 },
    { label: '150k', value: 10000 },
    { label: '200k', value: 10000 },
    { label: 'Other', value: 0 }
  ]


  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center examLocations-center justify-center h-full">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-blueGray-500 text-sm font-bold">
                    Enrol using social account
                  </h6>
                </div>
                <div className="btn-wrapper text-center">
                  <button
                    className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex examLocations-center font-bold text-xs ease-linear transition-all duration-150"
                    type="button"
                  >
                    <img alt="..." className="w-5 mr-1" src="/img/fb.png" />
                    Facebook
                  </button>
                  <button
                    className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex examLocations-center font-bold text-xs ease-linear transition-all duration-150"
                    type="button"
                  >
                    <img alt="..." className="w-5 mr-1" src="/img/google.svg" />
                    Google
                  </button>
                </div>
                <hr className="mt-6 border-b-1 border-blueGray-300" />
              </div>

              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-blueGray-400 text-center mb-3 font-bold">
                  <small>Or enrol with credentials</small>
                </div>


                {formStep == 1 ? (
                  <form
                    onSubmit={e => {
                      e.preventDefault()
                      setFormStep(2)
                    }}
                  >

                    <div>
                      <div className="relative w-full flex mb-3">
                        <div className='w-full'>
                          <label
                            className="block capitalize text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            First Name
                          </label>
                          <input
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            placeholder="First name"
                            name='surname'
                            onChange={e => setSurname(e.target.value)}
                            required
                          />
                        </div>
                        <div className='w-full ml-2'>
                          <label
                            className="block capitalize text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            other Names
                          </label>
                          <input
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            placeholder="Other names"
                            name='otherNames'
                            onChange={e => setOtherNames(e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="Email address"
                          name='email'
                          onChange={e => setEmail(e.target.value)}
                          required
                        />
                      </div>

                      {/* Phone number */}
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="Phone number"
                          name='phoneNumber'
                          onChange={e => setPhoneNumber(e.target.value)}
                          required
                        />
                      </div>


                      {/* exam location / Address */}
                      <div className="relative w-full flex mb-3">
                        <div className='w-full'><label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Scholarship Exam location
                        </label>
                          <Select options={examLocations}
                            name='location'
                            onChange={e => setExamLocation(e.value)}
                            required
                          />
                        </div>
                        <div className='w-full ml-2'><label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Matriculation location
                        </label>
                          <Select options={matricLocations}
                            onChange={e => setMatricLocation(e.target.value)}
                            required />
                        </div>
                      </div>


                      <div className="text-center mt-6">
                        <button
                          className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                          type="submit"
                        >
                          Continue
                        </button>
                      </div>
                    </div>
                  </form>
                ) : (<form
                  onSubmit={async e => {
                    e.preventDefault()
                    const response = await enrol({
                      variables: {
                        optionsOne: { surname, otherNames, email, phoneNumber, examLocation, matricLocation },
                        optionsTwo: { studentSchool, courseName, amountPaid, paymentMode },
                        optionsThree: { username, password }
                      }
                    })
                    let errors
                    if (response?.data?.enrol.errors) {
                      errors = toErrorMap(response.data.enrol.errors)
                      if ('username' in errors) {
                        setUsernameError(true)
                      } else if ('password' in errors) {
                        setPwdError(true)
                      }
                    } else if (response?.data?.enrol.student) {
                      if (typeof router.query.next === "string") {
                        router.push(router.query.next);
                      } else {
                        // worked
                        router.push("/");
                      }
                    }
                  }}
                >
                  {/* school name / Address */}
                  <div className="relative w-full flex mb-3">
                    <div className='w-full'><label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      School Name
                    </label>
                      <Select options={studentSchools}
                        name='location'
                        onChange={e => setstudentSchool(e.value)}
                        required
                      />
                    </div>
                    <div className='w-full ml-2'><label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Course
                    </label>
                      <Select options={courses}
                        onChange={e => setCourseName(e.value)}
                        required />
                    </div>
                  </div>
                  <div className="relative w-full flex mb-3">
                    <div className='w-full'><label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Payment Mode
                    </label>
                      <Select options={paymentModes}
                        name='location'
                        onChange={e => setPaymentMode(e.value)}
                        required
                      />
                    </div>
                    <div className='w-full ml-2'><label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Amount paid
                    </label>
                      <Select options={amounts}
                        onChange={e => setAmountPaid(e.value)}

                        required />
                    </div>
                  </div>

                  <div className="relative w-full flex mb-3">
                    <div className='w-full'>
                      <label
                        className="block capitalize text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Username
                      </label>
                      <input
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Choose a username"
                        name='username'
                        onChange={e => setUsername(e.target.value)}
                        required
                      />
                      {usernameError && <p className='text-red-500 text-sm mt-2'>
                        This username has been taken {'  '}
                        <i className='text-red-500  fas fa-exclamation ' />
                      </p>}
                    </div>
                    <div className='w-full ml-2'>
                      <label
                        className="block capitalize text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        password
                      </label>
                      <input
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        type='password'
                        placeholder="choose a password"
                        name='password'
                        onChange={e => setPassword(e.target.value)}
                        required
                      />
                      {pwdError && <p className='text-red-500 text-sm mt-2'>
                        Check your password and try again {'  '}
                        <i className='text-red-500  fas fa-exclamation ' />
                      </p>}
                    </div>
                  </div>

                  <div className="text-center mt-6">
                    <button
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="submit"
                    >
                      Continue
                    </button>
                  </div>

                </form>)}


              </div>
            </div>
            <div className="w-full mt-6 relative">

              <div className="text-center">

                <a href='/account/login' className="text-blueGray-200">
                  <small>Already enroll? login here</small>
                </a>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Register.layout = Auth;
