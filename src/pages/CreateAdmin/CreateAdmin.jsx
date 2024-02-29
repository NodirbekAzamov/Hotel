import React from 'react'
import CreateAdminStore from '../../store/CreateAdminStore'

const CreateAdmin = () => {
    const {createAdmin} = CreateAdminStore()
    const handleCreate =(e)=> {
        e.preventDefault()
        let payload = {
            email: e.target[0].value,
            password: e.target[1].value,
            firstName: e.target[2].value,
            lastName: e.target[3].value,
            phoneNumber: e.target[4].value,
            roles: [e.target[5].value],
        }
        console.log(payload);
        createAdmin(payload)
    }
  return (
    <div>
      <form onSubmit={handleCreate} className='flex flex-col gap-2'>
        <input type="text" placeholder='email'/>
        <input type="text" placeholder='password'/>
        <input type="text" placeholder='firstname'/>
        <input type="text" placeholder='lastname'/>
        <input type="text" placeholder='phone'/>
        <select>
            <option value="admin">admin</option>
            <option value="superadmin">superadmin</option>
        </select>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default CreateAdmin
