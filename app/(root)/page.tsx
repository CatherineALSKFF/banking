import Image from "next/image";
import HeaderBox from "@/components/ui/HeaderBox";
import TotalBalanceBox from "@/components/ui/TotalBalanceBox";
import RightSideBar from "@/components/ui/RightSideBar";


export default function Home() {
  const loggedIn= { firstName: 'Catherina', lastName:'LaNuit', email:'catherina@lanuitech.com'}
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
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
      </header>


      RECENT TRANSACTIONS
      </div>

      <RightSideBar 
      user={loggedIn}
      transactions={[]}
      banks={[{},{}]}/>
    </section>
  );
}
