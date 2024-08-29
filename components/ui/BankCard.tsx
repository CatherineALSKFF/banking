import React from 'react'
import Link from 'next/link'
import { formatAmount } from '@/lib/utils'

const BankCard = ({account, userName , showBalance}: CreditCardProps) => {
  return (
    <div className='flex flex-col'>
        <Link href='/' className='bank-card'>
        <div className='bank-card_content'>
            <h1 className='text-16 font-semibold text-white'> {account.name || userName}</h1>
            <p className='font-ibm-flex-serif font-black text-white'>{formatAmount(account.currentBalance)}</p>
            </div>
            </Link>
    </div>
  )
}

export default BankCard