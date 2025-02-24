import { useState } from "react";
import { Question } from "../constants/types";
import { Answers, Options, Questions, Response } from "../constants/constants";

const useQuestions = () => {
  const [data] = useState<Question[]>([
    {
        question: Questions.QUESTION1,
        options: [Options.Q1OPTOPN1, Options.Q2OPTOPN2, Options.Q3OPTION3],
        answer:[Answers.Q1ANSWER1 ,Answers.Q2ANSWER2 ,Answers.Q3ANSWER3],
        response:[Response.Q1R1,Response.Q2R2,Response.Q3R3],
    },
 
    // {
    //   question: Questions.QUESTION2,
    //   options: [Options.Q2OPTOPN1, Options.Q2OPTOPN2, Options.Q2OPTION3],
    //   answer: [Answers.Q2ANSWER1, Answers.Q2ANSWER2, Answers.Q2ANSWER3],
    //   response: [Response.Q2R1, Response.Q2R2, Response.Q2R3],
    // },
    // {
    //   question: Questions.QUESTION3,
    //   options: [Options.Q3OPTOPN1, Options.Q3OPTOPN2, Options.Q3OPTION3],
    //   answer: [Answers.Q3ANSWER1, Answers.Q3ANSWER2, Answers.Q3ANSWER3],
    //   response: [Response.Q3R1, Response.Q3R2, Response.Q3R3],
    // },
    // {
    //   question: Questions.QUESTION4,
    //   options: [Options.Q4OPTOPN1, Options.Q4OPTOPN2, Options.Q4OPTION3],
    //   answer: [Answers.Q4ANSWER1, Answers.Q4ANSWER2, Answers.Q4ANSWER3],
    //   response: [Response.Q4R1, Response.Q4R2, Response.Q4R3],
    // },
    // {
    //   question: Questions.QUESTION5,
    //   options: [Options.Q5OPTOPN1, Options.Q5OPTOPN2, Options.Q5OPTION3],
    //   answer: [Answers.Q5ANSWER1, Answers.Q5ANSWER2, Answers.Q5ANSWER3],
    //   response: [Response.Q5R1, Response.Q5R2, Response.Q5R3],
    // },
  ]);

  return { data };
};

export default useQuestions;
