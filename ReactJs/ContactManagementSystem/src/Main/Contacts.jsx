import React from 'react'
import './Contact.css'

function Contacts() {
    const students = [
        {
            name: "John Doe",
            phone: "9876543210",
            email: "john.doe@example.com",
            address: "123 Main Street, Hyderabad",
            course: "Full Stack Development",
            higherEducation: "B.Tech in Computer Science",
            shortNote: "Interested in backend technologies.",
            lastInteractedTime: "2025-10-25T14:30:00",
            callbackReminder: "2025-10-30T10:00:00",
            image: "https://randomuser.me/api/portraits/men/11.jpg"
        },
        {
            name: "Priya Sharma",
            phone: "9123456789",
            email: "priya.sharma@example.com",
            address: "456 Lake View Road, Bangalore",
            course: "Data Analytics",
            higherEducation: "M.Sc in Statistics",
            shortNote: "Requested more info about course duration.",
            lastInteractedTime: "2025-10-26T16:00:00",
            callbackReminder: "2025-11-01T09:00:00",
            image: "https://randomuser.me/api/portraits/women/15.jpg"
        },
        {
            name: "Karthik Reddy",
            phone: "9988776655",
            email: "karthik.reddy@example.com",
            address: "789 Green Avenue, Chennai",
            course: "Java Backend Development",
            higherEducation: "BCA",
            shortNote: "Needs placement assistance details.",
            lastInteractedTime: "2025-10-27T11:45:00",
            callbackReminder: "2025-10-29T11:00:00"
        },
        {
            name: "Aisha Khan",
            phone: "9090123456",
            email: "aisha.khan@example.com",
            address: "22 Rose Lane, Pune",
            course: "Python for Data Science",
            higherEducation: "B.Sc in Mathematics",
            shortNote: "Asked about weekend batch availability.",
            lastInteractedTime: "2025-10-24T12:20:00",
            callbackReminder: "2025-10-31T14:00:00",
            image: "https://randomuser.me/api/portraits/women/22.jpg"
        },
        {
            name: "Ravi Teja",
            phone: "9988665544",
            email: "ravi.teja@example.com",
            address: "88 Park Street, Hyderabad",
            course: "Frontend Development",
            higherEducation: "Diploma in Computer Engineering",
            shortNote: "Interested in HTML, CSS, JS fundamentals.",
            lastInteractedTime: "2025-10-23T10:15:00",
            callbackReminder: "2025-10-28T17:00:00"
        },
        {
            name: "Sneha Patel",
            phone: "9123987654",
            email: "sneha.patel@example.com",
            address: "55 MG Road, Ahmedabad",
            course: "UI/UX Design",
            higherEducation: "B.Des in Graphic Design",
            shortNote: "Wants to transition from graphic to UI design.",
            lastInteractedTime: "2025-10-20T09:30:00",
            callbackReminder: "2025-10-27T13:30:00",
            image: "https://randomuser.me/api/portraits/women/45.jpg"
        },
        {
            name: "Rohan Mehta",
            phone: "9001239876",
            email: "rohan.mehta@example.com",
            address: "11 Central Avenue, Mumbai",
            course: "ReactJS Advanced",
            higherEducation: "B.Tech in IT",
            shortNote: "Already knows basics of React.",
            lastInteractedTime: "2025-10-19T18:45:00",
            callbackReminder: "2025-10-28T12:00:00"
        },
        {
            name: "Divya Narayan",
            phone: "9876012345",
            email: "divya.narayan@example.com",
            address: "9 Rainbow Colony, Kochi",
            course: "Spring Boot Microservices",
            higherEducation: "MCA",
            shortNote: "Working professional looking for weekend batch.",
            lastInteractedTime: "2025-10-26T20:00:00",
            callbackReminder: "2025-11-02T10:30:00",
            image: "https://randomuser.me/api/portraits/women/33.jpg"
        },
        {
            name: "Manoj Kumar",
            phone: "9345126789",
            email: "manoj.kumar@example.com",
            address: "202 Sunrise Towers, Vizag",
            course: "AWS Cloud Practitioner",
            higherEducation: "B.Sc in Computer Science",
            shortNote: "Interested in cloud certifications.",
            lastInteractedTime: "2025-10-22T15:00:00",
            callbackReminder: "2025-10-30T09:00:00"
        },
        {
            name: "Anjali Verma",
            phone: "9912345678",
            email: "anjali.verma@example.com",
            address: "47 Maple Street, Delhi",
            course: "Machine Learning Basics",
            higherEducation: "B.Tech in Electronics",
            shortNote: "Asked about prerequisites for ML course.",
            lastInteractedTime: "2025-10-18T11:30:00",
            callbackReminder: "2025-10-25T10:00:00",
            image: "https://randomuser.me/api/portraits/women/27.jpg"
        },
        {
            name: "Sandeep Nair",
            phone: "8899776655",
            email: "sandeep.nair@example.com",
            address: "301 Skyline Residency, Trivandrum",
            course: "DevOps Engineering",
            higherEducation: "M.Tech in Computer Networks",
            shortNote: "Interested in Docker & Kubernetes modules.",
            lastInteractedTime: "2025-10-21T13:45:00",
            callbackReminder: "2025-10-29T16:00:00",
            image: "https://randomuser.me/api/portraits/men/21.jpg"
        },
        {
            name: "Neha Gupta",
            phone: "9701234567",
            email: "neha.gupta@example.com",
            address: "5 Pearl City, Jaipur",
            course: "Power BI for Business",
            higherEducation: "MBA in Finance",
            shortNote: "Looking for a career switch to analytics.",
            lastInteractedTime: "2025-10-20T09:00:00",
            callbackReminder: "2025-10-27T09:30:00"
        },
        {
            name: "Arjun Rao",
            phone: "9356012345",
            email: "arjun.rao@example.com",
            address: "33 Ocean View, Vizag",
            course: "C Programming Basics",
            higherEducation: "Intermediate (12th)",
            shortNote: "Beginner-level learner.",
            lastInteractedTime: "2025-10-15T08:15:00",
            callbackReminder: "2025-10-22T08:15:00"
        },
        {
            name: "Meera Iyer",
            phone: "9008765432",
            email: "meera.iyer@example.com",
            address: "6 Lotus Street, Chennai",
            course: "Angular Framework",
            higherEducation: "B.Tech in ECE",
            shortNote: "Prefers online evening sessions.",
            lastInteractedTime: "2025-10-16T19:00:00",
            callbackReminder: "2025-10-24T19:00:00",
            image: "https://randomuser.me/api/portraits/women/52.jpg"
        },
        {
            name: "Deepak Singh",
            phone: "9887766554",
            email: "deepak.singh@example.com",
            address: "84 Ridge Road, Lucknow",
            course: "Java Full Stack",
            higherEducation: "BCA",
            shortNote: "Looking for fast-track course.",
            lastInteractedTime: "2025-10-17T12:00:00",
            callbackReminder: "2025-10-26T12:00:00"
        },
        {
            name: "Lakshmi Menon",
            phone: "9812345098",
            email: "lakshmi.menon@example.com",
            address: "71 Palm Street, Kochi",
            course: "Data Visualization with Tableau",
            higherEducation: "MBA in Marketing",
            shortNote: "Interested in dashboard creation.",
            lastInteractedTime: "2025-10-14T10:30:00",
            callbackReminder: "2025-10-22T10:00:00",
            image: "https://randomuser.me/api/portraits/women/61.jpg"
        },
        {
            name: "Rajesh Pillai",
            phone: "9601237890",
            email: "rajesh.pillai@example.com",
            address: "44 Hill Top, Trichy",
            course: "Node.js Backend Development",
            higherEducation: "B.Tech in IT",
            shortNote: "Has prior Java experience.",
            lastInteractedTime: "2025-10-18T14:00:00",
            callbackReminder: "2025-10-25T14:00:00"
        },
        {
            name: "Shivani Agarwal",
            phone: "9009090909",
            email: "shivani.agarwal@example.com",
            address: "10 Blossom Avenue, Delhi",
            course: "Advanced Excel",
            higherEducation: "B.Com",
            shortNote: "Wants to improve reporting skills.",
            lastInteractedTime: "2025-10-19T09:30:00",
            callbackReminder: "2025-10-27T10:00:00",
            image: "https://randomuser.me/api/portraits/women/71.jpg"
        },
        {
            name: "Farhan Ahmed",
            phone: "9508765432",
            email: "farhan.ahmed@example.com",
            address: "27 City Plaza, Hyderabad",
            course: "Cyber Security Basics",
            higherEducation: "B.Tech in Computer Science",
            shortNote: "Interested in ethical hacking.",
            lastInteractedTime: "2025-10-25T15:00:00",
            callbackReminder: "2025-10-31T11:30:00"
        },
        {
            name: "Pooja Ramesh",
            phone: "9709876543",
            email: "pooja.ramesh@example.com",
            address: "19 Silver Park, Coimbatore",
            course: "Android App Development",
            higherEducation: "B.Sc in Computer Applications",
            shortNote: "Asked about Kotlin vs Java course options.",
            lastInteractedTime: "2025-10-26T17:00:00",
            callbackReminder: "2025-11-01T10:30:00",
            image: "https://randomuser.me/api/portraits/women/85.jpg"
        }
        ];


  const sample = [{name: "adhi", age : 23}, {name : "Guest"}]

  return (
    <div className='contacts-section'>
        <h2>Contacts Component</h2>
        <div className="containers">
            {students.map((student) => {
            return <div className="container">
                    <div className="image-container">
                        {(student.image) ? <img className='image' src={student.image}/>: `${student.name.charAt(0)}`}
                    </div>
                    <div className="details-container">
                        <div className="name">{student.name}</div>
                        <div className="phone">{student.phone}</div>
                        <div className="button">
                            <button className="viewmore">view contact</button>
                        </div>
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default Contacts