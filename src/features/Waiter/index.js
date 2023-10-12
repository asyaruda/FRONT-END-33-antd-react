import React from 'react'
import { EditForm } from './EditForm'
import { WaiterList } from './WaiterList'
import { Route, Routes } from 'react-router-dom'
import { NotFound } from '../NotFound'

export function Waiter () {
  return (
    <Routes>
      <Route path="/" element={<WaiterList />} />
      <Route path="/edit" element={<EditForm />} />
      <Route path="/edit/:waiterId" element={<EditForm />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}



