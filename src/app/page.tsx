'use client'
import Image from "next/image";
// import { Tabs } from "./constants/types";
import Question1 from "./components/question1";
import Question2 from "./components/question2";
import Question3 from "./components/question3";
import Question4 from "./components/question4";
import Question5 from "./components/question5";
import { Question, Tabs } from "./constants/types";
import { useState } from "react";
import useQuestions from "./hooks/useQuestions";



const Diversity = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const { data } = useQuestions();

  const tabs: Tabs[] = [
    {
      id: 1,
      title: 'Question 1',
      component: <Question1 data={data[activeTab]} />
    },
    {
      id: 2,
      title: 'Question 2',
      component: <Question2/>
    },
    {
      id: 3,
      title: 'Question 3',
      component: <Question3 />
    },
    {
      id: 4,
      title: 'Question 4',
      component: <Question4 />
    },
    {
      id: 5,
      title: 'Question 5',
      component: <Question5 />
    },
  ]

  const ActiveTabComponent = tabs[activeTab].component
  return (
    <div className="flex flex-col w-auto h-full mt-10">
      <h1 className="text-2xl text-center flex justify-center mb-10 font-bold font-mono">Diversity, equity, and inclusion</h1>
      <div className="mt-10 flex cursor-pointer  ms-4">
        {tabs.map((t, index) =>
          <div className={`flex  border-b-0 font-semibold font-sans p-5  border  border-gray-300 rounded-sm bg-white shadow-md hover:bg-slate-300 hover:text-white ${index === activeTab ? "bg-slate-600 text-white" : "" }`} key={index} onClick={() => setActiveTab(index)}>{t.title}</div>
        )}
      </div>
      <div className="flex border rounded-lg  p-5 mx-4 h-auto w-auto bg-white shadow-md">
        {ActiveTabComponent}
      </div>
    </div>
  );
}

export default Diversity;