const statusCode: { [key: string]: string } = {
    //Users //Faq //Inventory
    ACTIVE: 'bg-accent text-accent-foreground',
    INVITED: 'bg-secondary text-secondary-foreground',
    REVOKED: 'bg-secondary text-secondary-foreground',
  };
  
  export const getStatusColorCode = (id: string) => {
    switch (id) {
      case 'Positive':
        return {
          background: 'bg-[#dbf7e2]',
          text: 'text-[#14bf3d]',
          border: 'border-[#14bf3d]',
        };
  
      case 'Negative':
        return {
            background: 'bg-[#eea08f]',
            text: 'text-[#ee3209]',
            border: 'border-[#ee3209]',
        };
  
      case 'Neutral':
        return {
          background: 'bg-[#bdcdcd]',
          text: 'text-[#839292]',
          border: 'border-[#839292]',
        };


      default:
        return {
          'none':'none'
        };
    }
  };