import React, { useEffect, useState } from "react";
import CustomButtonOne from "./customButtons/CustomButtonOne";
import styles from "./HabbitEditor.module.css";
import {ToastContainer, toast } from 'react-toastify';

export default function HabbitEditor() {
  let [habit, setHabit] = useState("");
  let [habits, setHabits] = useState([]);

  

  let handleChange = (e) => {
    setHabit(e.target.value);
    //console.log(habit)
  };
  let  handleAdd = (e) => {
    e.preventDefault();

    if(habit.trim()=='') return

    setHabits(prev => [...prev,habit])
    //console.log(habit);
    localStorage.setItem("newHabits",JSON.stringify([...habits, habit]))

    const notify = () => toast(`${habit} added successfully`);
    notify()

    setHabit("");

    //alert(`${habit} added successfully`)
  };

  useEffect(()=>{
    const saved = JSON.parse(localStorage.getItem('newHabits')) || []
    setHabits(saved)
  },[])

  const handleRemove = (idx)=>{
    //console.log('remove it now')
    let updatedHabits = habits.filter((val,index)=>idx!=index)
    setHabits(updatedHabits)
    localStorage.setItem("newHabits",JSON.stringify(updatedHabits))
  }

  // useEffect(()=>{
  //   console.log(habits)
  // },[habits])

  return (
    <>
      <div className={styles.editor}>
        <h1 className={styles.title}>Make New Habbit Everyday</h1>
        <input
          type="text"
          id={styles.inp}
          placeholder="Enter your habbit...."
          onChange={handleChange}
          value={habit}
        />
        <CustomButtonOne
          btnTxt="Add"
          clsName={styles.addbtn}
          handler={handleAdd}
        />
        <ToastContainer />
      </div>


      

      <div className={styles.habit}>
        <h1>
          Your Habits
        </h1>
        <ul className={styles.habitItems}>
          {habits.map((item,idx) => (
            <div className={styles.items} key={idx}>
              <li className={styles.item}>{item}</li>
              <CustomButtonOne btnTxt="Remove" clsName={styles.addbtn} handler={()=>handleRemove(idx)}/>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}
