import React from 'react'
import Image from "next/image";

import MedalGold from "@/assets/medal-gold.svg";
import MedalSilver from "@/assets/medal-silver.svg";
import MedalCooper from "@/assets/medal-cooper.svg";
import { getRanking } from '@/http/api';


export default async function Ranking() {

  // const { ranking } = await getRanking();

  // const getRanking = async () => {
  //   return {
  //     ranking: [
  //       {
  //         id: 'a30dbd68-8518-4b5c-9bec-c90d9aa6f1aa',
  //         name: 'Alice Silva',
  //         score: 1500
  //       },
  //       {
  //         id: 'c72fbd10-e870-492f-8727-b45cf7f2b93a',
  //         name: 'Bob Souza',
  //         score: 1200
  //       },
  //       {
  //         id: 'f45df7d3-9ac5-4e9e-9b0b-c8b5e7a5f25e',
  //         name: 'Carlos Pereira',
  //         score: 1000
  //       }
  //     ]
  //   };
  // };

  const { ranking } = await getRanking();

  const medalImgs = [MedalGold, MedalSilver, MedalCooper]

  return (
    <div className="w-full max-w-[440px] space-y-5">


    <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none ">
        Ranking de indicações
    </h2>

    <div className="space-y-4 ">
      {ranking.map((rankingItem, index) => {
        
        const rankingPosition = index + 1;
        return(
          <div 
            key={rankingItem.id}
            className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3" 
          >
          <span className="text-sm text-gray-300 leading-none">
          <span className="font-semibold">{rankingPosition}º</span> | {rankingItem.name}
          </span>
  
          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            {rankingItem.score}
          </span>
          <Image src={medalImgs[index]} alt="Medalha" className="absolute top-0 right-8"/>
        </div>
        )
      })}
    </div>


  </div>
  )
}


{/* <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
<span className="text-sm text-gray-300 leading-none">
  <span className="font-semibold">2º</span> | Diego Fernandes
</span>

<span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
  1030
</span>

<Image src={MedalSilver} alt="" className="absolute top-0 right-8"/>
</div>

<div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
<span className="text-sm text-gray-300 leading-none">
<span className="font-semibold">3º</span> | Diego Fernandes
</span>

<span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
  1030
</span>

<Image src={MedalCooper} alt="" className="absolute top-0 right-8"/>
</div> */}