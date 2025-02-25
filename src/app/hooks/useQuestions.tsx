import { useState } from "react";
import { Question } from "../constants/types";
import { Answers, Feedback, Options, Questions, Response } from "../constants/constants";

const useQuestions = () => {
  const [data] = useState<Question[]>([
    {
        question: Questions.QUESTION1,
        options: [Options.Q1OPTOPN1, Options.Q1OPTOPN2, Options.Q1OPTION3],
        answer:[Answers.Q1ANSWER1 ,Answers.Q1ANSWER2 ,Answers.Q1ANSWER3],
        response:[Response.Q1R1,Response.Q1R2,Response.Q1R3],
        feedback:[Feedback.Q1F1,Feedback.Q1F2,Feedback.Q1F3]
    },
 
    {
      question: Questions.QUESTION2,
      options: [Options.Q2OPTION1, Options.Q2OPTION2, Options.Q2OPTION3],
      answer: [Answers.Q2ANSWER1, Answers.Q2ANSWER2, Answers.Q2ANSWER3],
      response: [Response.Q2R1, Response.Q2R2, Response.Q2R3],
      feedback:[Feedback.Q2F1,Feedback.Q2F2,Feedback.Q2F3]
    },
    {
      question: Questions.QUESTION3,
      options: [Options.Q3OPTOPN1, Options.Q3OPTOPN2, Options.Q3OPTION3],
      answer: [Answers.Q3ANSWER1, Answers.Q3ANSWER2, Answers.Q3ANSWER3],
      response: [Response.Q3R1, Response.Q3R2, Response.Q3R3],
      feedback:[Feedback.Q3F1,Feedback.Q3F2,Feedback.Q3F3]
    },
    {
      question: Questions.QUESTION4,
      options: [Options.Q4OPTOPN1, Options.Q4OPTOPN2, Options.Q4OPTION3],
      answer: [Answers.Q4ANSWER1, Answers.Q4ANSWER2, Answers.Q4ANSWER3],
      response: [Response.Q4R1, Response.Q4R2, Response.Q4R3],
      feedback:[Feedback.Q4F1,Feedback.Q4F2,Feedback.Q4F3]
    },
    {
      question: Questions.QUESTION5,
      options: [Options.Q5OPTOPN1, Options.Q5OPTOPN2, Options.Q5OPTION3],
      answer: [Answers.Q5ANSWER1, Answers.Q5ANSWER2, Answers.Q5ANSWER3],
      response: [Response.Q5R1, Response.Q5R2, Response.Q5R3],
      feedback:[Feedback.Q5F1,Feedback.Q5F2,Feedback.Q5F3]
    },
  ]);

  return { data };
};

export default useQuestions;
