import Header from 'componets/Header'
import Search from 'componets/Search'
import NavTittle from 'componets/NavTittle'
import Categories from 'componets/Categories'
import Footer from 'componets/Footer'
import { useEffect, useState } from 'react'

function App () {
  const [payment, setPayment] = useState(false)

  useEffect(() => {
    fetch('https://smarty.kerzz.com:4004/api/payment/successPayment')
      .then(res => {
        if (res.ok && res.status === 200) {
          return res.json()
        }
      })
      .then(data => setPayment(data))
      .catch(err => console.log(err))
    // addPost({
    //   id: 5,
    //   email: 'case@gmail.com'
    // })
  }, [])

  // const addPost = data => {
  //   fetch('https://smarty.kerzz.com:4004/api/payment/createAutoPayment', {
  //     method: 'POST',
  //     body: JSON.stringify(data),
  //     headers: {
  //       'Content-type': 'application/json; charset=utf-8 '
  //     }
  //   })
  //     .then(res => {
  //       if (res.ok && res.status === 200) {
  //         return res.json()
  //       }
  //     })
  //     .then(data => console.log(data))
  //     .catch(err => console.log(err))
  // }

  return (
    <>
      <Header />
      <div className='mx-auto container gap-4 flex fllex flex-col mt-4 p-2'>
        <Search />
        <NavTittle />
        <Categories />
      </div>
      <Footer />
      <ul>
        {payment &&
          payment.map(payment => (
            <li key={payment.id}>{payment.connection}</li>
          ))}
      </ul>
    </>
  )
}
export default App
