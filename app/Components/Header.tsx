import { CgProfile } from "react-icons/cg";

const Header = () => {
  return (
    <div className="w-full flex justify-between items-center">
      <h1 className="eight-bit font-bold text-6xl">DevDash &lt;/&gt; </h1>
      <figure className="flex flex-col items-center">
        <CgProfile className="text-3xl" />
        <p>name</p>
      </figure>
    </div>
  )
}

export default Header
