import { useContext } from 'react'
import ScrollContext from '../context/ScrollContext'

const About = () => {
  const { aboutRef } = useContext(ScrollContext)

  return (
    <>
      {/* scroll-mt-16 prevents a sticky navbar from overlapping the section when scrolled into view */}
      <section 
        ref={aboutRef}
        id="about"
        className="w-full max-w-4xl mx-auto px-6 py-16 md:py-24 scroll-mt-16 text-justify"
      >
        {/* Section Heading */}
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl mb-6 border-b border-slate-100 dark:border-slate-800 pb-3">
          About Us
        </h2>

        {/* Styled Paragraph Content */}
        <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed md:leading-loose tracking-wide first-letter:text-5xl first-letter:font-bold first-letter:text-blue-600 dark:first-letter:text-blue-400 first-letter:mr-3 first-letter:float-left">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus quis culpa expedita fuga nostrum repellat voluptas aperiam. Eum modi deserunt perferendis excepturi nemo distinctio cupiditate, pariatur aspernatur ex magni recusandae dolorem blanditiis quos accusamus debitis. Dignissimos ratione natus recusandae quasi! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, eaque placeat modi in nulla doloribus facilis exercitationem ea deleniti sapiente, officiis, fugit quis accusantium. Facilis asperiores aliquid delectus, minus ut doloribus dolores non eius recusandae est quis reiciendis? Non eligendi, suscipit quod libero neque distinctio enim, sint est obcaecati ipsa corrupti a atque ullam? Aperiam blanditiis dignissimos, tenetur quaerat adipisci voluptatibus quas voluptates nostrum quisquam qui dolorum, ex neque, est ipsa libero pariatur impedit commodi. Optio nemo, ducimus a in recusandae, vel, molestias doloremque velit quo accusantium mollitia ea consequuntur. Rerum numquam fugit in ea, veritatis eos quasi reiciendis iure illo exercitationem maxime unde? Perferendis vitae aperiam beatae delectus alias ex asperiores unde quas id placeat numquam saepe quibusdam corrupti, ullam cumque temporibus iure ducimus ipsam in. Illo, dolor sunt odit ducimus mollitia placeat corporis, cupiditate aliquid distinctio porro modi aliquam eligendi? Doloremque quas totam, ipsam facilis obcaecati voluptatibus rerum. Consectetur corporis libero quia laboriosam. Tempore atque tempora, facilis natus repellat, magnam a, rerum deleniti cum obcaecati quia. Numquam, atque excepturi pariatur, expedita exercitationem dolore praesentium ea libero nihil error nam eum ex asperiores totam illo velit molestiae facilis, voluptatum dignissimos? Dicta incidunt minus fugit quos ut ipsa nemo neque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut corporis qui tempore iusto maiores culpa dolorem ex. Inventore enim obcaecati nam cumque excepturi, exercitationem nisi, pariatur delectus, error atque beatae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae perferendis eaque deleniti iste natus consequuntur, sapiente quaerat similique error sunt voluptatibus magnam odio unde, illum impedit alias quod! Saepe veniam ex non corporis earum necessitatibus nostrum unde asperiores magnam excepturi?
        </p>
      </section>
    </>
  )
}

export default About
