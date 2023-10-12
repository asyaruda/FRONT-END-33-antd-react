import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { WaiterApi } from './api/server'
import { actionSetList, actionRemoveItem } from './store/actions'
import { Link, useSearchParams } from 'react-router-dom'
import { Filters } from './Filters'
import { Page } from '../../components/Page'
import { Button, Space, Table, } from 'antd'
import { useLang } from '../../hooks/languageContext'

export function WaiterList () {
  const dispatch = useDispatch()
  const waiters = useSelector((state) => state.waiter.list)
  let [searchParams] = useSearchParams()
  const filter = searchParams.get('filter')
  const filteredWaiters = filterWaiters(waiters, filter)
  const lang = useLang()

  const columns = [
    {
      title: 'First name',
      dataIndex: 'firstName',
      key: 'firstName',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Actions',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Link to={`/waiter/edit/${record.id}`}><Button>{lang === 'en' ? 'Edit' : 'Редагувати'}</Button></Link>
          <Button onClick={() => dispatch(actionRemoveItem(record.id))}>{lang === 'en' ? 'Delete' : 'Видалити'}</Button>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    WaiterApi.getList().then((newList) => dispatch(actionSetList(newList)))
  }, [dispatch])

  return (
    <Page title='Waiter List'>
      <div style={{ marginBottom: '20px' }}>
        <Link to='/waiter/edit'><Button>Add New</Button></Link>
      </div>

      <Table columns={columns} dataSource={filteredWaiters} rowKey='id' />
      <Filters />
    </Page>
  )
}

function filterWaiters (waiters, filter) {
  if (filter === 'active') {
    return waiters.filter(waiter => !waiter.blocked)
  } else if (filter === 'blocked') {
    return waiters.filter(waiter => waiter.blocked)
  } else {
    return waiters
  }
}

