import React from 'react'
import { useParams, useSearchParams} from 'react-router-dom'

export default function Courses() {
    let {course} = useParams();
    //console.log(course);

    let [searchParams, setSearchParams] = useSearchParams();

    let courses = {
        frontend: 
        [
            {title: "React", duration: "2 Months", price: "100"},
            {title: "Angular", duration: "1 Months", price: "120"},
            {title: "HTML", duration: "1 Months", price: "30"},
            {title: "Flutter", duration: "3 Months", price: "110"},
        ],
        backend: 
        [
            {title: "Node.js", duration: "2 Months", price: "100"},
            {title: "Django", duration: "1 Months", price: "120"},
            {title: "JAVA", duration: "1 Months", price: "30"},
            {title: "PHP", duration: "3 Months", price: "110"},
        ]
    }

    let handleFilterChnage = (e) => {
      let value = e.target.value
      value ? setSearchParams({price : value}) : setSearchParams({})
    }

    let courseDetail = courses[course]
    //console.log(courseDetail[0].title)

    if(searchParams.get("price")){
      let [min, max] = searchParams.get("price").split('-').map(Number)
      courseDetail =  courseDetail.filter((ele) => {
        let pri = ele.price
        return pri >= min && pri <= max
      })
      //console.log("is it repeating ?")
    }

    console.log(courseDetail);

  return (
    <div>
      <h2>Course Page</h2>
      <select name="" id="" onChange={handleFilterChnage}>
        <option value="">Select Price Range</option>
        <option value="0-50">0 - 50</option>
        <option value="51-100">51 - 100</option>
        <option value="101-150">101 - 150</option>
      </select>
      <ul>
        {
          courseDetail
          ? courseDetail.map((item,idx) =>(
            <li key={idx}>
              {item.title} - {item.duration}
            </li>
          ))
          : <p>No Course</p>
        }
      </ul>
    </div>
  )
}
