import { useState } from 'react';
import { Link } from 'react-router-dom';

const ShowProjectCards = (props) => {
console.log("props.projectsData",props.projectsData)
    const [newProjectForm, setNewProjectForm] = useState({
        Projects:{

            project:{
                       image:"",
                       shortVideo:"",
                       Description:"",
                       
                     }
        }
    })

    // const handleChange = (event) => {
    //     event.preventDefault();
    //     console.log("event.target.name",event.target.name)
    //     console.log("event.target.value",event.target.value)
    //    let storValue =  {...newProjectForm,
    //     Projects:{
    //     project:{[event.target.name]: event.target.value}
    //     }}

    //     setNewProjectForm({storValue})
    //     console.log("handle Change" ,newProjectForm)
    // }

    const handleChange = (event) => {
        event.preventDefault();
        console.log("event.target.name",event.target.name)
        console.log("event.target.value",event.target.value)

        setNewProjectForm({...newProjectForm, 
            Projects:{
                project: {
                    ...newProjectForm.project,
                    [event.target.name]: event.target.value
            }}
        })
        console.log("handle Change" ,newProjectForm)
    }



    const handleSubNewProj = (event) => {
        event.preventDefault();
        props.createProject(newProjectForm);
        setNewProjectForm({
            Projects:{
    
                project:{
                           image:"",
                           shortVideo:"",
                           Description:"",
                           
                         }
            }
        })
        console.log("handleSubNewProj" ,newProjectForm)
    }


    const loadedProj = () => {
        return props.projectsData.map((dataRecived) => (
                <div key={dataRecived._id} className='projectCard'>
                <h2>Showing Prjects Obeject from ShowProjectCards</h2>
                <h3>{dataRecived.Projects.project.Description}</h3>
                <h3>{dataRecived.Projects.project.image}</h3>
                <h3>{dataRecived.Projects.project.shortVideo}</h3>
                </div>
            )
        )
    }
    const loadingProj = () => {
        return <h1>Loading.........</h1>
    }

  return (
      <div>
      <form onSubmit={handleSubNewProj}>
      <textarea
          type='text'
          value={newProjectForm.Description}
          name='Description'
          placeholder='Description'
          onChange={handleChange}
      />
      <input
          type='text'
          value={newProjectForm.image}
          name='image'
          placeholder='image URL'
          onChange={handleChange}
      />
      <input
          type='text'
          value={newProjectForm.shortVideo}
          name='shortVideo'
          placeholder='shortVideo URL'
          onChange={handleChange}
      />
      <input type='submit' value='Add New Project' />
  </form>

      {props.projectsData ? loadedProj() : loadingProj()}
    </div>
  )
}

export default ShowProjectCards