export const metadata = {
  title: 'My Next.js App',
  description: 'Product page demo',
};


export default function RootLayout({ children }) {

  return (
   
   <html lang="en">
      <body>
        {children}
      </body>
    </html>
    
  )
}




