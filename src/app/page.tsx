'use client'
import { useState } from "react";
import useQuestions from "./hooks/useQuestions";
import ChoiseForm from "./components/choiseForm";
import { TabAI, Tabs } from "./constants/types";
import GenerativeAi from "./components/generativeAi";

const Diversity = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const { data } = useQuestions();

  const handleTabChange = (index: number) => {
    setActiveTab(index);
  };

  const tabs: Tabs[] = [
    { id: 1, title: 'Question 1' },
    { id: 2, title: 'Question 2' },
    { id: 3, title: 'Question 3' },
    { id: 4, title: 'Question 4' },
    { id: 5, title: 'Question 5' },
  ];

  const tabAi: TabAI = { id: 6, title: 'Generative AI', component: <GenerativeAi /> };

  return (
    <div className="flex flex-col w-auto h-full mt-10">
      <h1 className="text-2xl text-center flex justify-center mb-10 font-bold font-mono">
        Diversity, equity, and inclusion
      </h1>
      <div className="mt-10 flex cursor-pointer ms-4">
        {tabs.map((t, index) => (
          <div
            key={index}
            className={`flex border-b-0 font-semibold font-sans p-5 border border-gray-300 rounded-sm shadow-md 
              hover:bg-slate-300 hover:text-white 
              ${index === activeTab ? "bg-slate-800 text-white" : "bg-white text-black"}`}
            onClick={() => handleTabChange(index)}
          >
            {t.title}
          </div>
        ))}
        <div
          key={tabAi.id}
          className={`flex border-b-0 font-semibold font-sans p-5 border border-gray-300 rounded-sm shadow-md 
            hover:bg-slate-300 hover:text-white 
            ${activeTab === tabs.length ? "bg-slate-800 text-white" : "bg-white text-black"}`}
          onClick={() => handleTabChange(tabs.length)} 
        >
          {tabAi.title}
        </div>
      </div>
      <div className="flex border rounded-lg p-5 mx-4 h-auto w-auto bg-white shadow-md">
        {activeTab < tabs.length ? (
          <ChoiseForm key={activeTab} data={data[activeTab]} />
        ) : (
          tabAi.component
        )}
      </div>
    </div>
  );
};

export default Diversity;
