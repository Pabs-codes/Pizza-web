import React from 'react'
import { MotionConfig, motion } from "framer-motion";
// import Reviews from './Reviews';

export default function HeroLeft() {
 

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '2px solid white',
    padding: '20px',
    borderRadius: '5px',
    backgroundColor:'#FCF6EB',
    
  };

  const inputStyle = {
    marginBottom: '10px',
    border: '1px solid red',
    borderRadius: '5px',
    padding: '10px',
    width: '300px',
  };

  const pstyle ={
      color:'red',
     marginBottom:'5px',
     fontWeight: 'bold'
  };

  const buttonStyle = {
    border: '2px solid red',
    borderRadius: '5px',
    padding: '8px 20px',
    backgroundColor: 'white',
    color: 'red',
    cursor: 'pointer',
    marginBottom: '10px',
  };

  const discountButtonStyle = {
    border: 'none',
    borderRadius: '5px',
    padding: '8px 20px',
    backgroundColor: 'red',
    color: 'white',
    cursor: 'pointer',
  };

  return (
    <MotionConfig
      transition={{ type:'spring', damping:10, stiffness:50 }}
    >
      <div className='flex flex-col items-start '>
        <motion.div layout='position' className='flex flex-col gap-6 py-5 '>
      

        </motion.div>
        <motion.div layout className="self-center sm:self-start lg:self-start flex items-center sm:gap-3 lg:gap-3 gap-12 mt-5">
          <form style={formStyle}>
            <input type="text" placeholder="Zip Code" style={inputStyle} />
            <p style={pstyle}> select your zip code or city</p>
            <button style={buttonStyle}>Delivery  easy and sss</button>
            <span>or</span>
            <button style={discountButtonStyle}>15% Discount</button>
          </form>
        </motion.div>
      
      </div>
    </MotionConfig>
  )
}
