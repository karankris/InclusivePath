import  {FaRegSmileBeam} from 'react-icons/fa'
import {PiSmileyMeh ,PiSmileySadLight} from 'react-icons/pi'



  export const getStatusColorCode = (id: string) => {
    switch (id) {
      case 'Positive':
        return {
          background: 'bg-[#dbf7e2]',
          text: 'text-[#14bf3d]',
          border: 'border-[#14bf3d]',
          icon:FaRegSmileBeam,
        };
  
      case 'Negative':
        return {
            background: 'bg-[#eea08f]',
            text: 'text-[#ee3209]',
            border: 'border-[#ee3209]',
            icon:PiSmileySadLight,
        };
  
      case 'Neutral':
        return {
          background: 'bg-[#bdcdcd]',
          text: 'text-[#839292]',
          border: 'border-[#839292]',
          icon:PiSmileyMeh,
        };


      default:
        return {
          'none':'none'
        };
    }
  };