import { Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from 'react-router-dom';
import Homepage from './pages/Homepage';
import Mainlayout from './layouts/Mainlayout';
import Jobpage from './pages/Jobpage';
import { Notfoundpage } from './pages/Notfoundpage';
import Onejobpage ,{jobloader}from './pages/Onejobpage';
import Addjobpage from './pages/Addjobpage';
import Editjobpage from './pages/Editjobpage';
import React from 'react';



const App = () => {
  //add new job
  const addjob =async(newjob)=>{

    const res =await fetch ('/api/jobs',{
      method:'POST',
      headers:{
        'Content-Type':'aplication/json'

      },
      body: JSON.stringify(newjob)
    });
    return;
    };
    //delete job
    const deletejob = async(id)=>{
      const res =await fetch (`/api/jobs/${id}`,{
        method:'DELETE',
        
      });
      return;

    };
    //update job
    const updatejob =async(job)=>{
      const res =await fetch (`/api/jobs/${job.id}`,{
        method:'PUT',
        headers:{
          'Content-Type':'aplication/json'
  
        },
        body: JSON.stringify(job)
      });
      return;


    };
    
    const router = createBrowserRouter (
    createRoutesFromElements( 
    
    <Route path='/' element={<Mainlayout />}>
    
    <Route index element={<Homepage />} />
    <Route path='/jobs' element={<Jobpage />} />
    <Route path='/add-job' element={<Addjobpage addJobSubmit={addjob} />} />
    <Route path='/jobs/:id' element={<Onejobpage deletejob={deletejob}/>} loader={jobloader  } />
    <Route path='/edit-job/:id' element={<Editjobpage updateJobSubmit={updatejob} />} loader={jobloader  } />
    <Route path='*' element={<Notfoundpage />} />
    </Route>
    
    
    )
    
    
    );
  return (
     <BrowserRouter basename="https://chamsbj.github.io/reactjob/">
    <RouterProvider router={router}/>
        </BrowserRouter>
  )
}

export default App;
