import React from 'react'
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import '../DescriptionBox/DescriptionBox.css'

const DescriptionBox = () => {
  const data = [
    {

      label: "Description",
      value: "Description",
      desc: `Bizning ommabop standart yuk tashish konteynerlari konversiyalari qatorimiz bir qator tanlangan sektorlarda mijozlarning o'ziga xos ehtiyojlarini qondirish uchun mo'ljallangan. Ushbu mahsulotlarni onlayn xarid qilish mumkin va buyurtma qilingan kundan boshlab 6-8 hafta ichida foydalanishga tayyor holda yetkazib berilishi mumkin.

      Ushbu standart konteyner konvertatsiya birliklari muayyan ehtiyojlarni qondirish uchun moslashtirilishi mumkin. Har bir birlik uchun mashhur variantlar tanlanishi va konversiya mahsuloti bilan bir qatorda onlayn xarid qilinishi mumkin. Bizning ichki jamoamiz ushbu birliklarni sizning aniq talablaringizga to'liq moslashtira oladi. E'tibor bering, moslashtirishlar/moslashtirishlar yetkazib berish muddatlariga ta'sir qilishi mumkin.`,
    },
    {
      label: "Comments",
      value: "Comments",
      desc: `Bizning ommabop standart yuk tashish konteynerlari konversiyalari qatorimiz bir qator tanlangan sektorlarda mijozlarning o'ziga xos ehtiyojlarini qondirish uchun mo'ljallangan. Ushbu mahsulotlarni onlayn xarid qilish mumkin va buyurtma qilingan kundan boshlab 6-8 hafta ichida foydalanishga tayyor holda yetkazib berilishi mumkin.

      Ushbu standart konteyner konvertatsiya birliklari muayyan ehtiyojlarni qondirish uchun moslashtirilishi mumkin. Har bir birlik uchun mashhur variantlar tanlanishi va konversiya mahsuloti bilan bir qatorda onlayn xarid qilinishi mumkin. Bizning ichki jamoamiz ushbu birliklarni sizning aniq talablaringizga to'liq moslashtira oladi. E'tibor bering, moslashtirishlar/moslashtirishlar yetkazib berish muddatlariga ta'sir qilishi mumkin.`,
    }
  ];

  return (
    <div className='tab_of wrapper'>
      <Tabs id="custom-animation" value="html">
        <TabsHeader>
          {data.map(({ label, value }) => (
            <Tab key={value} value={value}>
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody
          animate={{
            initial: { y: 250 },
            mount: { y: 0 },
            unmount: { y: 250 },
          }}
        >
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
}

export default DescriptionBox