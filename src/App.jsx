import { CustomerReviews, Footer, Hero, PopularProducts, Services,
  SpecialOffer, Subscribe, SuperQuality
 } from "./sections"
 import Nav from "./components/Nav"



function App() {

  return (
<>

    <main className="relative">
      <Nav />

      <section
      className='xl:padding-l wide:padding-r padding-b'>
        <Hero />
      </section>
      <section
      className="padding">
        <PopularProducts />
      </section>
      <section
      className="padding">
        <SuperQuality />
      </section>
      <section
      className="padding-x py-10">
        <Services />
      </section>
      <section
      className="padding">
        <SpecialOffer />
      </section>
      <section
      className="bg-pale-blue padding">
        <CustomerReviews />
      </section>
      <section
      className="padding-x sm:py32 py-16 w-full">
        <Subscribe />
      </section>
      <section
      className="padding-x padding-t bg-black pb-8">
        <Footer />
      </section>

    </main>


</>
  )
}

export default App
