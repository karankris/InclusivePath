'use client'

import { useState } from "react";
import { Question } from "../constants/types"
import { getStatusColorCode } from "../constants/status";
import { LuInfo } from "react-icons/lu";
import { Popover } from 'react-tiny-popover'
const ChoiseForm = ({ data }: { data: Question }) => {
    const [selectedIndex, setSelectedIndex] = useState<number>(-1);
    const { background, text, border ,icon:Emoji } = getStatusColorCode(data.response[selectedIndex]);
    const [isPopoverOpen, setIsPopoverOpen] = useState<boolean>(false);
    const handleChange = (index: number) => {
        setSelectedIndex(index);
    };

    return (
        <div className="flex flex-col md:flex-row justify-between items-start w-full gap-10 p-8 m-10 ">
            {/* Left Section: Question & Radio Buttons */}
            <div className="w-full md:w-1/2">
                <p className="font-bold text-2xl text-gray-800 font-serif">{data.question}</p>
                <div className="flex flex-col gap-4 text-lg ms-4 mt-4">
                    {data.options.map((opt, index) => (
                        <label
                            key={index}
                            className={`flex items-center gap-3 cursor-pointer hover:text-blue-600 transition-all duration-200 ${selectedIndex === index ? 'text-blue-600' : ''}`}
                        >
                            <input
                                type="radio"
                                name="question-options"
                                value={opt}
                                checked={selectedIndex === index}
                                onChange={() => handleChange(index)}
                                className="w-5 h-5 accent-blue-500"
                            />
                            {opt}
                        </label>
                    ))}
                </div>
            </div>

            {/* Right Section: Answer Box */}
            <div className="border border-gray-300 p-6 rounded-lg w-full md:w-1/2 h-96 flex flex-col justify-center items-center bg-white shadow-md">
                <p className="text-gray-600 text-lg text-center">
                    {selectedIndex !== -1 ? data.answer[selectedIndex] : "Select an option"}
                </p>
                {selectedIndex !== -1 && (
                    <div className="">
                        <div className={`p-5 border ${border} ${background} ${text} rounded-md w-24 h-12 flex mt-4 justify-center items-center font-semibold text-lg transition-all duration-300`}>
                            {data.response[selectedIndex]}
                        </div>
                        <div className="flex justify-center items-center">
                            <Popover
                                isOpen={isPopoverOpen}
                                positions={['bottom']}
                                content={<div className="w-auto h-10  rounded-full p-2 m-2 mt-4 bg-slate-200 shadow-lg flex gap-2">{Emoji && <Emoji size={20} className="mt-0.5"/>}{data.feedback[selectedIndex]}</div>}
                            >

                                <div onClick={() => setIsPopoverOpen(!isPopoverOpen)} className="cursor-pointer mt-5">
                                    <div className="flex items-center gap-2 ">
                                        <LuInfo size={20} className="text-gray-700 " />
                                        <span className="text-gray-700  font-semibold">Feedback</span>
                                    </div>
                                </div>

                            </Popover>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ChoiseForm;
