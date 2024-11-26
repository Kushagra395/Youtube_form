1. React hook form small lib. that help you to create form with validation and submit event. and deal with form in react ,to manage ,submot data  

2. can access to form data by using `useForm` hook 
   1. its give register  function from which we can keep records of name ,ref ,onchange ,onBlur ,onSubmit ,onFocus ,onFocusout ,onInvalid ,onValid ,
     
   ese likh sakte ki username ke liye name...same lo 
       // const {name,ref,onBlur,onChange}=register("username")

    and ese access karenge jo dikhnaa hai ye sabh data
     //  name={name} ref={ref} onChange={onChange} onBlur={onBlur}

    but alternate metthod hai ji bolo register ko bhai sabh dete usernmae ke baare mai as 
  //  {...register("username")}  sabh data de dega


  3. now will install devtools so that React Hook Form DevTools to help debug forms with validation.
  we can able to track form values,touched or changed 
  just import devtools from '@hookform/devtools'
  then get control from useform 
  and write <devtools control={control}/> after form close now user can access at right corner on browser


