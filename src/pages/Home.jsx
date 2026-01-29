export default function Home({ onContact }) {
  return (
    <div className="relative min-h-screen px-6 pt-14">
      <section className="relative mx-auto flex min-h-screen w-full max-w-3xl flex-col items-center justify-center text-center">
        <div className="w-full flex items-center justify-center">

          <img src="/assets/Innerith.svg" alt="Innerith" className="w-[500px] h-auto" />
        </div>
        <h1 className="mt-5 text-4xl sm:text-6xl font-semibold tracking-[0.35em] text-[#F4C430]">COMING SOON</h1>

          
            <div className="w-full max-w-xs h-px bg-gray-700 mt-16"></div>
              <button
                type="submit"
                className="cursor-pointer mt-10 bg-[rgba(244,196,48,0.20)] border border-[#f4c430] hover:bg-[#E4AF0C] hover:border-[#E4AF0C] text-[#FAFAFA] rounded-lg w-fit py-3 px-16 text-lg font-medium"
                onClick={onContact}
              >
                Contact us
              </button>
       
      </section>
    </div>
  )
}
