import Image from "next/image";
import HeaderBox from "@/components/ui/HeaderBox";
import TotalBalanceBox from "@/components/ui/TotalBalanceBox";

export default function Home() {
  const loggedIn= { firstName: 'Catherina'}
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HeaderBox 
      type='greeting'
      title='Welcome'
      user={loggedIn?.firstName || 'Guest'}
      subtext='Access and manage your accounts and transactions efficiently.'
      />

      <TotalBalanceBox 
      accounts={[]}
      totalBanks={1}
      totalCurrentBalance={125345.23}/>
    </main>
  );
}
