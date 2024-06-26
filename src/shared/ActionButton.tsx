import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "./types";

type Props = {
    children: React.ReactNode;
    setSelectedPage : (value: SelectedPage) => void;
}

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      className="rounded-b-lg bg-primary-100 px-10 py-2 hover:bg-secondary-500 hover:text-white"
      onClick={()=> setSelectedPage(SelectedPage.MessageUs)}
      href={`#${SelectedPage.MessageUs}`}
    >
        {children}
    </AnchorLink>
  )
}

export default ActionButton