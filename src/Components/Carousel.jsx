import React, { useRef, useState } from 'react'
import './Carousel.css'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'
import Page4 from './Page4'
import Name from './Name'
import Autocomplete from './Autocomplete'


function Carousel() {

      const[detail, setDetails]= useState({
            FName: "",
            LName: "",
            Place: "",
            GoDate: "",
            ComeDate: "",
      })

      const screenWidth= window.innerWidth

      const elementRef=useRef();

      const nextButton=(element)=>{
            element.scrollLeft+=screenWidth
        }

        const prevButton=(element)=>{
            element.scrollLeft-=screenWidth
        }

      const submitButton=()=>{
            console.log(detail)
      }

      // const [firstname, setFirstname] = useState('')

      const handleOnChange=(event)=>{
            const {name, value} = event.target;
            setDetails((prev)=>{
                  return {...prev, [name]:value};
            })
            // setFirstname(event.target);
      }
      
      // console.log(detail)

  return (


    <div className='aabbcc sm:flex-row md:flex overflow-x-auto scroll-smooth' ref={elementRef}>
            <section>
            <div className='content'>
                        <div className='mb-4 mx-1 text-xl md:text-3xl'>Please Enter Your Name</div>
                        <div className='flex flex-col items-center md:flex-row'>
                        <input className='px-2 m-1 h-9 rounded-md shadow-md w-3/4' type='text' name='FName' onChange={handleOnChange} placeholder='First Name'></input>
                        <input className='px-2 my-1 m-1 h-9 rounded-md shadow-md w-3/4' type='text' name='LName' onChange={handleOnChange} placeholder='Last Name'></input>
                        </div>
                  <div>
                        <button className='py-0.5 px-2 text-2xl mt-5 border-2 shadow-sm rounded-md border-black' onClick={()=>nextButton(elementRef.current)}>NEXT</button>
                  </div>
                  
                  </div> 
            </section>






            <section>
                  <div className='content'>
                  <div>
                        <div className='mb-4 mx-1 text-xl md:text-3xl'>Which place would you like to visit?</div>
                        <div>
                        <input className='px-2 m-1 h-9 rounded-md shadow-md' type='text' name='Place' onChange={handleOnChange} placeholder='Eg: Badheri'></input>
                        </div>
                        <div>
                        <button className='py-0.5 px-2 text-2xl mt-5 border-2 shadow-sm rounded-md border-black' onClick={()=>prevButton(elementRef.current)}>BACK</button>
                              <span className='mx-3'></span>
                              <button className='py-0.5 px-2 text-2xl mt-5 border-2 shadow-sm rounded-md border-black' onClick={()=>nextButton(elementRef.current)}>NEXT</button>
                        </div>
  </div>
                  </div>
            </section>






            <section>
                  <div className='content'>
                  <div className='mb-4 mx-1 text-xl md:text-3xl'>What are your expected Dates?</div>
                  <div className='flex flex-col items-center md:flex-row'>
                  <input type="date" onChange={handleOnChange} name='GoDate' className="bg-cyan-100 text-md rounded-xl p-2 border border-black shadow-md w-1/2 md:w-auto"/>
                  <span className="my-3 md:my-0 mx-6 text-xl text-black">TO</span>
                  <input type="date" onChange={handleOnChange} name='ComeDate' className="bg-cyan-100 text-md rounded-xl p-2 border border-black shadow-md w-1/2 md:w-auto"/>
                  </div>
                  <div>
                        <button className='py-0.5 px-2 text-2xl mt-5 border-2 shadow-sm rounded-md border-black' onClick={()=>prevButton(elementRef.current)}>BACK</button>
                              <span className='mx-3'></span>
                              <button className='py-0.5 px-2 text-2xl mt-5 border-2 shadow-sm rounded-md border-black' onClick={()=>nextButton(elementRef.current)}>NEXT</button>
                        </div>
                  </div>
            </section>






            <section>
                  <div className='content'>
                  <button className='py-0.5 px-2 text-2xl mt-5 border-2 shadow-sm rounded-md border-black' onClick={submitButton}>Submit</button>
                  </div>
            </section>

    </div>
  )
}

export default Carousel

